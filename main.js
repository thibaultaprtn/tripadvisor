document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded correctly");

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      console.log("Le bouton submit fonctionne");

      const data = {
        firstname: document.querySelector("#fname").value,
        lastname: document.querySelector("#lname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };

      console.log(data);
    });
});
