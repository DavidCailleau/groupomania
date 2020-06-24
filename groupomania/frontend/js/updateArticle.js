
let idArticle = "";

function getUpdateArticle() {
  idArticle = location.search.substring(4);
  fetch(url + "api/article/" + idArticle, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (updateArticle) {
      getArticleToDisplay(updateArticle);
      console.log(updateArticle);
      return updateArticle;
    })
    .catch((error) => {
      console.log(error);
    });
}

function getArticleToDisplay(updateArticle) {
  console.log(updateArticle);

  let nomUpdateArticle = document.getElementById("article-nom-update");
  let imageUpdateArticle = document.getElementById("image-update-article");
  let photoUpdateArticle = document.createElement("img");
  let descriptionUpdateArticle = document.getElementById("description-update");
  let prixUpdateArticle = document.getElementById("prix-update");
  let actionButtonUpdate = document.getElementById("btn-update-objet");
  let btnRetourUpdate = document.createElement("button");

  photoUpdateArticle.setAttribute("id", "img-update-article");
  photoUpdateArticle.setAttribute("src", updateArticle.article_image_url);
  photoUpdateArticle.setAttribute("alt", "Photo de l'article");
  btnRetourUpdate.setAttribute("id", "btn-retour-update");
  btnRetourUpdate.setAttribute("type", "button");
  btnRetourUpdate.setAttribute("name", "retour-update");
  btnRetourUpdate.setAttribute(
    "onclick",
    "window.location.href='../html/intramarket.html'"
  );

  imageUpdateArticle.appendChild(photoUpdateArticle);
  actionButtonUpdate.appendChild(btnRetourUpdate);

  /* Contenu des balises  HTML */
  nomUpdateArticle.value = updateArticle.article_name;
  descriptionUpdateArticle.value = updateArticle.article_description;
  btnRetourUpdate.textContent = "Retour";
  prixUpdateArticle.value = updateArticle.article_price;
}

function updateArticle() {
  idArticle = location.search.substring(4);
  let articleName = document.getElementById("article-nom-update").value;
  let articleDescription = document.getElementById("description-update").value;
  let articlePrice = document.getElementById("prix-update").value;

  const formDataArticle = new FormData();
  formDataArticle.append("article_name", articleName);
  formDataArticle.append("article_description", articleDescription);
  formDataArticle.append("article_price", articlePrice);
  

  fetch(url + "api/article/" + idArticle, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    body: formDataArticle,
  })
    .then(function (response) {
      return response.json();
    })
    .then(
    (window.location = "../html/intramarket.html"),
      alert("Article mis à jour")
    )
    .catch((error) => {
      console.log(error);
    });
}

let modifArticle = document.getElementById("update-form_market");
modifArticle.addEventListener("submit", ($event) => {
  $event.preventDefault();
  updateArticle();
});
