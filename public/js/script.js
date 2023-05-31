const btn = document.querySelector('.my-btn');

btn.addEventListener('click', (e)=> {
    style(btn, {
        backgroundColor: 'blue'
    })
    setTimeout(()=> {
        style(btn, {
            backgroundColor: colorSecondary
        })
    }, 500)
})