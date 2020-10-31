const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  $.addEventListener("click", () => {
    console.log("click !!");
  });

  //$.querySelector("#display-message").addEventListener("click", (OK) => {
  //console.log("OK");
  //});

  $.querySelector("#contact-form").addEventListener("submit", async (event) => {
    // console.log(event);
    event.preventDefault(); // annule le rafraichissement automatique de la page

    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      description: $.querySelector("#message").value,
    };

    console.log(data);

    const response = await axios.post("http://localhost:3000/", data);

    if (response.status === 200) {
      alert("Un mail vous a été envoyé");
    } else {
      alert("Une erreur est survenue");
    }
  });
});
