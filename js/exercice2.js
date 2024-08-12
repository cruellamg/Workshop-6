function calcul() {
    const nb1 = parseFloat(document.querySelector("#nb1").value);
    const nb2 = parseFloat(document.querySelector("#nb2").value);
    const operation = document.querySelector("#operation").value;
    let resultat = "";

  switch(operation) {
    case'+':
      resultat= nb1+nb2;
      break;
    case'-':
      resultat= nb1-nb2;
      break;
    case'*':
      resultat = nb1*nb2;
      break;
    case'/':
      resultat = nb1/nb2;
      break;
  }

  document.querySelector("#resultat").textContent= `le resultat est : ${resultat}`;

}