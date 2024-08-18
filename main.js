// require("dotenv").config();

document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };

      console.log(data);

      //   const test = await axios
      //     .get("http://localhost:3000/")
      //     .then((response) => {
      //       return response;
      //     });
      //   console.log("test ===>", test);

      const response = await axios.post(
        `https://site--tripadvisor-backend--jwp52j9xkmxc.code.run/form`,
        data
      );
      console.log(response);
      console.log(response.data);
    });
});
