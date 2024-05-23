// uglifyjs js/app.js
// css-minify -f css/app.css
// https://validator.w3.org/#validate-by-upload

var productListShown = false;

function gotoContact() {
    location.href = '#contact';
}

function gotoHome() {
    location.href = 'index.html';
}

function setElementVisible(element, isVisible) {
    if (isVisible) {
        element.css({ "visibility": "visible", "display": "flex" });
    }
    else {
        element.css({ "visibility": "hidden", "display": "none" });
    }
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

    // Hide product list.
    setElementVisible($('#product-list'), false);
}


// const mobileQuery = window.matchMedia("(max-width: 768px)");
// const tabletQuery = window.matchMedia("(max-width: 992px)");
// const desktopQuery = window.matchMedia("(min-width: 992px)");

// function handleBreakPoint() {
//     if (mobileQuery.matches) {
//         console.log("mobileQuery");
//         $('#footer-mailing-address-first').css({ "visibility": "visible", "display": "flexbox" });
//         setElementVisible($('#footer-mailing-address-last'), false);
//     }
//     else if (tabletQuery.matches) {
//         console.log("tabletQuery");
//         setElementVisible($('#footer-mailing-address-first'), false);
//         $('#footer-mailing-address-last').css({ "visibility": "visible", "display": "flex" });
//     }
//     else if (desktopQuery.matches) {
//         console.log("desktopQuery");
//         $('#footer-mailing-address-first').css({ "visibility": "visible", "display": "flexbox" });
//         setElementVisible($('#footer-mailing-address-last'), false);
//     }
// }

// function initWindowBreakPoints() {
//     mobileQuery.addListener(handleBreakPoint);
//     tabletQuery.addListener(handleBreakPoint);
//     desktopQuery.addListener(handleBreakPoint);
//     handleBreakPoint();
// }

let modalSource = null;
let productImageCount = 0;
$(document).ready(function () {
    initProducts();

    initLanguage();

    // initWindowBreakPoints();

    // Get the modal
    let modalDialog = $("#modal-dialog");

    let modalImg = document.getElementById("modal-content");

    const closeModal = (evt) => {
        modalDialog.css({ display: "none" });
    };

    modalDialog.click(closeModal);
    $("#modal-close").click(closeModal);

    $("#next-image-button").click(evt => {
        evt.stopPropagation();

        let imageIndex = $(modalSource).attr("image-index");
        imageIndex++;

        if (imageIndex < productImageCount) {
            let newImage = document.getElementById("product-image-" + imageIndex);

            modalSource = newImage;
            modalImg.src = newImage.src;
        }
        else {
            let newImage = document.getElementById("product-image-0");
            modalSource = newImage;
            modalImg.src = newImage.src;
        }
    });

    $("#previous-image-button").click(evt => {
        evt.stopPropagation();

        let imageIndex = $(modalSource).attr("image-index");

        if (imageIndex == 0) {
            let newImage = document.getElementById("product-image-" + (productImageCount - 1));
            modalSource = newImage;
            modalImg.src = newImage.src;
        }
        else {
            imageIndex--;
            let newImage = document.getElementById("product-image-" + imageIndex);

            modalSource = newImage;
            modalImg.src = newImage.src;
        }
    });


    // var captionText = document.getElementById("caption");

    $(".product-img").each(function (index, element) {
        $(element).attr("image-index", index);
        $(element).attr("id", "product-image-" + index);

        // console.log(index);
        $(element).click(() => {
            modalSource = this;
            // console.log("DAKLDA", this);

            modalDialog.css({ display: "block" });
            modalImg.src = this.src;
        });

        productImageCount++;
        console.log("productImageCount", productImageCount);
        // $(element).tags();
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

    // window.getComputedStyle(document.documentElement).getPropertyPriority

    // console.log(window.getComputedStyle(document.documentElement));

    // console.log(window.getComputedStyle(document.documentElement).getPropertyValue("--footer-mailing-address-first-visibility"));
});