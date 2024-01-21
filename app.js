console.log("Let's get this party started!");

const $inputVal = $("#search-term");
const $gifArea = $("#gif-area");

$('#gif-form').on('submit', async function (e) {
    e.preventDefault();
    let serachTerm = $inputVal.val();
    const gifUrl = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params:{
            api_key: "LLzvBMg18Imkqp9dnp62rzkOaXHWvjFW",
            q: serachTerm
        }
    });
    let gifArr = await gifUrl.data.data;
    let random = Math.floor(Math.random() * gifArr.length);
    let img = await $('<img />', {
        src: gifArr[random].images.original.url,
        alt: serachTerm
    });
    img.appendTo($gifArea);
    $inputVal.val('');
})

$('.remove').on('click', function(e){
    $('img').remove();
})
