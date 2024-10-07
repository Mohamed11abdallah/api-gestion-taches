const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./src/config/db");
const Tache = require("./src/models/Tache");
const { validateTache } = require("./src/validators/TacheValidator.js");

const { validationResult } = require("express-validator");

const app = express();
app.use(bodyParser.json());

sequelize.sync().then(() => {
  console.log("Base de données synchronisée.");
});

app.post("/taches", validateTache, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { titre, description } = req.body;
  const tache = await Tache.create({ titre, description });
  res.json(tache);
});

app.get("/taches", async (req, res) => {
  const taches = await Tache.findAll();
  res.json(taches);
});

app.get("/taches/:id", async (req, res) => {
  const tache = await Tache.findByPk(req.params.id);
  if (tache) {
    res.json(tache);
  } else {
    res.status(404).json({ message: "Tâche non trouvée" });
  }
});

app.put("/taches/:id", validateTache, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const tache = await Tache.findByPk(req.params.id);
  if (tache) {
    tache.titre = req.body.titre;
    tache.description = req.body.description;
    tache.termine = req.body.termine;
    await tache.save();
    res.json(tache);
  } else {
    res.status(404).json({ message: "Tâche non trouvée" });
  }
});

app.delete("/taches/:id", async (req, res) => {
  const tache = await Tache.findByPk(req.params.id);
  if (tache) {
    await tache.destroy();
    res.json({ message: "Tâche supprimée." });
  } else {
    res.status(404).json({ message: "Tâche non trouvée" });
  }
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
