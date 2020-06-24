

//////// AFFICHAGE ARTICLES /////////

function getAllArticles() {
  fetch(url + "api/article", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (article) {
      getArticles(article);
      console.log(article);
      return article;
    })
    .catch((error) => {
      console.log(error);
    });
}

function getArticles(article) {
  console.log(article);

  let listeArticle = document.getElementById("liste-article");

  article.reverse(article.article_date).forEach((article) => {
    let articleContenant = document.createElement("a");
    let articleIllustration = document.createElement("div");
    let articleElement = document.createElement("div");
    let articlePhoto = document.createElement("img");
    let articleNom = document.createElement("h3");
    let articlePrix = document.createElement("p");

    /*Ajout des attributs au balise index HTML */
    articleContenant.setAttribute("class", "box-article");
    articleContenant.setAttribute("href", "article.html?id=" + article.id);
    articleIllustration.setAttribute("class", "article_illustration");
    articlePhoto.setAttribute("class", "image-article");
    articlePhoto.setAttribute("src", article.article_image_url);
    articlePhoto.setAttribute("alt", "Photo de l'article");
    articleElement.setAttribute("class", "article_element");
    articleNom.setAttribute("class", "article_nom");
    articlePrix.setAttribute("class", "article_prix");

    /* Agencement des éléments index HTML */
    listeArticle.appendChild(articleContenant);
    articleContenant.appendChild(articleElement);
    articleElement.appendChild(articleNom);
    articleElement.appendChild(articleIllustration);
    articleIllustration.appendChild(articlePhoto);
    articleElement.appendChild(articlePrix);

    /* Contenu des balises index HTML */
    articleNom.textContent = article.article_name;
    articlePrix.textContent = article.article_price + " €";
  });
}

let idArticle = "";

function getOneArticle() {
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
    .then(function (oneArticle) {
      getArticle(oneArticle);
      console.log(oneArticle);
      return oneArticle;
    })
    .catch((error) => {
      console.log(error);
    });
}

function getArticle(oneArticle) {
  console.log(oneArticle);

  let nomSingleArticle = document.getElementById("nom-single-article");
  let imageSingleArticle = document.getElementById("image-single-article");
  let photoSingleArticle = document.createElement("img");
  let dateArticle = document.getElementById("date-annonce");
  let descriptionSingleArticle = document.getElementById(
    "description-single-article"
  );
  let prixSingleArticle = document.getElementById("prix-single-article");
  let actionButtonArticle = document.getElementById("action-button-article");
  let btnRetourArticle = document.createElement("button");

  photoSingleArticle.setAttribute("id", "img-article");
  btnRetourArticle.setAttribute("id", "btn-retour-article");
  btnRetourArticle.setAttribute("type", "button");
  btnRetourArticle.setAttribute("name", "retour-article");
  btnRetourArticle.setAttribute(
    "onclick",
    "window.location.href='../html/intramarket.html'"
  );
  photoSingleArticle.setAttribute("src", oneArticle.article_image_url);
  photoSingleArticle.setAttribute("alt", "Photo de l'article");

  imageSingleArticle.appendChild(photoSingleArticle);
  actionButtonArticle.appendChild(btnRetourArticle);

  /* Contenu des balises  HTML */
  let date= new Date(oneArticle.article_date);
  let dateAnnonce = date.getDate() +
  "/" +
  (date.getMonth() + 1) +
  "/" +
  date.getFullYear() +
  " à " +
  date.getHours() +
  ":" +
  ("0" + date.getMinutes()).slice(-2);
  dateArticle.textContent = "Date de l'annonce : " + dateAnnonce;
  descriptionSingleArticle.textContent =
    "Description de l'article : " + oneArticle.article_description;
  btnRetourArticle.textContent = "Retour";
  nomSingleArticle.textContent = oneArticle.article_name;
  prixSingleArticle.textContent = "Prix : " + oneArticle.article_price + " €";
  console.log(oneArticle.user_id);
  console.log(id);

  if (oneArticle.user_id == id) {
    let btnModifyArticle = document.createElement("a");
    let modifyArticle = document.createElement("button");

    btnModifyArticle.setAttribute("id", "btn-modify-article");
    modifyArticle.setAttribute("type", "button");
    btnModifyArticle.setAttribute(
      "href",
      "form-intramarket-update.html?id=" + oneArticle.id
    );

    actionButtonArticle.appendChild(btnModifyArticle);
    btnModifyArticle.appendChild(modifyArticle);
    modifyArticle.textContent = "Modifier";

    let btnDeleteArticle = document.createElement("button");

    btnDeleteArticle.setAttribute("id", "btn-delete-article");
    btnDeleteArticle.setAttribute("type", "button");
    btnDeleteArticle.setAttribute("name", "btn-delete-article");

    actionButtonArticle.appendChild(btnDeleteArticle);

    btnDeleteArticle.textContent = "Supprimer";
  } else if (role == "admin") {
    let btnModifyArticle = document.createElement("a");
    let modifyArticle = document.createElement("button");

    btnModifyArticle.setAttribute("id", "btn-modify-article");
    modifyArticle.setAttribute("type", "button");
    btnModifyArticle.setAttribute(
      "href",
      "form-intramarket-update.html?id=" + oneArticle.id
    );

    actionButtonArticle.appendChild(btnModifyArticle);
    btnModifyArticle.appendChild(modifyArticle);
    modifyArticle.textContent = "Modifier";

    let btnDeleteArticle = document.createElement("button");

    btnDeleteArticle.setAttribute("id", "btn-delete-article");
    btnDeleteArticle.setAttribute("type", "button");
    btnDeleteArticle.setAttribute("name", "btn-delete-article");

    actionButtonArticle.appendChild(btnDeleteArticle);

    btnDeleteArticle.textContent = "Supprimer";
    let emailSingleArticle = document.createElement("a");
    let btnEmailArticle = document.createElement("button");
    emailSingleArticle.setAttribute(
      "href",
      "mailto:" +
        oneArticle.email_contact +
        "?subject=Groupomania Intramarket - Article à vendre :  " +
        oneArticle.article_name
    );
    btnEmailArticle.setAttribute("class", "btn-email-article");
    btnEmailArticle.setAttribute("type", "button");
    btnEmailArticle.setAttribute("name", "email-article");
    actionButtonArticle.appendChild(emailSingleArticle);
    emailSingleArticle.appendChild(btnEmailArticle);
    btnEmailArticle.textContent = "Contacter le vendeur";
  } else {
    let emailSingleArticle = document.createElement("a");
    let btnEmailArticle = document.createElement("button");
    emailSingleArticle.setAttribute(
      "href",
      "mailto:" +
        oneArticle.email_contact +
        "?subject=Groupomania Intramarket - Article à vendre :  " +
        oneArticle.article_name
    );
    btnEmailArticle.setAttribute("class", "btn-email-article");
    btnEmailArticle.setAttribute("type", "button");
    btnEmailArticle.setAttribute("name", "email-article");
    actionButtonArticle.appendChild(emailSingleArticle);
    emailSingleArticle.appendChild(btnEmailArticle);
    btnEmailArticle.textContent = "Contacter le vendeur";
  }

  function deleteArticle() {
    idArticle = location.search.substring(4);
    fetch(url + "api/article/" + idArticle, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(
        (window.location = "../html/intramarket.html"),
        alert("Article supprimé")
      )
      .catch((error) => {
        console.log(error);
      });
  }

  let removeArticle = document.getElementById("btn-delete-article");
  removeArticle.addEventListener("click", ($event) => {
    $event.preventDefault();
    deleteArticle();
  });
}

