import WebFont from 'webfontloader'

WebFont.load({
    google: {
        families:['Lemonada:400,700', 'cursive']
    },
})

const theme = {
    layout: {color: {inputBackground: 'transparent',
        fontColor: 'black'}, border:{ border:'none', borderRadius: '3px'}},
    font: {header: {family: 'Lemonada', weight: 700, color: 'black'},
        body: {family: 'Lemonada', weight: 400, color: 'black'}
    },
    effects: {button: {borderDensity: 'solid', hover: {borderColor: 'rgba(204, 204, 204, 0.8)'},
        active: {boxShadow: '0px 0px 2px 2px grey inset', backGroundColor: 'rgba(237, 237, 237, 0.5)'}}
    },

}

export default theme