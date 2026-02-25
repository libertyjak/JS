let totalprice = 995
if (totalprice>=100) {
    let definitiveprice = totalprice*0.7
    console.log("Celková cena po slevě, na kterou máte nárok, činí "+ definitiveprice + "Kč.")
} else {
    console.log("K dostání 30% slevy, nakup ještě za "+ (100-totalprice) + "Kč.")
}