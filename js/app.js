var productListShown = false;


function gotoContact() {
    location.href = '#contact';
}

function setElementVisible(element, isVisible) {
    if (isVisible) {
        element.css({ "visibility": "visible", "display": "flex" });
    }
    else {
        element.css({ "visibility": "hidden", "display": "none" });
    }
}

function resetLanguage() {
    const currentLanguage = localStorage.language;

    $(".lang-fr").each(function (index, element) {
        setElementVisible($(element), currentLanguage == "fr");
    });

    $(".lang-en").each(function (index, element) {
        setElementVisible($(element), currentLanguage == "en");
    });
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    resetLanguage();
}

function toggleProducts() {
    productListShown = !productListShown;
    setElementVisible($('#product-list'), productListShown);

    $(".product-list-arrow").each(function (index, element) {
        $(element).html(productListShown ? "&nbsp;↑" : "&nbsp;↓");
    });
}

function initProducts() {
    const source = $('#product-template').html();
    const template = Handlebars.compile(source);

    let productListLength = products.length;

    const productPerRow = 4;
    let rowCount = Math.ceil(productListLength / productPerRow);

    let productRows = "";
    for (let i = 0; i < rowCount; i++) {
        productRows += '<div id="product-row-' + i + '" class="row"></div>';
    }

    $("#product-list-content").html(productRows);

    // Content for each rows.
    for (let i = 0; i < rowCount; i++) {
        let content = "";
        for (let k = i * productPerRow; k < Math.min(productListLength, (i + 1) * productPerRow); k++) {
            const html = template(products[k]);
            content += html;
        }

        $("#product-row-" + i).html(content);
    }
}

$(document).ready(function () {
    initProducts();

    setLanguage("fr");

    // Hide product list.
    setElementVisible($('#product-list'), false);


    // Get the modal
    var modal = document.getElementById("myModal");

    modal.onclick = function () {
        modal.style.display = "none";
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    $(".product-img").each(function (index, element) {
        // Get the image and insert it inside the modal - use its "alt" text as a caption
        // var img = document.getElementById("product-img-01");
        element.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    // // Get the image and insert it inside the modal - use its "alt" text as a caption
    // var img = document.getElementById("product-img-01");
    // var modalImg = document.getElementById("img01");
    // var captionText = document.getElementById("caption");
    // img.onclick = function () {
    //     modal.style.display = "block";
    //     modalImg.src = this.src;
    //     captionText.innerHTML = this.alt;
    // }

    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function () {
    //     modal.style.display = "none";
    // }
});