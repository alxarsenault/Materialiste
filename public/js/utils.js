// uglifyjs js/app.js
// css-minify -f css/app.css
// https://validator.w3.org/#validate-by-upload

function print() {
    console.log.apply(null, arguments);
};

function setElementVisible(element, isVisible) {
    if (isVisible) {
        element.css({ "visibility": "visible", "display": "flex" });
    }
    else {
        element.css({ "visibility": "hidden", "display": "none" });
    }
}
