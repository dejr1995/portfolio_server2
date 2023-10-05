const express = require("express");
const routes = express.Router();

/* LEFT */
routes.get("/col_left", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM column_left", (err, result) => {
      if (err) {
        console.error("Error al obtener personas: " + err.message);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        setTimeout(() =>{
          res.status(200).json(result);
        }, 2000);
      }
    });
  });
});

routes.get("/col_left/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    conn.query(
      "SELECT * FROM column_left WHERE id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Error al obtener persona por ID: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          if (result.length > 0) {
            res.status(200).json(result[0]);
          } else {
            res.status(404).json({ error: "Persona no encontrada" });
          }
        }
      }
    );
  });
});

routes.post("/col_left", (req, res) => {
  req.getConnection((err, conn) => {
    const {
      id,
      urlvideo,
      title,
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      urlopen,
      urlgithub,
      urlprototype,
      type,
    } = req.body;
    conn.query(
      "INSERT INTO column_left (id, urlvideo, title, skill1, skill2, skill3, skill4, skill5, urlopen, urlgithub, urlprototype, type) VALUES (?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?)",
      [
        id,
        urlvideo,
        title,
        skill1,
        skill2,
        skill3,
        skill4,
        skill5,
        urlopen,
        urlgithub,
        urlprototype,
        type,
      ],
      (err, result) => {
        if (err) {
          console.error("Error al agregar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res.status(200).json({ message: "Persona agregada correctamente" });
        }
      }
    );
  });
});

routes.delete("/col_left/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    if (err) return res.send(err);
    conn.query("DELETE FROM column_left WHERE id = ?", [id], (err, result) => {
      if (err) {
        console.error("Error al eliminar persona: " + err.message);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        res.status(200).json({ message: "Persona eliminada correctamente" });
      }
    });
  });
});

routes.put("/col_left/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE column_left set ? WHERE id = ?",
      [req.body, req.params.id],
      (err, result) => {
        if (err) {
          console.error("Error al actualizar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res
            .status(200)
            .json({ message: "Persona actualizada correctamente" });
        }
      }
    );
  });
});
/* LEFT */

/* CENTER */
routes.get("/col_center", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM column_center", (err, result) => {
      if (err) {
        console.error("Error al obtener personas: " + err.message);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        res.status(200).json(result);
      }
    });
  });
});

routes.get("/col_center/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    conn.query(
      "SELECT * FROM column_center WHERE id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Error al obtener persona por ID: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          if (result.length > 0) {
            res.status(200).json(result[0]);
          } else {
            res.status(404).json({ error: "Persona no encontrada" });
          }
        }
      }
    );
  });
});

routes.post("/col_center", (req, res) => {
  req.getConnection((err, conn) => {
    const {
      id,
      urlvideo,
      title,
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      urlopen,
      urlgithub,
      urlprototype,
      type,
    } = req.body;
    conn.query(
      "INSERT INTO column_center (id, urlvideo, title, skill1, skill2, skill3, skill4, skill5, urlopen, urlgithub, urlprototype, type) VALUES (?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?)",
      [
        id,
        urlvideo,
        title,
        skill1,
        skill2,
        skill3,
        skill4,
        skill5,
        urlopen,
        urlgithub,
        urlprototype,
        type,
      ],
      (err, result) => {
        if (err) {
          console.error("Error al agregar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res.status(200).json({ message: "Persona agregada correctamente" });
        }
      }
    );
  });
});

routes.delete("/col_center/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM column_center WHERE id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Error al eliminar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res.status(200).json({ message: "Persona eliminada correctamente" });
        }
      }
    );
  });
});

routes.put("/col_center/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE column_center set ? WHERE id = ?",
      [req.body, req.params.id],
      (err, result) => {
        if (err) {
          console.error("Error al actualizar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res
            .status(200)
            .json({ message: "Persona actualizada correctamente" });
        }
      }
    );
  });
});
/* CENTER */

/* RIGHT */
routes.get("/col_right", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM column_right", (err, result) => {
      if (err) {
        console.error("Error al obtener personas: " + err.message);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        res.status(200).json(result);
      }
    });
  });
});

routes.get("/col_right/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    conn.query(
      "SELECT * FROM column_right WHERE id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Error al obtener persona por ID: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          if (result.length > 0) {
            res.status(200).json(result[0]);
          } else {
            res.status(404).json({ error: "Persona no encontrada" });
          }
        }
      }
    );
  });
});

routes.post("/col_right", (req, res) => {
  req.getConnection((err, conn) => {
    const {
      id,
      urlvideo,
      title,
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      urlopen,
      urlgithub,
      urlprototype,
      type,
    } = req.body;
    conn.query(
      "INSERT INTO column_right (id, urlvideo, title, skill1, skill2, skill3, skill4, skill5, urlopen, urlgithub, urlprototype, type) VALUES (?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?)",
      [
        id,
        urlvideo,
        title,
        skill1,
        skill2,
        skill3,
        skill4,
        skill5,
        urlopen,
        urlgithub,
        urlprototype,
        type,
      ],
      (err, result) => {
        if (err) {
          console.error("Error al agregar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res.status(200).json({ message: "Persona agregada correctamente" });
        }
      }
    );
  });
});

routes.delete("/col_right/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    if (err) return res.send(err);
    conn.query("DELETE FROM column_right WHERE id = ?", [id], (err, result) => {
      if (err) {
        console.error("Error al eliminar persona: " + err.message);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        res.status(200).json({ message: "Persona eliminada correctamente" });
      }
    });
  });
});

routes.put("/col_right/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE column_right set ? WHERE id = ?",
      [req.body, req.params.id],
      (err, result) => {
        if (err) {
          console.error("Error al actualizar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res
            .status(200)
            .json({ message: "Persona actualizada correctamente" });
        }
      }
    );
  });
});
/* RIGHT */

routes.get("/image", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM gallery", (err, result) => {
      if (err) {
        console.error("Error al obtener personas: " + err.message);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        res.status(200).json(result);
      }
    });
  });
});

routes.get("/image/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    conn.query(
      "SELECT * FROM gallery WHERE id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Error al obtener persona por ID: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          if (result.length > 0) {
            res.status(200).json(result[0]);
          } else {
            res.status(404).json({ error: "Persona no encontrada" });
          }
        }
      }
    );
  });
});

routes.post("/image", (req, res) => {
  req.getConnection((err, conn) => {
    const {
      id,
      urlimage,
    } = req.body;
    conn.query(
      "INSERT INTO gallery (id, urlimage) VALUES (?, ?)",
      [
        id,
        urlimage,
      ],
      (err, result) => {
        if (err) {
          console.error("Error al agregar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res.status(200).json({ message: "Persona agregada correctamente" });
        }
      }
    );
  });
});

routes.delete("/image/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    if (err) return res.send(err);
    conn.query("DELETE FROM gallery WHERE id = ?", [id], (err, result) => {
      if (err) {
        console.error("Error al eliminar persona: " + err.message);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        res.status(200).json({ message: "Persona eliminada correctamente" });
      }
    });
  });
});

routes.put("/image/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE gallery set ? WHERE id = ?",
      [req.body, req.params.id],
      (err, result) => {
        if (err) {
          console.error("Error al actualizar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res
            .status(200)
            .json({ message: "Persona actualizada correctamente" });
        }
      }
    );
  });
});

routes.get("/image/rand", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "SELECT * FROM gallery ORDER BY RAND() LIMIT 5",
      (err, result) => {
        if (err) {
          console.error("Error al obtener personas: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res.status(200).json(result);
        }
      }
    );
  });
});

module.exports = routes;
