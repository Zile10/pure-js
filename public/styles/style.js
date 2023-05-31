let colorPrimary = '#fff'
let colorSecondary = 'crimson'
let fontPrimary = 'Nunito'

function flexContentCenterSpaced(){
    return {
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'center'
    }
}

// Default Styling
style('*', {
    margin: '0',
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: fontPrimary,
})

style('nav', {
    height: '60px',
    padding: '0 20px',
    backgroundColor: '#f0E0ff !important'
})

// H1
style('h1', {
    textAlign: 'center',
    color: 'black'
})

// Button
style('button.my-btn', {
    color: colorPrimary,
    backgroundColor: colorSecondary,
    fontWeight: 'bold',
    padding: '10px 20px',
    display: 'block',
    margin: '5px auto',
    border: 'none',
})

// .flex
style('.flex', flexContentCenterSpaced)
style()