var mt = mt || {};

mt.resetLanguage = function () {
    const currentLanguage = localStorage.language;

    $(".lang-fr").each(function (index, element) {
        mt.setElementVisible($(element), currentLanguage == "fr");
    });

    $(".lang-en").each(function (index, element) {
        mt.setElementVisible($(element), currentLanguage == "en");
    });

    if (currentLanguage == "fr") {
        $("#fr-lang-button").removeClass("selected-lang");
        $("#fr-lang-button").addClass("selected-lang");
        $("#en-lang-button").removeClass("selected-lang");
    }
    else {
        $("#en-lang-button").removeClass("selected-lang");
        $("#en-lang-button").addClass("selected-lang");
        $("#fr-lang-button").removeClass("selected-lang");
    }
}

mt.setLanguage = function (lang) {
    if (lang != "en" && lang != "fr") {
        lang = "en";
    }

    localStorage.setItem('language', lang);
    mt.resetLanguage();
}

mt.getNavigatorDefaultLanguage = function () {
    let lang = window.navigator.languages ? window.navigator.languages[0] : null;
    lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

    let shortLang = lang;
    if (shortLang.indexOf('-') !== -1) {
        shortLang = shortLang.split('-')[0];
    }

    if (shortLang.indexOf('_') !== -1) {
        shortLang = shortLang.split('_')[0];
    }

    if (shortLang != "en" && shortLang != "fr") {
        shortLang = "en";
    }

    return shortLang;
}

mt.initLanguage = function () {
    if (localStorage.language) {
        mt.setLanguage(localStorage.language);
    }
    else {
        mt.setLanguage(mt.getNavigatorDefaultLanguage());
    }
}