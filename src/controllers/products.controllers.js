import { pool } from "../db.js";

//Para obtener todos los resultados
export const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM task");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

//Para devolver solo un producto
export const getProduct = async (req, res) => {
  const reqId = req.params.id;
  try {
    const [rows] = await pool.query("SELECT * FROM task WHERE id = ?", [reqId]);
    if (rows.length <= 0)
      return res.status(404).json({ message: "Product not found" });
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

//Para crear productos
export const createProducts = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO task(title, description, status) VALUES (?,?,?)",
      [title, description, status]
    );
    res.send({
      id: rows.insertId,
      title,
      description,
      status,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

//Para actualizar productos
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE task SET title = IFNULL(?, title), description = IFNULL(?, description), status = IFNULL(?, status) WHERE id  = ?",
      [title, description, status, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Product not found",
      });

    res.json("received");
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

//Para eliminar productos
export const deleteProducts = async (req, res) => {
  const reqId = req.params.id;
  try {
    const [result] = await pool.query("DELETE FROM task WHERE id = ?", [reqId]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Product not found",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
