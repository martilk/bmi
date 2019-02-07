function beregn_bmi() {
    var alder = document.getElementById("alder").value;
    var vaegt = document.getElementById("vaegt").value;
    var hoejde = document.getElementById("hoejde").value;
    var bmi = vaegt / (hoejde * hoejde);
    var resultat = "";

    document.getElementById("resultat").value = bmi.toFixed(2);

    if (alder >= 18) {
        if (bmi < 18.5) {
            resultat = "Undervægtig";
        } else if (bmi < 24.9) {
            resultat = "Normalvægtig";
        } else {
            resultat = "Overvægtig";
        }
    } else {
        resultat = "Fejl du skal være over 18 år";
        
    }

    document.getElementById("resultat-vaegt").value = resultat;
}



// Hovedprogramdel

document.getElementById("beregn").addEventListener("click", beregn_bmi);
