const btn = document.querySelector('button');

btn.addEventListener('click', (e)=> {
    btn.style.background = 'crimson'
    setTimeout(()=> {btn.style.background = ''}, 2000)
})