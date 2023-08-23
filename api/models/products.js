const db = require("../config");

class Products {
  fetchProducts(req, res) {
    const query = `SELECT prodID, prodName, prodDesc, quantity, amount, category, prodUrl FROM Products;`;

    db.query(query, (err, results) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchProduct(req, res) {
    const query = `SELECT prodID, prodName, prodDesc, quantity, amount, category, prodUrl FROM Products WHERE prodID = '${req.params.id}';`;

    db.query(query, (err, result) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        result,
      });
    });
  }

  addProduct(req, res) {
    const query = `INSERT INTO Products SET ?;`;

    db.query(query, req.body, (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        message: "A new product has been added!",
      });
    });
  }

  updateProduct(req, res) {
    const query = `UPDATE Products SET ? WHERE prodID = ?;`;

    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        message: "Product updated!",
      });
    });
  }

  deleteProduct(req, res) {
    const query = `DELETE FROM Products WHERE prodID = "${req.params.id}";`;

    db.query(query, (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        message: "Product removed!",
      });
    });
  }
}

module.exports = Products;
