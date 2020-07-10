const connection = require('../connectionDbMysql');
const fs = require("fs");

exports.createArticle = (req, res, next) => {
  
  const article_name = req.body.article_name;
  const article_description = req.body.article_description;
  const article_price = req.body.article_price;
  const email_contact = req.body.email_contact;
  const user_id = req.body.user_id;
  const article_image_url = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;

  const queryString = "INSERT INTO Articles (article_name, article_description, article_price, email_contact, user_id, article_image_url) VALUES (?, ?, ?, ?, ?, ?)";
  const inserts = [article_name, article_description, article_price, email_contact, user_id, article_image_url];
  connection.query(queryString, inserts, (error, rows, fields) =>
  {
    
    if(error)
    {
        return res.status(500).json({ error: "mysql" });
    }
    res.status(201).json({ message: 'Article créé !'});
});
}


exports.getAllArticles = (req, res, next) => {
  const queryString = "SELECT id, article_name, article_image_url, article_description, article_price, user_id, email_contact, article_date FROM Articles";
  connection.query(queryString, (error, rows, fields) => {
    if(error) { 
        return res.status(500).json({ error: "mysql" });
    }
    else {
        if(rows[0]) {
            return res.status(200).json(rows);
        }
    }
});
};

exports.getOneArticle = (req, res, next) => {
  const id = req.params.id;
  const inserts = [id]
  const queryString = "SELECT id, article_name, article_image_url, article_description, article_price, user_id, email_contact, article_date FROM Articles WHERE id=?";

  connection.query(queryString, inserts, (error, rows, fields) => {
    if(error) { 
        return res.status(500).json({ error: "mysql" });
    }
    else {
        if(rows[0]) {
            return res.status(200).json(rows[0]);
        }
        else {
            return res.status(404).json({ error: "Article non trouvé"});
        }
    }
});
};


exports.updateOneArticle = (req, res, next) => {
  const id = req.params.id;
  
  const article_name = req.body.article_name;
  const article_description = req.body.article_description;
  const article_price = req.body.article_price;
  const queryString = "UPDATE Articles SET article_name = ?, article_description = ?, article_price = ? WHERE id = ?";
  const inserts = [article_name, article_description, article_price, id];
  connection.query(queryString, inserts, (error, rows, fields) =>
  {
    
    if(error)
    {
        return res.status(500).json({ error: "mysql" });
    }
    
      
    res.status(200).json({ message: 'Article modifié !'});
  }
);
};


exports.deleteArticle = (req, res, next) => {
  const id = req.params.id;
  const inserts = [id]
  const queryString = "SELECT id, article_name, article_image_url, article_description, article_price, user_id, email_contact, article_date FROM Articles WHERE id=?";
  

  connection.query(queryString, inserts, (error, rows, fields) => {
    if(error) { 
      return res.status(500).json({ error: "mysql" });
  }
  else {
      if(rows[0]) {const filename = rows[0].article_image_url.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
  const id = req.params.id;
  const queryString = "DELETE FROM Articles WHERE id=?"
  const inserts = [id];
  connection.query(queryString, inserts, (error, rows, fields) => {
      if(error) {
          return res.status(500).json({ error: "mysql" });
      }
      else {
        
          return res.status(200).json({ message: "Article supprimé !"});
      };
    })
  })
}
}
})
}

