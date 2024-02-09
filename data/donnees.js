const donnees = [
    {
        "titre": "Le Chat dans le sac",
        "année": 1964,
        "realisateur": "Gilles Groulx",
        "synopsis": "Un jeune journaliste québécois questionne sa relation avec sa petite amie et ses propres convictions politiques dans le contexte du Québec des années 60. Le film mélange fiction et documentaire, explorant les désirs personnels et les luttes sociopolitiques.",
        "acteurs": ["Claude Godbout", "Barbara Ulrich", "Léandre Normand", "Jean-Claude Lord"],
        "genre": "Drame",
        "image": "le-chat-dans-le-sac.jpg"
    }
    ,
    {
        "titre": "La vie heureuse de Leopold Z",
        "année": 1965,
        "realisateur": "Gilles Carle",
        "synopsis": "Léopold, un bon vivant et dragueur invétéré de Montréal, passe sa vie à essayer de séduire les femmes tout en évitant les responsabilités. Cette comédie explore ses aventures et mésaventures amoureuses durant la période des fêtes.",
        "acteurs": ["Guy L'Écuyer", "Monique Mercure", "Pauline Julien", "Marcel Sabourin"],
        "genre": "Comédie",
        "image": "la-vie-heureuse-de-leopold-z.jpg"
    }
    ,
    {
        "titre": "Montréal Vol 871",
        "année": 1966,
        "realisateur": "Jacques Godbout",
        "synopsis": "Ce film suit un ingénieur parisien qui, en voyage d'affaires à Montréal, cherche aussi des parents déplacés par la Seconde Guerre mondiale. Entre une affaire d'amour éphémère et des découvertes de la ville, il vit une introspection sur l'inquiétude de l'époque.",
        "acteurs": ["Jean Duceppe", "Geneviève Bujold", "Paul Guèvremont", "François Tassé"],
        "genre": "Drame",
        "image": "montreal-vol-871.jpg"
    }
,
{
    "titre": "Wow",
    "année": 1970,
    "realisateur": "Claude Jutras",
    "synopsis": "Un film expérimental qui mélange documentaire et fiction pour explorer les rêves et réalités d'un groupe de jeunes vivant dans un Québec rural. Il présente leurs espoirs, déceptions et la recherche d'un sens dans leur quotidien et leur avenir.",
    "acteurs": ["Claude Jutra", "Johanne Harrelle", "Monique Mercure", "Serge Gagné"],
    "genre": "Documentaire",
    "image": "wow.jpg"
}
,
{
    "titre": "J.A. Martin Photographe",
    "année": 1971,
    "realisateur": "Jean Beaudin",
    "synopsis": "Situé à la fin du 19e siècle au Québec, ce film suit la femme d'un photographe itinérant qui décide de l'accompagner pour la première fois dans son voyage annuel. Leur parcours devient une exploration intime de leur relation et de leur vie ensemble.",
    "acteurs": ["Marcel Sabourin", "Monique Mercure", "Philippe Léotard", "Clermont Jolicoeur"],
    "genre": "Drame",
    "image": "ja-martin-photographe.jpg"
}
,
{
    "titre": "Mon Oncle Antoine",
    "année": 1971,
    "realisateur": "Claude Jutras",
    "synopsis": "Situé dans une petite ville minière du Québec des années 40, ce film raconte l'histoire d'un adolescent travaillant dans le magasin général de son oncle, qui sert aussi d'entrepreneur de pompes funèbres. À travers ses yeux, on explore les complexités de la vie, de la mort et de l'amour dans cette communauté.",
    "acteurs": ["Jacques Gagnon", "Lyne Champagne", "Jean Duceppe", "Olivette Thibault"],
    "genre": "Drame",
    "image": "mon-oncle-antoine.jpg"
}
,
{
    "titre": "La Vraie Nature de Bernadette",
    "année": 1972,
    "realisateur": "Gilles Carle",
    "synopsis": "Bernadette, une femme de Montréal, décide de tout quitter pour vivre en harmonie avec la nature dans la campagne québécoise. Sa quête d'authenticité et d'autosuffisance la confronte aux réalités sociales et environnementales, remettant en question ses idéaux et l'impact de ses actions.",
    "acteurs": ["Micheline Lanctôt", "Donald Pilon", "Marcel Sabourin", "Willie Lamothe"],
    "genre": "Comédie",
    "image": "la-vraie-nature-de-bernadette.jpg"
}
,
{
    "titre": "24 heures ou plus",
    "année": 1973,
    "realisateur": "Gilles Groulx",
    "synopsis": "Un documentaire provocateur qui critique la société de consommation et l'industrie culturelle au Québec et au Canada. À travers un montage dynamique d'images d'archives et d'interviews, le film explore les tensions entre le désir de changement social et les forces conservatrices.",
    "acteurs": ["Documentaire"],
    "genre": "Documentaire",
    "image": "24-heures-ou-plus.jpg"
}
,
{
    "titre": "La mort d'un bûcheron",
    "année": 1973,
    "realisateur": "Gilles Carle",
    "synopsis": "Une jeune fille recherche son père bûcheron disparu. À Montréal, elle est exploitée par un tenancier dans un bar western, illustrant sa quête et les défis auxquels elle fait face.",
    "acteurs": ["Carole Laure", "Daniel Pilon", "Willie Lamothe", "René Caron"],
    "genre": "Drame",
    "image": "la-mort-dun-bucheron.jpg"
}
,
{
    "titre": "Les Corps Célestes",
    "année": 1973,
    "realisateur": "Gilles Carle",
    "synopsis": "Un proxénète et ses accompagnatrices tentent d'établir un bordel dans une ville minière fictive du Québec pendant la Seconde Guerre mondiale. Leur intégration dans la communauté et la résistance d'une jeune orpheline contre le proxénète dévoilent les dynamiques de pouvoir et d'exploitation.",
    "acteurs": ["Donald Pilon", "Carole Laure", "Danielle Ouimet", "Claude Jutra"],
    "genre": "Drame",
    "image": "les-corps-celestes.jpg"
}
,
{
    "titre": "Rejeanne Padovani",
    "année": 1973,
    "realisateur": "Denys Arcand",
    "synopsis": "Ce drame explore la corruption et le pouvoir au Québec à travers l'histoire d'un entrepreneur en construction qui organise une grande réception pour influencer des politiciens. La tension monte lorsque le passé tragique entre lui et son ex-femme refait surface, menant à un dénouement inattendu.",
    "acteurs": ["Vincent Bilodeau", "Claude Blanchard", "Luce Guilbeault", "Pierre Curzi"],
    "genre": "Drame",
    "image": "rejeanne-padovani.jpg"
}
,
{
    "titre": "Tendresse Ordinaire",
    "année": 1973,
    "realisateur": "Jacques Leduc",
    "synopsis": "Une femme solitaire passe l'hiver isolée, se remémorant le passé en attendant le retour de son mari, un bûcheron travaillant loin au nord. La présence de son amie Bernadette rend l'attente et l'hiver supportables, évoquant des souvenirs de jours passés avec son mari.",
    "acteurs": ["Drame"],
    "genre": "Drame",
    "image": "tendresse-ordinaire.jpg"
}
,
{
    "titre": "Les Ordres",
    "année": 1974,
    "realisateur": "Michel Brault",
    "synopsis": "Inspiré de faits réels, ce film dramatique suit l'histoire de citoyens québécois arrêtés et emprisonnés sans procès pendant la Crise d'Octobre 1970, explorant les abus de pouvoir et les violations des droits de l'homme.",
    "acteurs": ["Hélène Loiselle", "Jean Lapointe", "Guy Provost", "Claude Gauthier"],
    "genre": "Drame",
    "image": "les-ordres.jpg"
}
,
{
    "titre": "Gina",
    "année": 1975,
    "realisateur": "Denys Arcand",
    "synopsis": "Un drame poignant qui raconte l'histoire de Gina, une femme qui se bat pour sa survie et sa dignité dans le monde brutal de la lutte professionnelle féminine au Québec.",
    "acteurs": ["Céline Lomez", "Claude Blanchard", "Frédérique Collin", "Pierre Curzi"],
    "genre": "Drame",
    "image": "gina.jpg"
}
,
{
    "titre": "Bingo",
    "année": 1974,
    "realisateur": "Jean-Claude Lord",
    "synopsis": "Le film se centre sur François, un jeune idéaliste transformé en terroriste par des influences extérieures, dans le contexte de la crise d'Octobre 1970. Il explore les thèmes de l'engagement et l'action sociale et politique à travers trois générations, trois partis politiques et trois attitudes.",
    "acteurs": ["Réjean Guénette", "Anne-Marie Provencher", "Jean Duceppe", "Janine Fluet", "Claude Michaud", "Gilles Pelletier", "Manda Parent"],
    "genre": "Drame",
    "image": "bingo.jpg"
}
,
{
    "titre": "La Gammick",
    "année": 1974,
    "realisateur": "Jacques Godbout",
    "synopsis": "Inspiré d'un fait divers remontant aux années 1950, le film raconte l'histoire de François (Chico) Tremblay, un Québécois moyen ayant appartenu à la pègre locale et qui se retrouve confronté à la toute-puissante mafia américaine. Plus qu'un thriller, le film revêt une signification sociale et idéologique qui permet une lecture à plusieurs niveaux et une analyse sociopolitique d'un phénomène urbain : le gangstérisme québécois.",
    "acteurs": ["Marc Legault", "Dorothée Berryman", "Gilbert Chénier"],
    "genre": "Crime, Drame",
    "image": "la-gammick.jpg"
}
,
{
    "titre": "La Tête de Normande St-Onge",
    "année": 1975,
    "realisateur": "Gilles Carle",
    "synopsis": "Normande St-Onge habite un immeuble vétuste de trois étages : au rez-de-chaussée loge un artisan, au-dessus c'est elle en compagnie de Bouliane, son ami et au dernier étage, loge une vieille dame alcoolique, sourde et folle, en compagnie de son petit-fils adolescent, Jérémie. Normande poursuit des cours de danse avec l'intention de faire une carrière artistique, travaille comme commis dans une pharmacie pour vivre, supporte financièrement Pierrette, sa sœur qui est asthmatique et plus ou moins droguée, et enfin se débat avec l'asile afin d'en faire sortir sa mère qui y est internée.",
    "acteurs": ["Carole Laure", "Raymond Cloutier", "Reynald Bouchard", "Renée Girard", "Anne-Marie Ducharme"],
    "genre": "Drame",
    "image": "la-tete-de-normande-st-onge.jpg"
}
,
{
    "titre": "Parlez-nous d'amour",
    "année": 1976,
    "realisateur": "Jean-Claude Lord",
    "synopsis": "Le film dénonce le processus d'aliénation des masses par les émissions de variétés à travers le personnage de Jeannot, un animateur télé qui devient désillusionné par l'industrie télévisuelle et commence à révéler le comportement en coulisses de ses collègues à l'antenne, incluant des allégations d'exploitation sexuelle, de corruption, et des tentatives d'étouffer des scandales de célébrités.",
    "acteurs": ["Jacques Boulanger", "Benoît Girard", "Claude Michaud", "Anne Létourneau", "Nicole Cloutier", "Véronique Béliveau", "Rita Lafontaine", "Françoise Berd", "Amulette Garneau", "Monique Mercure", "Manda Parent", "Pierre Curzi", "Jacques DesBaillets", "Jacques Famery", "Muriel Dutil", "Diane Guérin", "Yvon Barrette", "Michelle Rossignol", "Gabriel Arcand", "Guy L'Écuyer"],
    "genre": ["Drame", "Comédie", "Satire"],
    "image": "parlez-nous-damour.jpg"
}
,
{
    "titre": "Ti-Mine, Bernie pis la gang...",
    "année": 1977,
    "realisateur": "Marcel Carrière",
    "synopsis": "Ce film comique dramatique centre son histoire sur deux frères, Ti-Mine (Marcel Sabourin) et Bernie (Jean Lapointe), qui élaborent un plan pour s'enrichir rapidement dans l'espoir de déménager leur famille en Floride. Cependant, réaliser leur rêve familial de vivre en Floride ne sera pas aussi simple qu'ils l'avaient prévu.",
    "acteurs": ["Marcel Sabourin", "Jean Lapointe", "Rita Lafontaine", "Anne-Marie Ducharme", "Raymond Lévesque", "Denise Proulx", "Guy L'Écuyer"],
    "genre": "Comédie",
    "image": "ti-mine-bernie-pis-la-gang.jpg"
}
,
{
    "titre": "Cordélia",
    "année": 1980,
    "realisateur": "Jean Beaudin",
    "synopsis": "Dans un village des années 1890, le film se concentre sur Cordélia Viau (Louise Portal), une femme qui invite des hommes chez elle pendant l'absence de son mari. Cette action offense les villageois conservateurs. L'un des hommes invités est retrouvé mort, et la femme est suspectée et jugée pour son acte immoral plutôt que pour le crime de meurtre qu'elle aurait commis.",
    "acteurs": ["Louise Portal", "Gaston Lepage", "Raymond Cloutier", "Gilbert Sicotte", "James Blendick", "Pierre Gobeil", "Marcel Sabourin", "Rolland Bédard", "Claude Gauthier", "Jean-Pierre Masson", "Lionel Villeneuve", "Olivette Thibault", "Jean Duceppe", "Jean Gascon", "Gratien Gélinas", "Doris Lussier", "Gilles Vigneault", "Michelle Rossignol"],
    "genre": "Drame",
    "image": "cordelia.jpg"
}
,
{
    "titre": "L'arrache coeur",
    "année": 1979,
    "realisateur": "Mireille Dansereau",
    "synopsis": "Un drame centré sur Céline, une femme qui navigue dans des relations compliquées avec son mari Michel et sa mère Françoise. Le film explore la crise matrimoniale de Céline due à sa relation difficile et complexe avec sa mère, mettant en lumière les défis de communication et les attentes déçues.",
    "acteurs": ["Louise Marleau", "Françoise Faucher", "Michel Mondie"],
    "genre": "Drame",
    "image": "larrache-coeur.jpg"
}
,
{
    "titre": "Les Bons Débarras",
    "année": 1980,
    "realisateur": "Francis Mankiewicz",
    "synopsis": "Dans une région rurale isolée du Québec, Manon, treize ans, vit avec sa mère Michelle et son oncle Guy, ayant une déficience intellectuelle. Le film explore les dynamiques complexes de la famille, y compris la jalousie et l'obsession de Manon pour l'amour exclusif de sa mère, conduisant à des conséquences tragiques.",
    "acteurs": ["Charlotte Laurier", "Marie Tifo", "Germain Houde", "Louise Marleau", "Roger Lebel", "Gilbert Sicotte", "Serge Thériault", "Jean Pierre Bergeron"],
    "genre": "Drame",
    "image": "les-bons-debarras.jpg"
}
,
{
    "titre": "Alien - Le 8ème passager",
    "genres": ["Horreur", "Science-fiction"],
    "description": "",
    
    "annee": "1979",
    "realisation": "Ridley Scott",
    "titreVignette": "alienle8emepassager.jpg",
    "commentaires": 
    
    [ 
        { 
            "auteur": "Simon", 
            "texte": "Un classique du cinéma d'horreur." 
        }, 
        
        { "auteur": "Maxime",
          "texte": "J'en fait encore des cauchemars." 
        } 
    ]
    },
   







    
  
];

module.exports = donnees;
