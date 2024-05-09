document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    // Vous pouvez ajouter ici le code pour envoyer les données à votre serveur ou pour les traiter localement.
    console.log("Nom :", name);
    console.log("Email :", email);
    console.log("Téléphone :", phone);
    // Réinitialiser le formulaire après soumission
    form.reset();
  });
});
