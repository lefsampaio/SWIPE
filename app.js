const gifs = document.querySelector('.gifs');
const hammer = new Hammer(gifs);

const getGifCards = () => {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=kzrp61DouoQLunyHqor9U9Ih5sEAWqxo&tag=&rating=G')
        .then(response => response.json())
        .then(data => {
            let gifCards = data.data.images.fixed_height.url
            renderGifs(gifCards)
        })
}
const renderGifs = (gifs) => {
    const template = `
            <img class="img" src="${gifs}">
        <div class="btn_swipe">
            <button><i class="fa fa-times"></i></button>
            <button><i class="fa fa-heart "></i></button>            
        </div>`
    document.querySelector('.gifs').innerHTML = template
}

hammer.on('swiperight', () => {
    document.querySelector('img').classList.add('animated','rotateOutUpRight') ;
    document.querySelector('img').addEventListener('animationend', getGifCards);
})

hammer.on('swipeleft', () => {
    document.querySelector('img').classList.add('animated','rotateOutUpLeft') ;
    document.querySelector('img').addEventListener('animationend', getGifCards);
})

getGifCards();