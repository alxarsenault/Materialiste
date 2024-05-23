// uglifyjs js/app.js
// css-minify -f css/app.css
// https://validator.w3.org/#validate-by-upload

var mt = mt || {};

mt.print = function() {
    console.log.apply(null, arguments);
};

mt.setElementVisible = function(element, isVisible) {
    if (isVisible) {
        element.css({ "visibility": "visible", "display": "flex" });
    }
    else {
        element.css({ "visibility": "hidden", "display": "none" });
    }
}

mt.gotoHome = function () {
    location.href = 'index.html';
}

mt.gotoContact = function () {
    location.href = '#contact';
}


// const mobileQuery = window.matchMedia("(max-width: 768px)");
// const tabletQuery = window.matchMedia("(max-width: 992px)");
// const desktopQuery = window.matchMedia("(min-width: 992px)");

// function handleBreakPoint() {
//     if (mobileQuery.matches) {
//         console.log("mobileQuery");
//         $('#footer-mailing-address-first').css({ "visibility": "visible", "display": "flexbox" });
//         mt.setElementVisible($('#footer-mailing-address-last'), false);
//     }
//     else if (tabletQuery.matches) {
//         console.log("tabletQuery");
//         mt.setElementVisible($('#footer-mailing-address-first'), false);
//         $('#footer-mailing-address-last').css({ "visibility": "visible", "display": "flex" });
//     }
//     else if (desktopQuery.matches) {
//         console.log("desktopQuery");
//         $('#footer-mailing-address-first').css({ "visibility": "visible", "display": "flexbox" });
//         mt.setElementVisible($('#footer-mailing-address-last'), false);
//     }
// }

// function initWindowBreakPoints() {
//     mobileQuery.addListener(handleBreakPoint);
//     tabletQuery.addListener(handleBreakPoint);
//     desktopQuery.addListener(handleBreakPoint);
//     handleBreakPoint();
// }
