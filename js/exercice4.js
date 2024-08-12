const submit = document.querySelector("#submit");
const app = document.querySelector("#app");

const etudiants = [
    "Christ-Erwan",
    "Habib",
    "Maureen",
    "Rajaa",
    "Christ-Axel",
    "Marie-Cassandre",
    "Yanis",
    "Marie-Grâce",
    "Patrick",
    "Esther"
];

app.innerHTML = "<ol>" + etudiants.map(etudiant => `<li>${etudiant}</li>`).join("") + "</ol>";

submit.addEventListener("click", () => {
    const hack = document.querySelector("#hack").value; /* .value pour récupérer le contenu saisit */
    console.log(hack);
    etudiants.push(hack);
    app.innerHTML = "<ol>" + etudiants.map(etudiant => `<li>${etudiant}</li>`).join("") + "</ol>";
})