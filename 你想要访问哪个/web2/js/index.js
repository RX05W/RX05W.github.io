$("#a1").click(function() {
    var card_1 = document.querySelectorAll("div.top-card-1-true");
    for (let i = 0; i < card_1.length; i++) {
        $(card_1[i].css("order", -i))
    }
});