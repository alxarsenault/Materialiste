var mt = mt || {};

mt.initFooter = function() {
    $("body").append(`
        <section id="contact" class="footer">
        <div class="container">
            <h2 class="heading lang-en">Inquire about a <br>furniture</h2>
            <h2 class="heading lang-fr">Renseignez-vous <br>sur un meuble</h2>

            <div id="footer-mailing-address-last" class="row">
            <div class="col">
                <h4 class="footer-heading lang-en">
                Mailing Address
                </h4>
                <h4 class="footer-heading lang-fr">
                Adresse Postale
                </h4>

                <p class="para-line footer-text">
                123 de Lorimier, Montréal, Québec, Canada
                </p>
            </div>
            </div>

            <div class="row">
            <div id="footer-mailing-address-first" class="col">
                <h4 class="footer-heading lang-en">
                Mailing Address
                </h4>
                <h4 class="footer-heading lang-fr">
                Adresse Postale
                </h4>

                <p class="para-line footer-text">
                123 de Lorimier, Montréal, Québec, Canada
                </p>
            </div>
            <div class="col">
                <h4 class="footer-heading lang-en">
                Email Address
                </h4>
                <h4 class="footer-heading lang-fr">
                Adresse Email
                </h4>

                <p class="para-line footer-text">
                <a class="footer-text" href="mailto:materialistemobilier@gmail.com"> materialistemobilier@gmail.com</a>
                </p>
            </div>
            <div class="col">
                <h4 class="footer-heading lang-en">
                Phone Number
                </h4>
                <h4 class="footer-heading lang-fr">
                Téléphone
                </h4>
                <p class="para-line footer-text">
                (514) 717-1581
                </p>
            </div>
            </div>
        </div>
        </section>
    `);
}
