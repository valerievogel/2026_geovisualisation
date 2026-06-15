# Document de synthèse

Ce document a pour objectif d'expliquer le contexte, les réflexions et l'évaluation de la géovisualisation créée dans le cadre du cours _géovisualisation P26_. Il abordera comment accéder au projet de géovisualisation, les motivations personnelles à l'origine du projet, puis suivra chronologiquement les étapes de sa conception. La vision et le plan ayant guidé la conception du projet seront présentés en premier, puis l'implémentation concrète et l'évaluation seront abordées, avant d'ouvrir une discussion sur de futures pistes d'évolution.

## Comment accéder au projet de géovisualisation ?

Afin de pouvoir accéder à ce projet de géovisualisation, il est indispensable de télécharger le fichier ZIP **projet_geovis_Valerie_Vogel**  et d'en extraire tous les fichiers. De plus, il faut télécharger le programme Visual Studio Code.
Lorsque tous les fichiers ont été téléchargé en local sur l'ordinateur, il faut ouvrir [doc.code-workspace](../doc.code-workspace) avec Visual Studio Code. Ainsi, tous les fichiers s'ouvrent dans Visual Studio Code. Puisque le site n'a pas encore été publié, il faut y accéder localement à travers un _live server_. Pour ce faire, il suffit de faire un clic droite sur le fichier [about.html](../src/about.html), puis sélectionner l'option _Open with Live Server_ ou _Open in integrated browser_ selon la version de Visual Studio Code. Le projet de géovisualisation s'affichera alors dans le navigateur web par défaut de l'utilisateur.

## Motivation personnelle pour le projet

Tout d'abord, je souhaite expliquer comment j'ai décidé de créer un site web et une carte sur le sujet _Sport for Development (S4D)_.
 Le choix de ce sujet provient de mon intérêt profond pour cette approche. Etant donné que dans mes études de master en _Développement et Environnement_, les projets de coopération internationale sont analysés d'un point de vue très critique, il m'a fallu beaucoup de temps pour trouver une approche dans la coopération internationale, que je puisse à la fois considérer comme cohérente et défendre avec conviction. Je souhaite alors me dédier professionnellement à ce domaine, en Suisse ou à l'étranger. Ma motivation première était de pouvoir soumettre un projet concret lors de mes futures candidatures pour des postes de travail. En plus de cela, je souhaitais déjà maintenant, malgré que je ne travaille pas encore dans ce domaine, dédier mon temps et mes compétences à développer un projet qui a du sens et qui peut s'avérer utile pour autrui.
 D'un point de vue plus technique, je souhaitais me familiariser avec davantage d'outils pour la programmation de sites web et de cartographie. Cela me semble une compétence fortement utile pour se vendre sur le marché de travail. Puisque les LLM progrèssent à une vitesse élevé, j'ai décidé de ne pas apprendre la programmation depuis les bases, mais plus tôt de me focaliser sur comment utiliser les LLM comme outil afin de réaliser mon projet et mes objectifs. Cela me semblait bien plus pertinent au lieu de passer des heures à apprendre à programmer alors que cela sera de plus en plus remplacé par les LLM. Mon objectif était donc de découvrir comment se servir des LLM afin de réaliser ses idées et objectifs.

## Vision et plan

Gulliksen et al. (2003, p.401) définissent la conception de systèmes centrée sur l'utilisateur comme suit:  «User-centred system design (UCSD) is a process focusing on usability throughout the entire development process and further throughout the system life.»
Selon les principes de UCSD (cf. figure xx), j'ai d'abord centré mes réflexions sur la vision et les objectifs du projet de géovisualisation, les besoins des utilisateurs ainsi que les considérations de design, afin de garantir la conception d'un projet centré sur les besoins et les attentes de l'utilisateur. Cette section abordera alors les réflexions autour de la création du projet et les étapes parcourues, allant de la définition des objectifs jusqu'à la conception d'un prototype.

![User centered system designs](../src/assets/USCD.JPG)
Figure xx - User centered system design principles (Gulliksen et al., 2003)

### Pourquoi cette visualisation ?

