/**
 * @param {Str} selector
 * @param {Obj} stylings
 */

function style(selector, ...stylings) {
    let elements;
    (typeof selector != 'object' ? elements = [document.querySelectorAll(selector)] : elements = selector);
    return elements.forEach(e => {
        stylings.forEach(styling => {
            (typeof styling) === 'function' ? styling = styling() : styling = styling
            for (const key in styling) {
                if (Object.hasOwnProperty.call(styling, key)) {
                    let splitKey = `${key}`.split(/(?=[A-Z])/)
                    let processedKey = e.style.cssText;
                    splitKey.forEach(word => {
                        splitKey.indexOf(word) == 0 ? processedKey += word : processedKey += `-${word.toLowerCase()}`
                    })
                    eval(`e.style.cssText += ' ${processedKey}: ${styling[key]};'`)
                }
            }
        })
    })
}

export {style};

// WebFont.load({
//     google: {
//         families: ['Nunito', 'Lato']
//     }
// });

