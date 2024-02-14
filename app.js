const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const mustacheExpress = require("mustache-express");
const bcrypt = require("bcrypt");
const db = require("./config/db.js");
const { check, validationResult } = require("express-validator");

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

// Points d'accès

//Recuperer tous les films
server.get("/api/films", async (req, res) => {
    try {
        console.log(req.headers.authorization);
     
        console.log(req.query);
        const direction = req.query["order-direction"] || "asc";
        const limit = +req.query["limit"] || 500; //Mettre une valeur par défaut

        const donneesRef = await db.collection("Films").orderBy("année", direction).limit(limit).get();
        const donneesFinale = [];

        donneesRef.forEach((doc) => {
            donneesFinale.push(doc.data());
        });

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
server.post("/api/initialiser", (req, res) => {
    const donneesTest = require("./data/films.js");

    donneesTest.forEach(async (element) => {
        await db.collection("Films").add(element);
    });

    res.statusCode = 200;

    res.json({
        message: "Données (films) initialisées",
    });
});


//initialisation de la base de données des utilisateurs
server.post("/api/initialiser", (req, res) => {
    const donneesTest = require("./data/utilisateurs.js");

    donneesTest.forEach(async (element) => {
        await db.collection("Films").add(element);
    });

    res.statusCode = 200;

    res.json({
        message: "Données (utilisateurs) initialisées",
    });
});



//Recuperer un seul film
server.get("/api/film/:id", async (req, res) => {

    try {
        const id = req.params.id;
        const doc = await db.collection("Films").doc(id).get();

        if (!doc.exists) {

            res.status(404).json({ message: "Film non trouvé" });
            return;
        }

        res.status(200).json(doc.data());

    } catch (error) {

        res.status(500).json({ message: "Erreur" });
    }
});



//Ajouter un nouveau film
server.post("/api/films", async (req, res) => {
    try {
        const nouveauFilm = req.body;

        //Validation ici
       
        await db.collection("Films").add(nouveauFilm);
        res.statusCode = 200;
        res.json({ message: "Le film a été ajouté", film: nouveauFilm });
    } catch (error) {
        res.statusCode = 500;
        res.json({ message: "Une erreur est survenue." });
        console.log(error);

    }
});



//Mdifier un film spécifique
server.put("/api/film/:id", async (req, res) => {
    const id = req.params.id;
    const donneesModifiees = req.body;
    //Validation ici

    await db.collection("Films").doc(id).update(donneesModifiees);

    res.statusCode = 200;
    res.json({ message: "La donnée a été modifiée" });
});



//Supprimer un film spécifique
server.delete("/api/film/:id", async (req, res) => {
    const id = req.params.id;

    const resultat = await db.collection("Films").doc(id).delete();

    res.statusCode = 200;
    res.json({ message: "Le film a été supprimé" });
});




server.post(
    "/api/utilisateurs/inscription",
    [
        check("courriel").escape().trim().notEmpty().isEmail().normalizeEmail(),
        check("mdp").escape().trim().notEmpty().isLength({ min: 8, max: 20 }).isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minNumbers: 1,
            minUppercase: 1,
            minSymbols: 1,
        }),
    ],
    async (req, res) => {
        const validation = validationResult(req);
        if (validation.errors.length > 0) {
            res.statusCode = 400;
            return res.json({ message: "Données non-conformes" });
        }
        // On récupère les infos du body

        // const courriel = req.body.courriel;
        // const mdp = req.body.mdp;

        const { courriel, mdp } = req.body;
        console.log(courriel);
        // On vérifie si le courriel existe
        const docRef = await db.collection("utilisateurs").where("courriel", "==", courriel).get();
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

        // On valide/nettoie la donnée
        // TODO:
        // On encrypte le mot de passe

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

server.post("/api/utilisateurs/connexion", async (req, res) => {
    // On récupère les infos du body
    const { mdp, courriel } = req.body;

    // On vérifie si le courriel existe
    const docRef = await db.collection("utilisateurs").where("courriel", "==", courriel).get();

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
