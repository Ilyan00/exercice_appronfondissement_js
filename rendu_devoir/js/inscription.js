function validerFormulaire(e) {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut

    let body = document.body; // Sélectionne le body

    let nom = document.getElementsByClassName("nom");
    let email = document.getElementsByClassName("email");
    let motDePasse = document.getElementById("motDePasse");

    // Vérification du bouton radio
    let genreHomme = document.getElementById("homme");
    let genreFemme = document.getElementById("femme");
    let genreError = document.getElementById("genreError");

    if (!genreHomme.checked && !genreFemme.checked) {
        genreError.textContent = "Veuillez sélectionner un genre.";
        genreError.classList.add("error");
    } else {
        genreError.textContent = "";
        genreError.classList.remove("error");
    }

    // Validation du mot de passe avec le regex
    let motDePasseError = document.getElementById("motDePasseError");

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;

    if (!regex.test(motDePasse.value)) {
        motDePasseError.textContent = "Le mot de passe ne respecte pas les critères requis.";
        motDePasseError.classList.add("error");
        motDePasse.classList.add("error-input");
    } else {
        motDePasseError.textContent = "";
        motDePasseError.classList.remove("error");
        motDePasse.classList.remove("error-input");
    }

    if (regex.test(motDePasse.value) && (genreHomme.checked || genreFemme.checked) && (length(nom)!=0) && (length(email)!=0)){
        document.getElementById("monFormulaire").submit();
    }
}

let bt=document.querySelector('#bt');
bt.addEventListener('click',validerFormulaire)
