

//////// CREATION ARTICLE /////////

function createArticle() {
  let articleName = document.getElementById("article-nom").value;
  let articleDescription = document.getElementById("description").value;
  let price = document.getElementById("prix").value;
  let imageArticle = document.getElementById("image-market");

  const formDataMessage = new FormData();
  formDataMessage.append("user_id", id);
  formDataMessage.append("article_name", articleName);
  formDataMessage.append("article_description", articleDescription);
  formDataMessage.append("image", imageArticle.files[0]);
  formDataMessage.append("article_price", price);
  formDataMessage.append("email_contact", emailContact);

  fetch(url + "api/article", {
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    body: formDataMessage,
  })
    .then(function (response) {
      return response.json();
    })
    .then(
      (window.location = "../html/intramarket.html"),
      alert("Article ajouté")
    )
    .catch((error) => {
      console.log(error);
    });
}

let submitArticle = document.getElementById("form_market");
submitArticle.addEventListener("submit", ($event) => {
  $event.preventDefault();
  createArticle();
});
