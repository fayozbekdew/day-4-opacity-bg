const bg = document.querySelector('.bg')
const text = document.querySelector('.loading-text')


let blur = 100



const bluring = () => {
    blur--

    if(blur <= 0){
        clearInterval(int)
    }
    text.innerHTML = `${blur} %`
    text.style.opacity = `0.${blur <= 10 ? 0 : blur}`
    bg.style.filter = `blur(${blur}px)`
}

const int = setInterval(bluring, 30)