const but = document.getElementById("but");

but.addEventListener("click", function () {
  frist = prompt("Année de naissance d'Aenor et d'Audric", "\nAA/AA");
  if (frist === "09/11") {
    seconde = prompt(
      "A quelle marque de voiture ce chiffre coresspond-t-il ?",
      "0911"
    );
  } else {
    alert("Faux recomence");
  }

  if (seconde === "Porsche") {
    dernier = prompt("Je suis un piment et je roule, qui suis-je ?", "");
  } else {
    alert("Faux recomence");
  }
  if (dernier === "Cayenne") {
    alert(
      "Bravo!😎" +
        "\n❤❤Bonne fête papa (de tes enfants).❤❤" +
        "\n❤❤Dans la chambre d'Aenor, tu te rendras. Sur place le violet te guidera❤❤"
    );
  } else {
    alert("Faux recomence");
  }
});
