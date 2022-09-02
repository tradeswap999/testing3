let price = 0;
let supply = 11111;
$(document).ready(function() {


    if (!window.web3) {
        // window.location.replace("https://metamask.app.link/dapp/www.mutantshiba.sale")
        document.getElementById("not-connected").style.display = "block";
        document.getElementById("connected-btns").style.display = "none";
        document.getElementById("wnot-connected").style.display = "none";
    } else if (account > 1) {
        document.getElementById("not-connected").style.display = "none";
        document.getElementById("connected-btns").style.display = "block";
        document.getElementById("wnot-connected").style.display = "none";
    } else {
        document.getElementById("not-connected").style.display = "none";
        document.getElementById("connected-btns").style.display = "none";
        document.getElementById("wnot-connected").style.display = "block";

    }



});