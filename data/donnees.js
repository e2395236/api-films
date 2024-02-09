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


    
  
];

module.exports = donnees;
