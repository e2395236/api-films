const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const mustacheExpress = require("mustache-express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const db = require("./config/db.js");
const { check, validationResult } = require("express-validator");
const films = './data/films.js';
const {Firestore} = require('@google-cloud/firestore');

const firestore = new Firestore({
  projectId: 'ton-projet-id',
  ignoreUndefinedProperties: true, // Ajoute cette ligne
});

const app = express();

//Configurations
dotenv.config();

const server = express();
////////////////

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "mustache");
server.engine("mustache", mustacheExpress());

//Middlewares
//Doit être avant les routes/points d'accès
server.use(express.static(path.join(__dirname, "public")));

//Permet d'accepter des body en Json dans les requêtes
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

// Points d'accès

//Recuperer tous les films
server.get("/api/films", async (req, res) => {
  try {
    console.log(req.headers.authorization);

    console.log(req.query);
    const direction = req.query["order-direction"] || "asc";
    const limit = +req.query["limit"] || 500; //Mettre une valeur par défaut

    const donneesRef = await db
      .collection("Films")
      .orderBy("annee", direction)
      .limit(limit)
      .get();
    const donneesFinale = [];

    donneesRef.forEach((doc) => {
      const filmsAjouter = doc.data();
      filmsAjouter.id = doc.id;

      donneesFinale.push(filmsAjouter);
   
    });

    if (donneesFinale.length === 0) {
      res.statusCode = 404;
      return res.json({ message: "Aucun film n'a été trouvé" });
    }

 

    res.statusCode = 200;
    res.json(donneesFinale);
  } catch (erreur) {
    res.statusCode = 500;
    res.json({ message: "Une erreur est survenue." });
  }
});

/**
 * @method GET
 * @param id
 * @see url à consulter
 * Permet d'accéder à un utilisateur
 */

//Initialisation de la base de données des films
server.post("/api/initialiser-films", (req, res) => {

  const films = require("./data/films.js");

  

  films.forEach(async (element) => {
    await db.collection("Films").add(element);
  });

  res.statusCode = 200;

  res.json({
    message: "Données (films) initialisées"
  });
});

//initialisation de la base de données des utilisateurs
server.post("/api/initialiser-utilisateurs", (req, res) => {
  const donneesTest = require("./data/utilisateurs.js");

  donneesTest.forEach(async (element) => {
    await db.collection("Films").add(element);
  });

  res.statusCode = 200;

  res.json({
    message: "Données (utilisateurs) initialisées"
  });
});

// Récupérer un seul film par son identifiant
server.get("/api/film/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // Récupérer le document correspondant à l'identifiant
    const doc = await db.collection("Films").doc(id).get();

    if (!doc.exists) {
      // Si le document n'existe pas, renvoyer une erreur 404 avec un message approprié
      res.status(404).json({ message: "Film non trouvé" });
      return;
    }

    res.status(200).json(doc.data());
  } catch (error) {
    // En cas d'erreur, renvoyer une erreur 500 avec un message approprié
    res.status(500).json({ message: "Erreur" });
  }
});

const filmValidationRules = [
    check('titre').notEmpty().withMessage('Le titre est requis'),
    check('année').isNumeric().withMessage('L\'année doit être numérique'),
    check('realisateur').notEmpty().withMessage('Le réalisateur est requis'),
    check('synopsis').notEmpty().withMessage('Le synopsis est requis'),
    check('acteurs').isArray().withMessage('Les acteurs doivent être dans un tableau'),
    check('genre').notEmpty().withMessage('Le genre est requis'),
    check('image').notEmpty().withMessage('L\'image est requise')
  ];

// Ajouter un nouveau film
server.post("/api/films", filmValidationRules, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
      const nouveauFilm = req.body;
      await db.collection("Films").add(nouveauFilm);
      res.status(200).json({ message: "Le film a été ajouté", film: nouveauFilm });
    } catch (error) {
      res.status(500).json({ message: "Une erreur est survenue." });
      console.log(error);
    }
  });
  

  // Modifier un film existant
  server.put("/api/film/:id", filmValidationRules, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const id = req.params.id;
    try {
      const donneesModifiees = req.body;
      await db.collection("Films").doc(id).update(donneesModifiees);
      res.status(200).json({ message: "Le film a été modifié" });
    } catch (error) {
      res.status(500).json({ message: "Une erreur est survenue lors de la modification." });
      console.log(error);
    }
  });
  


// Supprimer un film spécifique de la base de données
server.delete("/api/film/:id", async (req, res) => {
  const id = req.params.id;

  // Supprimer le film correspondant à l'identifiant
  const resultat = await db.collection("Films").doc(id).delete();

  res.statusCode = 200;
  res.json({ message: "Le film a été supprimé" });
});



// Inscription d'un utilisateur
server.post(
  "/api/utilisateurs/inscription",
  [
    check("courriel").escape().trim().notEmpty().isEmail().normalizeEmail(),
    check("mdp")
      .escape()
      .trim()
      .notEmpty()
      .isLength({ min: 8, max: 20 })
      .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minUppercase: 1,
        minSymbols: 1
      })
  ],
  async (req, res) => {
    const validation = validationResult(req);
    if (validation.errors.length > 0) {
      res.statusCode = 400;
      return res.json({ message: "Données non-conformes" });
    }

    // On récupère les infos du body
    const { courriel, mdp } = req.body;
    console.log(courriel);
    // On vérifie si le courriel existe
    const docRef = await db
      .collection("utilisateurs")
      .where("courriel", "==", courriel)
      .get();
    const utilisateurs = [];

    docRef.forEach((doc) => {
      utilisateurs.push(doc.data());
    });

    console.log(utilisateurs);
    // Si oui, erreur
    if (utilisateurs.length > 0) {
      res.statusCode = 400;
      return res.json({ message: "Le courriel existe déjà" });
    }

    const hash = await bcrypt.hash(mdp, 10);

    // On enregistre dans la DB
    const nouvelUtilisateur = { courriel, mdp: hash };
    await db.collection("utilisateurs").add(nouvelUtilisateur);

    delete nouvelUtilisateur.mdp;
    // On renvoie true;
    res.statusCode = 200;
    res.json(nouvelUtilisateur);
  }
);



// Connexion d'un utilisateur
server.post("/api/utilisateurs/connexion", async (req, res) => {
  // On récupère les infos du body
  const { mdp, courriel } = req.body;

  // On vérifie si le courriel existe
  const docRef = await db
    .collection("utilisateurs")
    .where("courriel", "==", courriel)
    .get();

  const utilisateurs = [];
  docRef.forEach((utilisateur) => {
    utilisateurs.push(utilisateur.data());
  });
  // Si non, erreur
  if (utilisateurs.length == 0) {
    res.statusCode = 400;
    return res.json({ message: "Courriel invalide" });
  }

  const utilisateurAValider = utilisateurs[0];
  const estValide = await bcrypt.compare(mdp, utilisateurAValider.mdp);
  // On compare
  // Si pas pareil, erreur
  if (!estValide) {
    res.statusCode = 400;
    return res.json({ message: "Mot de passe invalide" });
  }

  // On retourne les infos de l'utilisateur sans le mot de passe
  delete utilisateurAValider.mdp;
  res.status = 200;
  res.json(utilisateurAValider);
});



// DOIT Être la dernière!!
// Gestion page 404 - requête non trouvée
server.use((req, res) => {
  res.statusCode = 404;
  res.render("404", { url: req.url });
});

server.listen(process.env.PORT, () => {
  console.log("Le serveur a démarré");
});
