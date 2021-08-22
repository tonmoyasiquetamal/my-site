/* Simplify The Function */
function common() {
    const bestPriceText = document.getElementById("best-price").innerText;
    const bestPrice = parseInt(bestPriceText);

    const ramText = document.getElementById("ram-cost").innerText;
    const ramPrice = parseInt(ramText);

    const romText = document.getElementById("rom-cost").innerText;
    const romPrice = parseInt(romText);

    const deliveryText = document.getElementById("delivery-cost").innerText;
    const deliveryPrice = parseInt(deliveryText);

    let totalprice = document.getElementById("total-price");
    totalprice.innerText = (bestPrice + ramPrice + romPrice + deliveryPrice);
    document.getElementById("discount-offer").innerText = totalprice.innerText;
    return totalprice;
}


/* Memory Cost Link Up */

document.getElementById("ram-8gb").addEventListener("click", function () {
    document.getElementById("ram-cost").innerText = 0;
    priceCounting(0, 180, 0, 0, 0, 0, 0);

});
document.getElementById("ram-16gb").addEventListener("click", function () {
    document.getElementById("ram-cost").innerText = 180;
    priceCounting(0, 180, 0, 0, 0, 0, 0);

});

/* Storage Cost Link Up */
document.getElementById("storage-256gb").addEventListener("click", function () {
    document.getElementById("rom-cost").innerText = 0;
    priceCounting(0, 0, 0, 0, 0, 0, 100);

});
document.getElementById("storage-512gb").addEventListener("click", function () {
    document.getElementById("rom-cost").innerText = 100;
    priceCounting(0, 0, 0, 100, 0, 0, 0);

});

document.getElementById("storage-1tb").addEventListener("click", function () {
    document.getElementById("rom-cost").innerText = 180;
    priceCounting(0, 0, 0, 0, 180, 0, 0);

});

/* Delivery Cost Link Up */
document.getElementById("free-delivery").addEventListener("click", function () {
    document.getElementById("delivery-cost").innerText = 0;
    priceCounting(0, 0, 0, 0, 0, 0, 20);
});
document.getElementById("charge-delivery").addEventListener("click", function () {
    document.getElementById("delivery-cost").innerText = 20;
    priceCounting(0, 0, 0, 0, 0, 0, 20);
});

/* The Price Calculating with Conditional Applying */
function priceCounting(ram8gb, ram16gb, rom256gb, rom512gb, tp, db, dp) {
    if (rom256gb = 0) {
        common()
    }
    else if (rom512gb = 100) {
        common()
    }
    else if (tp = 180) {
        common()
    }

    else if (dp = 20) {
        common()
    }
    else if (db = 1) {
        common()
    }
    else if (ram16gb = 180) {
        common()
    }
    else if (ram8gb = 0) {
        common()
    }
}

/* Promo-Code Link Up */
document.getElementById("promo-code").addEventListener("click", function () {
    const promoInput = document.getElementById("promo-input");
    if (promoInput.value == "stevekaku") {
        const totalDownText = document.getElementById("discount-offer");
        const totalDownPrice = parseInt(totalDownText.innerText);
        const newUpgrade = totalDownPrice * 20 / 100;
        const upgradePrice = totalDownPrice - newUpgrade
        totalDownText.innerText = upgradePrice;
        /* My Mistake & Improve it!!! content */
        document.getElementById("promo-code").disabled = true;
        promoInput.style.display = 'none';
        document.getElementById("area").innerText = "Hurrey! Promo Code Applied!!";
        document.getElementById("area").style.cssText = "background-color:green; width:auto; padding-left: 7%; padding-right: 7%; height: 50px; text-align:center; color:white; font-weight: 600;"


    }
    /* Storage Cost Link Up */
    else {
        alert("Shit!! What Have You Done With Your Original Promo Code!!Enter Your Correct Promo-Code For 20% Discount"); 
    }
});