J'ai commencé par faire des recherches sur  le sujet S4D afin de trouver une potentielle lacune à combler. J'avais déjà une piste puisque j'avais essayé de trouver des projets dans ce domaine, afin de collaborer avec eux dans le cadre de mon travail de mémoire. Je me souvenais alors que j'avais eu beaucoup de peine à trouver des projets concrets. Chaque organisation met sur son site web les projets qu'elle a lancé, mais aucun site web ne regroupe les projets de toutes les organisations de S4D. Par conséquent, la recherche pour trouver un projet prend beaucoup de temps puisqu'il faut parcourir chaque site web.
Le site [sportanddev](https://www.sportanddev.org/), qui se veut une plateforme internationale du sujet, ne regroupe uniquement les organisations et non les projets de ces-mêmes.
Je me suis donc dit qu'il était dommage que des personnes souhaitant s'investir dans ces projets abandonnent par manque d'informations centralisées ou découragées par l'effort que cela représente. Il en ressort un besoin de centralisation visuelle des projets de S4D en cours, couvrant divers sports, organisations et domaines thématiques. Ainsi est née l'idée d'offrir aux potentiels bénévoles une vue d'ensemble des initiatives existantes et dans un second temps, de leur faciliter la prise de contact avec les organisations concernées. La simple création d'une carte ne semblait toutefois pas suffisante pour fournir assez de contexte, c'est pourquoi elle a été intégrée dans un site web permettant de contextualiser la carte et d'informer sur l'approche S4D pour ceux qui n'en auraient encore jamais entendu parler.

### Objectifs et justification

Ce projet de géovisualisation se compose de deux parties : le site web et la carte interactive. Le site web a pour objectif d'introduire l'approche S4D, tandis que la carte interactive vise à montrer aux personnes souhaitant faire du bénévolat où se trouvent les projets en cours à la recherche de bénévoles. Ces deux composantes répondent alors à des questions distinctes. Le site web a pour objectif de répondre à la question:
- Qu’est-ce que l’approche S4D ?

La carte interactive, quant à elle, vise à répondre à la question:
- En fonction des compétences et préférences personnelles, où se trouvent des projets de S4D en cours, qui sont à la recherche de bénévoles ?

Cette géovisualisation est donc importante car ell comble une lacune sur le web. Selon mes connaissances, il n'existe à ce jour aucun répertoire regroupant les projets de diverses organisations de S4D à travers différents pays. Afin de faciliter la recherche pour les utilisateurs, il est pertinent de centraliser l'accès à l'information sur une carte interactive dotée de filtres avancés et l'intégrer dans un site web dédié à la thématique. Ce projet répond ainsi à un besoin concret et identifié.

### Public-cible

Afin de pouvoir créer un UCSD, il est indispensable de connaître les besoins de l'utilisateur et la _usability_ (Gulliksen et al., 2003). A cette fin, deux personas ont été imaginées dans le cadre de ce projet (cf. figure xx et figure xx). Les personas sont des personnes ou des utilisateurs types fictionnels qui représentent différents comportements, objectifs et motivations jugés représentatifs du public-cible. Le public-cible est bien entendu composé de plus de diversité. Toutefois, imaginer la description d'un utilisateur type et dans quelles situations il utilise la géovisualisation, permet de concevoir un design adapté (Calde et al., 2002).

![Persona 1](../src/assets/persona1.JPG)
![Persona 2](../src/assets/persona2.JPG)

La définition des personas a permis de prendre des décisions sur divers aspects de la conception. Pour le site web, il en découlait qu'il ne serait créé qu'en anglais, puisque les deux personas sont plutôt jeunes et voyageuses, et disposent donc très probablement de bases dans cette langue.
Étant donné que les personas sont jeunes, elles ont également en commun d'être à l'aise en informatique et dans l'utilisation d'outils technologiques. Quant aux connaissances en cartographie, l'une des personas en a davantage que l'autre. Toutefois, aucune des deux n'est considérée comme experte dans ce domaine. Ainsi, il était clair qu'il fallait concevoir une carte destinée à des profanes plutôt qu'à des experts.
Bien que les deux personas soient passionnées par le sport, seule l'une d'entre elles effectue une recherche ciblée pour des projets de S4D. La persona 2 n'en a jamais entendu parler. Ce constat a conduit à la décision d'intégrer la carte interactive dans un site web afin de la contextualiser. L'objectif étant de centraliser les informations, il semblait pertinent, au vu de ces scénarios d'utilisation, de concevoir une introduction à l'approche afin que l'utilisateur ne doive pas naviguer sur d'autres sites pour comprendre de quoi il s'agit.
La définition des personas a également permis de réfléchir aux filtres à intégrer à la carte interactive en fonction des objectifs, motivations, souhaits et compétences propres à chaque persona.
Les contextes de l'utilisation de la géovisualisation sont distincts. Persona 1 effectue une recherche rapide sur son smartphone, tandis que persona 2 fait une recherche avancée sur son ordinateur. Ce constat a mis en évidence la nécessité d'adapter le design à l'appareil sur lequel la géovisualisation sera utilisée. Les modes d'interaction ainsi que les tailles d'écrans diffèrent entre les smartphones et les ordinateurs. Ces considérations ont guidé la planification du projet, afin d'adapter le design et les fonctionnalités de la géovisualisation aux contraintes de chaque type d'appareil.

### Cadre technique

Avant d'implémenter le projet, il est important de réfléchir au cadre technique. A travers la bonne planification de ce-même permet d'anticiper la cohérence et la compatibilité entre les différents outils et programmes.

Durant la planification, il a donc été définie que le site web allait être développé en HTML, CSS et JavaScript. Le fichier HTML permet de structurer le contenu, alors que le fichier CSS définit le style visuel et le JavaScript est dédié à l'interactivité du site. J'ai pris ces choix en fonction de recommendations du LLM qui affirmait que cette combinaison constitue l'approche standard pour le développement de sites web statiques. J'ai souhaité programmer le site depuis la base sans utiliser aucun framework.
Des échanges avec le LLM et des recherches approfondies m'ont mené à prendre la décision de ne pas utiliser de _back-end server_.
- étant donné que pour l'instant contenu pas dynamique
- Les données des projets sont dans un simple fichier projects.json (statique)
- Il n'y a pas de login, pas de formulaire traité, pas de base de données

La bibliothèque cartographique utilisé pour ce projet est MapLibre GL JS. Il s'agit d'une bibliothèque open source qui gère l'affichage et l'interactivité de la carte.
Le modèle _dataviz light_ a été extrait comme fond de carte à partir du service de tuiles vectorielles MapTiler. 
sage weshalb tuiles vectorielles genommen und nicht das andere (=format de données)

Dans un premier temps, j'avais pensé utiliser des tuiles raster et donc j'avais initialement utilisé la bibliothèque Leaflet.js avec des tuiles raster OpenStreetMap.
Je me suis rendu compte que ... Donc, les tuiles vectorielles ont été préférées aux tuiles raster, car elles offrent un rendu net à tous les niveaux de zoom et permettent d'adapter le style du fond de carte (couleurs, typographie) sans perte de qualité. Cette flexibilité est particulièrement pertinente pour une carte interactive dotée d'un zoom libre, où la lisibilité doit être garantie à toutes les échelles.
Suite à l'intégration d'un style vectoriel MapTiler, un changement de bibliothèque s'est avéré nécessaire, Leaflet ne supportant pas les styles GL vectoriels (style.json). MapLibre GL JS a alors été adopté, car il prend en charge nativement ce format et permet de tirer pleinement parti des tuiles vectorielles.

- fond de carte (dataviz light grey ?)
no color pour bien faire ressortir les projets
sage dass hierfür API key benötigt
andere Modelle in schwarz-weiss waren nicht gratis (zB von arcgis)
- serveur ou fichiers statique ? API or excel file finally ?




### Création d'un prototype

- Description de la visualisation
- Photo prototype de la carte
- (d'abord dessin sur papier - add pictures)


## Conception

Après avoir réfléchi à la vision et avoir créé un prototype, je me suis mise à la conception du projet. Cette partie aborde alors toutes les parties liées à l'implémentation concrete.

### Utilisation du Large Language Model (LLM)

- utilisé Claude Sonnet 4.6 (?), always en mode 'ask before edit'
- tout échange documenté sur [agents.md](../agents.md)
- dans 3 steps selon doc - implémentation - évaluation (05b_viz_example_pres)
- procédé avec Readme
--> documentation - objectifs, contenu, cadre technique
moi qui a créé les fichiers: doc, src ...
--> demande d'un plan d'implémentation
--> évaluation: amélioration itérative (je lui ai donné des printscreen afin d'améliorer par exemple)

Concrètement, le LLM m'a aidé à concevoir: structure du site web et de la carte, l'interactivité de la carte, programmation du site en html, style css, corrections majeurs de bug ...

MOI
- créé le readme
- cré le document de synthèse
- trouvé les sources d'informations et créé tous les textes
- réfléchi au design de la visualisation selon la bibliographie
- choisi la palette de couleur, les images
- fait des adaptations dans le code, ajouté les textes dans le code
- cherché les bugs

J'ai également été transparente sur le site web en déclarant avoir utilisé un LLM pour la conception du site et de la carte.

### Réfléxions et justifications 

Tout au long de la conception, autant pour le site web que pour la carte interactive, le principe de simplicité de la représentation a guidé les choix de design, afin que l'interface reste compréhensible et accessible pour l'utilisateur (Gulliksen et al., 2003). L'utilisation d'une palette de couleur limitée, la conception d'ineractions intuitives ou encore la navigation et structure claire en témoignent. **MOOOOORE !!!!**

**Le site web**
 --> strive for consistency - toujours même couleurs sur site web (définirion de primary color, accent color etc.) -- (Shneiderman & Plaisant, 2004, 8 règles d'or)

 --> vue initiale prête: landing page montre directement toutes les sections à découvrir, dit de quelle thématique le site parle
 et aussi _enable frequent users to use shortcuts_ : 'shortcut' directe vers la carte est possible (Shneiderman & Plaisant, 2004)

 --> offer simple error handling: possible de revenir sur la landing page en cliquant en-haut à droite sur _Sport for Development Hub_ // back button 

 --> prendre utilisateur par la main: le naviguer
 - avec buttons sur introduction cards sur landing page
 - avec navigation bar en-haut à droite
 - buttons aussi sur les sections 'about' et 'volunteering guide', décidé de ne pas les mettre sur la section de la carte afin de ne pas surcharger ce site, garder le focus sur la carte interactive et aussi puisque c'est l'élément central où je souhaite que le user reste

--> écriture et polices: Sans serif pour titre (sans les empattements en-bas des lettres) // Avec serif pour texte (nous permet de lire plus rapidement, car ca fait comme s'il y avait ligne dessous) (présentation 3b)

Pour la section _Focus Areas_ de la page _About Sport for Development_, l'idée initiale était de concevoir des hexagones avec des icônes représentant les différentes thématiques au sein desquelles les projets de S4D opèrent. En survolant les hexagones, davantage d'informations sur la thématique devaient s'afficher.
Toutefois, après avoir implémenté une première version des hexagones sur le site, le design ne m'a pas convaincue. Avec du recul, je me suis demandé si ce design apportait réellement une plus-value à l'utilisateur. Munzner (2014) affirme qu'il faut non seulement réfléchir à l'utilité que la 3D peut apporter, mais également se demander si une représentation visuelle est justifiée, car une simple liste permet parfois de représenter l'information de manière tout aussi concise. Après réflexion, j'ai réalisé que la représentation sous forme d'hexagones retournables avec icônes n'était pas justifiée. En appliquant le principe de simplicité (Gulliksen et al., 2003), il semblait plus pertinent de créer un accordéon, qui remplit aussi bien la tâche de donner une vue d'ensemble des thématiques et d'afficher davantage d'informations en un clic, si l'utilisateur souhaite en explorer une. 

Comme évoqué dans le chapitre dédié à la planification, des réflexions et des adaptations de design ont été faites en fonction des contraintes de chaque type d'appareil. Sur ordinateur, une marge blanche de chaque côté a été conçue afin de faire ressortir le contenu. Sur le smartphone avec une taille d'écran limitée, ces marges ont été supprimées en dessous de 600 pixels de largeur d'écran.


**La carte interactive**

Selon le cube cartographique de MacEachren (1994), toute visualisation cartographique peut être positionnée selon le public visé, la tâche poursuivie et le niveau d'interactivité (cf. figure xx). Cette géovisualisation se positionne clairement du côté public, puisqu'elle s'adresse à des bénévoles potentiels extérieurs au projet. Elle relève davantage de la présentation que de l'exploration, puisqu'elle communique des données connues plutôt que de chercher à découvrir des patterns inconnus. Enfin, le niveau d'interactivité est élevé puisque l'utilisateur peut filtrer les projets selon ses préférences, survoler les _pins_ pour obtenir un résumé et cliquer dessus pour accéder aux détails. Les fonctions de filtrage et de mise en évidence, permettant d'interagir directement avec les données, constituent une réelle plus-value justifiant le choix d'une carte interactive (Crampton, 2013). En effet, une carte statique n'aurait pas permis à l'utilisateur d'explorer les données selon ses propres critères.

![](../src/assets/cube_MacEachren.JPG)
Figure xx - Le cube cartographique (MacEachren, 1994)

--> appliqué le 'mantra de Shneiderman' (1996): «Overview first, zoom and filter, then details on demand» (présentation 5a)
- Interactions: d'abord overview - directement vue sur la carte zoom mondial pour la vue d'ensemble
--> règle de 'vue initiale prête' (présentation 4b)
- possible de filtrer dans un second temps pour plus d'infos et de zoom in pour avoir plus d'infos (gentilment batiments, routes etc plus de détails qui s'affichent)
- details on demand: en faisant un hover over, et encore plus de détails en cliquant dessus
--> hover over (que fonctionnel et pertinent pour ordi pas des interfaces qui fonctionnent majoritairement avec un touchscreen): économiser les clics (efficient)
--> Options avancées avec un seul clic (cliquer sur pin, puis cliquer sur lien pour arriver à nouveau site web)

--> Cases à cocher → sélection multiple (présentation 4b)

La règle d'or 3 de Shneiderman et Plaisant (2004) exige d'offrir un retour informatif. Sur la carte interactive, cela a été pris en compte par les choix suivants:
- une transparence plus élevé des _pins_ sur la carte lorsque le critère d'un filtre ne s'applique pas à un projet, afin de faire ressortir les projets auxquels ce critère s'applique (cf. figure xx) 
- le changement de couleur du _pin_ de la _primary color_ à _accent color_, lorsque l'utilisateur le survole avec la souris afin de signaler qu'il est possible de cliquer dessus (cf. figure xx)
- l'affichage d'un résumé synthétique lorsque l'utilisateur survole avec la souris un projet afin de lui permettre une vue d'ensemble pour savoir s'il est intéressé ou non à poursuivre la recherche et obtenir davantage d'informations (cf. figure xx).

![Informative Feedback](../src/assets/informative_feedback.JPG)
Figure xx - Un retour informatif

Les explications ci-dessus montrent que toute action permettant d'interagir avec l'interface est initiée par l'utilisateur, ce qui correspond à la règle 7 _Support internal locus of control_ (Shneiderman & Plaisant, 2004). L'utilisateur ne réagit pas à une action imposée, mais c'est lui qui a le contrôle de l'initier.

La règle d'or 4, qui demande d'établir une séquence guidée par une progression et une fin clairement définie, a été prise en compte (Shneiderman & Plaisant, 2004). La séquence commence par une vue initiale de la carte affichant les projets avec les _pins_ bleues. L'utilisateur peut ensuite appliquer des filtres, _hover over_ un projet pour afficher des informations synthétiques, cliquer dessus pour en afficher davantage, et finalement soit cliquer sur le lien redirigeant vers le site de l'organisation concernée, soit revenir en arrière en cliquant sur un autre projet ou en utilisant _clear filters_. La séquence prend ainsi une fin définie.

La fonction _clear filters_, placé à droite des filtres à séléctionner (cf. figure xx), répond à la règle d'or _permit easy reversal of actions_ (Shneiderman & Plaisant, 2004). Ainsi, si l'utilisateur a coché une case par erreur,il peut en un seul clic revenir à la vue initiale affichant tous les projets existants, grâce à la fonction _clear filters_ qui supprime la sélection des filtres appliqués.

Pour la représentation cartographique
- décidé de prendre modèle en noir-blanc afin de faire ressortir les pins bleues qui sont l'information que ma carte a comme objectif de communiquer
- selon lecture Healy (gleubs präse 1): couleur percu plus vite forme (donc ainsi relever information centrale) // et ajouter schéma de MacEachren (1995) "L'efficacité des variables visuelles" sur perception d'abord localisation, puis taille, puis couleur
MacEachren, A. (1995). How maps work: Representation, Visualization & Design. Guildford Press.


- justifier vos choix au niveau de la représentation cartographique (sémiologie), de l'interactivité, de la communication graphique et les aspects facilité d'utilisation, efficacité etc.


## Evaluation

Cette section est dédiée à l'évaluation du projet de géovisualisation. Elle abordera les points forts et les faiblesses du projet, les tests utilisateurs, ainsi que les améliorations entreprises.

### Forces et faiblesses

**Forces**

- roth (2013) - entweder Kurs 1 oder 2 --> Pas plus de 1-2 secondes pour que la carte réagisse à l'interaction, sinon risque de rupture de la réfléxion visuelle et perte d'attention

**Faiblesses**
- Pas encore des données réelles
- prototype n'a pas été faite en coopération avec les utilisateurs (Gulliksen et al., 2003), je n'ai seulement testé

### Résultat des tests utilisateurs

Finalement, après avoir créé une première version du projet de géovisualisation, j'ai procédé à son évaluation par des utilisateurs, conformément aux principes du UCSD (cf. figure xx), afin de l'améliorer itérativement.

Retour amis hors fac, mais universitaire et famille (~10 personnes)
- Réfléxion sur catégories des filtres: athletes femmes (solution: ajouté note)
- Hover over - pin devient bleu clair - rendre visible que possible de cliquer dessus
- Créer des buttons de zoom

- changer d'image pour les différents sites, car sinon un peu monotone
- ajouter impressum
- back button ?

## Discussion

Future aims
- contacter organisations pour fournir données réelles sur le fait si elles recherchent des informations
- publier officiellement le site
- add contact formular for ONG's so that I can just add the information

## Conclusion

## Bibliographie

Calde, S., Goodwin, K., & Reimann, R. (2002). SHS Orcas: The first integrated information system for long-term healthcare facility management. _Proceedings of the Conference on Human Factors and Computing Systems: CHI 2002/AIGA Experience Design Forum._ ACM Press.

Crampton J.W. (2002). Interactivity Types in Geographic Visualization. _Cartography and Geographic Information Science, 29_(2), 85-98. https://doi.org/10.1559/152304002782053314

Gulliksen, J., Göransson, B., Boivie, I., Blomkvist, S., Persson, J., & Cajander, Å. (2003). Key principles for user-centred systems design. _Behaviour & Information Technology, 22_(6), 397–409. https://doi.org/10.1080/01449290310001624329

MacEachren, A. M. (1994). Visualization in modern cartography: Setting the agenda. In A. M. MacEachren & D. R. F. Taylor (Eds.), _Visualization in modern cartography_ (Vol. 2, pp. 1–12). Academic Press. https://doi.org/10.1016/B978-0-08-042415-6.50008-9

Munzner, T. (2014). _Visualization Analysis and Design._ A K Peters/CRC Press. https://doi.org/10.1201/b17511

Shneiderman, B. (1996). The eyes have it: a task by data type taxonomy for information visualizations. _Proceedings of the IEEE Symposium on Visual Languages_, 336-343, https://doi.org/10.1109/VL.1996.545307.

Shneiderman, B. & Plaisant, C. (2004). _Designing the User Interface: Strategies for Effective Human-Computer Interaction_ (4th Edition). Pearson Addison Wesley. 