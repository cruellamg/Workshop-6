function afficherTable() {
    const nb = document.querySelector('#nb').value;
    let table = "";

    for (let i = 1; i <= 10; i++) {
      table += `${nb} x ${i} = ${nb * i}<br>`;
    }

    document.getElementById('resultat').innerHTML = table;
}