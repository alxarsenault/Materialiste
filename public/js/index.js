// uglifyjs js/app.js
// css-minify -f css/app.css
// https://validator.w3.org/#validate-by-upload

var app = {
    productListShown: false,
    productImageCount: 0,
    modalSource: null
};

app.productTemplate = `
<div class="col">
    <div class="product">
        <img src="{{image}}" alt="" class="product-img">
        <h5 class="name lang-en">{{en.title}}</h5>
        <h5 class="name lang-fr">{{fr.title}}</h5>
        <p class="para-line lang-en">{{en.info}}</p>
        <p class="para-line lang-fr">{{fr.info}}</p>
    </div>
</div>`;

function gotoContact() {
    location.href = '#contact';
}

function gotoHome() {
    location.href = 'index.html';
}

function toggleProducts() {
    app.productListShown = !app.productListShown;

    setElementVisible($('#product-list'), app.productListShown);

    $(".product-list-arrow").each(function (index, element) {
        $(element).html(app.productListShown ? "&nbsp;↑" : "&nbsp;↓");
    });


    $("#products-first-row").css({ "margin-bottom": app.productListShown ? "3rem" : 0 });
}

function initProducts() {
    const source = $('#product-template').html();
    const template = Handlebars.compile(app.productTemplate);

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

        let imageIndex = Number($(app.modalSource).attr("image-index")) + 1;

        if (imageIndex < app.productImageCount) {
            let newImage = document.getElementById("product-image-" + imageIndex);
            app.modalSource = newImage;
            modalImg.src = newImage.src;
        }
        else {
            let newImage = document.getElementById("product-image-0");
            app.modalSource = newImage;
            modalImg.src = newImage.src;
        }
    });

    $("#previous-image-button").click(evt => {
        evt.stopPropagation();

        let imageIndex = Number($(app.modalSource).attr("image-index"));

        if (imageIndex == 0) {
            let newImage = document.getElementById("product-image-" + (app.productImageCount - 1));
            app.modalSource = newImage;
            modalImg.src = newImage.src;
        }
        else {
            let newImage = document.getElementById("product-image-" + (imageIndex - 1));
            app.modalSource = newImage;
            modalImg.src = newImage.src;
        }
    });


    // var captionText = document.getElementById("caption");

    $(".product-img").each(function (index, element) {
        $(element).attr("image-index", index);
        $(element).attr("id", "product-image-" + index);

        $(element).click(() => {
            app.modalSource = this;
            modalDialog.css({ display: "block" });
            modalImg.src = this.src;
        });

        app.productImageCount++;
    });
});