/**
 * @param {Str} selector
 * @param {Obj} styling
 */

function style(selector, ...stylings) {
    return document.querySelectorAll(selector).forEach(e => {
        stylings.forEach(styling => {
            (typeof styling) === 'function' ? styling = styling() : styling = styling
            for (const key in styling) {
                if (Object.hasOwnProperty.call(styling, key)) {
                    eval(`e.style.${key} = '${styling[key]}'`);
                }
            }
        })
    })
}

WebFont.load({
    google: {
        families: ['Nunito', 'Lato']
    }
});

