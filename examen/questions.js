// RÉUSSIR SON EXAMEN — banque de questions v1
// Chaque question : q, opts[4], ok (index 0-3), exp (explication)
var QUIZ_DATA = [
  {
    cat: 'BEPC', id: 'bepc-math', title: 'Mathématiques — Entraînement 1', icon: '📐', free: true,
    qs: [
      { q: "Quel est le PGCD de 24 et 36 ?", opts: ["6", "12", "18", "72"], ok: 1, exp: "24 = 2³×3 et 36 = 2²×3². PGCD = 2²×3 = 12." },
      { q: "Calcule : 3/4 + 1/2 = ?", opts: ["4/6", "5/4", "1", "3/8"], ok: 1, exp: "1/2 = 2/4, donc 3/4 + 2/4 = 5/4." },
      { q: "Résous : 2x − 6 = 10. x = ?", opts: ["2", "4", "8", "16"], ok: 2, exp: "2x = 16, donc x = 8." },
      { q: "Un triangle a des côtés 3, 4 et 5. Il est :", opts: ["équilatéral", "isocèle", "rectangle", "impossible"], ok: 2, exp: "3² + 4² = 9 + 16 = 25 = 5². D'après la réciproque de Pythagore, il est rectangle." },
      { q: "Un article coûte 8 000 F. Avec une remise de 25 %, le prix devient :", opts: ["2 000 F", "6 000 F", "7 500 F", "10 000 F"], ok: 1, exp: "25 % de 8 000 = 2 000. Prix : 8 000 − 2 000 = 6 000 F." },
      { q: "L'aire d'un disque de rayon 7 cm (π ≈ 22/7) est :", opts: ["44 cm²", "154 cm²", "49 cm²", "308 cm²"], ok: 1, exp: "A = πr² = (22/7) × 49 = 154 cm²." },
      { q: "2⁵ × 2³ = ?", opts: ["2⁸", "2¹⁵", "4⁸", "2²"], ok: 0, exp: "Même base : on additionne les exposants. 2⁵ × 2³ = 2⁸." },
      { q: "Un car roule à 60 km/h pendant 2 h 30 min. Distance parcourue :", opts: ["120 km", "150 km", "180 km", "90 km"], ok: 1, exp: "d = v × t = 60 × 2,5 = 150 km." }
    ]
  },
  {
    cat: 'BEPC', id: 'bepc-fr', title: 'Français — Entraînement 1', icon: '📚', free: false,
    qs: [
      { q: "Dans « Marie mange une mangue », « une mangue » est :", opts: ["le sujet", "le COD", "le COI", "un attribut"], ok: 1, exp: "« Une mangue » répond à la question « mange quoi ? » : c'est le complément d'objet direct." },
      { q: "« Cette nouvelle m'a brisé le cœur » contient :", opts: ["une comparaison", "une métaphore", "une personnification", "une hyperbole"], ok: 1, exp: "Le cœur n'est pas réellement brisé : image sans outil de comparaison = métaphore." },
      { q: "Le passé simple de « ils viennent » est :", opts: ["ils venaient", "ils vinrent", "ils viendront", "ils sont venus"], ok: 1, exp: "Venir au passé simple : je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent." },
      { q: "Quelle phrase est correcte ?", opts: ["Les livres que j'ai acheté", "Les livres que j'ai achetés", "Les livres que j'ai achetées", "Les livres que j'ai achetée"], ok: 1, exp: "Le participe passé avec « avoir » s'accorde avec le COD placé avant : « que » = les livres (masc. pluriel) → achetés." },
      { q: "Un synonyme de « réprimander » est :", opts: ["féliciter", "gronder", "ignorer", "récompenser"], ok: 1, exp: "Réprimander = faire des reproches = gronder." },
      { q: "Dans « Il court rapidement », « rapidement » est :", opts: ["un adjectif", "un adverbe", "un nom", "une préposition"], ok: 1, exp: "« Rapidement » modifie le verbe « court » : c'est un adverbe de manière." },
      { q: "La voix passive de « Le chat mange la souris » est :", opts: ["La souris mange le chat", "La souris est mangée par le chat", "Le chat est mangé par la souris", "La souris a mangé le chat"], ok: 1, exp: "Le COD devient sujet : « La souris est mangée par le chat »." },
      { q: "« Quoique » en un seul mot signifie :", opts: ["quelle que chose", "bien que", "parce que", "afin que"], ok: 1, exp: "« Quoique » = « bien que » (concession). « Quoi que » en deux mots = « quelle que soit la chose que »." }
    ]
  },
  {
    cat: 'BEPC', id: 'bepc-ang', title: 'Anglais — Entraînement 1', icon: '🇬🇧', free: false,
    qs: [
      { q: "Yesterday, she ___ to the market.", opts: ["go", "goes", "went", "gone"], ok: 2, exp: "« Yesterday » demande le prétérit (simple past) : went." },
      { q: "The plural of « child » is :", opts: ["childs", "children", "childes", "childrens"], ok: 1, exp: "« Child » a un pluriel irrégulier : children." },
      { q: "I have been living here ___ 2015.", opts: ["for", "since", "during", "ago"], ok: 1, exp: "« Since » + point de départ (2015). « For » + durée (for 10 years)." },
      { q: "She is good ___ mathematics.", opts: ["in", "on", "at", "for"], ok: 2, exp: "L'expression correcte est « to be good AT something »." },
      { q: "You are a student, ___ ?", opts: ["isn't it", "aren't you", "don't you", "are you"], ok: 1, exp: "Question tag : « You are » → « aren't you? »." },
      { q: "My bag is ___ than yours.", opts: ["heavy", "heavier", "more heavy", "heaviest"], ok: 1, exp: "Comparatif d'un adjectif court : heavy → heavier than." },
      { q: "___ sun rises in the east.", opts: ["A", "An", "The", "(rien)"], ok: 2, exp: "Les éléments uniques (le soleil, la lune) prennent « the »." },
      { q: "The opposite of « expensive » is :", opts: ["dear", "cheap", "costly", "rich"], ok: 1, exp: "Expensive (cher) ≠ cheap (bon marché)." }
    ]
  },
  {
    cat: 'BEPC', id: 'bepc-svt', title: 'SVT — Entraînement 1', icon: '🧬', free: false,
    qs: [
      { q: "L'unité de base de tout être vivant est :", opts: ["l'atome", "la cellule", "l'organe", "le tissu"], ok: 1, exp: "La cellule est l'unité structurale et fonctionnelle du vivant." },
      { q: "La photosynthèse produit :", opts: ["du CO₂ et de l'eau", "du glucose et de l'O₂", "de l'azote", "des protéines"], ok: 1, exp: "Avec la lumière, CO₂ + eau → glucose + dioxygène (O₂)." },
      { q: "La digestion des aliments commence dans :", opts: ["l'estomac", "la bouche", "l'intestin grêle", "le foie"], ok: 1, exp: "Dès la bouche : mastication + salive (amylase qui digère l'amidon)." },
      { q: "Le paludisme est transmis par :", opts: ["l'eau sale", "le moustique anophèle femelle", "les mouches", "le contact des mains"], ok: 1, exp: "Le plasmodium est injecté par la piqûre de l'anophèle femelle." },
      { q: "Les globules rouges transportent :", opts: ["les microbes", "le dioxygène", "les déchets solides", "la salive"], ok: 1, exp: "Grâce à l'hémoglobine, les globules rouges transportent l'O₂ vers les organes." },
      { q: "Lors de l'inspiration, le volume de la cage thoracique :", opts: ["diminue", "augmente", "ne change pas", "se bloque"], ok: 1, exp: "Les muscles soulèvent les côtes et le diaphragme s'abaisse : le volume augmente, l'air entre." },
      { q: "La fécondation chez l'Homme a lieu normalement dans :", opts: ["l'utérus", "la trompe", "l'ovaire", "le vagin"], ok: 1, exp: "Le spermatozoïde rencontre l'ovule dans la trompe (oviducte)." },
      { q: "Quel comportement protège l'environnement ?", opts: ["brûler les déchets plastiques", "reboiser", "jeter l'huile dans la rivière", "couper tous les arbres"], ok: 1, exp: "Le reboisement restaure les sols, l'air et la biodiversité." }
    ]
  },
  {
    cat: 'BAC & PROBATOIRE', id: 'bac-math', title: 'Mathématiques — Entraînement 1', icon: '📐', free: true,
    qs: [
      { q: "La dérivée de f(x) = x³ est :", opts: ["3x", "x²", "3x²", "x³/3"], ok: 2, exp: "(xⁿ)' = n·xⁿ⁻¹, donc (x³)' = 3x²." },
      { q: "lim (1/x) quand x → +∞ vaut :", opts: ["+∞", "1", "0", "−∞"], ok: 2, exp: "Quand x devient très grand, 1/x se rapproche de 0." },
      { q: "Suite arithmétique : u₀ = 5, raison r = 3. u₁₀ = ?", opts: ["30", "35", "38", "33"], ok: 1, exp: "uₙ = u₀ + n·r → u₁₀ = 5 + 10×3 = 35." },
      { q: "On lance un dé équilibré. P(obtenir un nombre pair) = ?", opts: ["1/6", "1/3", "1/2", "2/3"], ok: 2, exp: "Pairs : 2, 4, 6 → 3 cas sur 6 = 1/2." },
      { q: "ln(e²) = ?", opts: ["e", "2", "e²", "1"], ok: 1, exp: "ln et exp sont réciproques : ln(e²) = 2." },
      { q: "Discriminant de x² − 4x + 4 = 0 :", opts: ["Δ = 0, une solution double", "Δ > 0, deux solutions", "Δ < 0, aucune solution", "Δ = 4"], ok: 0, exp: "Δ = b² − 4ac = 16 − 16 = 0 → solution double x = 2." },
      { q: "Si u(2; 3) et v(4; 6), alors u et v sont :", opts: ["orthogonaux", "colinéaires", "égaux", "opposés"], ok: 1, exp: "v = 2u (4 = 2×2 et 6 = 2×3) : vecteurs colinéaires." },
      { q: "∫ de 0 à 1 de 2x dx = ?", opts: ["2", "1", "0", "1/2"], ok: 1, exp: "Primitive de 2x : x². [x²] de 0 à 1 = 1 − 0 = 1." }
    ]
  },
  {
    cat: 'BAC & PROBATOIRE', id: 'bac-philo', title: 'Philosophie — Entraînement 1', icon: '🧠', free: false,
    qs: [
      { q: "« Connais-toi toi-même » est la devise de :", opts: ["Platon", "Socrate", "Aristote", "Kant"], ok: 1, exp: "Socrate a fait sienne cette inscription du temple de Delphes." },
      { q: "« Je pense, donc je suis » est de :", opts: ["Rousseau", "Descartes", "Nietzsche", "Hegel"], ok: 1, exp: "Le cogito de René Descartes (Discours de la méthode, 1637)." },
      { q: "« Du Contrat social » est l'œuvre de :", opts: ["Voltaire", "Montesquieu", "Rousseau", "Diderot"], ok: 2, exp: "Jean-Jacques Rousseau y fonde la légitimité politique sur la volonté générale." },
      { q: "Le mythe de la caverne se trouve chez :", opts: ["Platon", "Épicure", "Sartre", "Freud"], ok: 0, exp: "Dans « La République », Platon illustre le passage de l'illusion à la connaissance." },
      { q: "Pour Kant, agir moralement c'est agir :", opts: ["par intérêt", "par devoir", "par peur", "par habitude"], ok: 1, exp: "La morale kantienne est une morale du devoir (impératif catégorique)." },
      { q: "L'inconscient psychique est un concept central chez :", opts: ["Marx", "Freud", "Comte", "Bergson"], ok: 1, exp: "Sigmund Freud, fondateur de la psychanalyse." },
      { q: "« L'homme est condamné à être libre » est de :", opts: ["Sartre", "Camus", "Spinoza", "Hume"], ok: 0, exp: "Jean-Paul Sartre : l'homme est responsable de ses choix, sans excuse." },
      { q: "Pour Marx, le moteur de l'histoire est :", opts: ["la religion", "la lutte des classes", "le hasard", "la géographie"], ok: 1, exp: "« L'histoire de toute société jusqu'à nos jours est l'histoire de la lutte des classes »." }
    ]
  },
  {
    cat: 'BAC & PROBATOIRE', id: 'bac-ang', title: 'Anglais — Entraînement 1', icon: '🇬🇧', free: false,
    qs: [
      { q: "I ___ my homework already.", opts: ["did", "have done", "do", "had do"], ok: 1, exp: "« Already » accompagne souvent le present perfect : have done." },
      { q: "She said she ___ tired.", opts: ["is", "was", "be", "are"], ok: 1, exp: "Discours indirect au passé : « I am tired » → she said she WAS tired." },
      { q: "If I ___ rich, I would travel the world.", opts: ["am", "was", "were", "be"], ok: 2, exp: "Conditionnel irréel : « If I were... I would... »." },
      { q: "« To give up » means :", opts: ["continuer", "abandonner", "monter", "offrir"], ok: 1, exp: "Give up = renoncer, abandonner." },
      { q: "The letter ___ by the secretary yesterday.", opts: ["wrote", "was written", "is writing", "has written"], ok: 1, exp: "Voix passive au passé : was + participe passé (written)." },
      { q: "You ___ smoke here. It is forbidden.", opts: ["must", "mustn't", "needn't", "may"], ok: 1, exp: "Interdiction : mustn't = il est interdit de." },
      { q: "He worked hard; ___, he failed the exam.", opts: ["therefore", "however", "because", "so"], ok: 1, exp: "Opposition entre les deux idées : however (cependant)." },
      { q: "Choose the correct sentence :", opts: ["She don't like rice", "She doesn't likes rice", "She doesn't like rice", "She not like rice"], ok: 2, exp: "3e personne : doesn't + verbe à l'infinitif sans s." }
    ]
  },
  {
    cat: 'CONCOURS', id: 'conc-cg', title: 'Culture générale Cameroun — Entraînement 1', icon: '🇨🇲', free: true,
    qs: [
      { q: "La capitale politique du Cameroun est :", opts: ["Douala", "Yaoundé", "Garoua", "Bafoussam"], ok: 1, exp: "Yaoundé est la capitale politique ; Douala est la capitale économique." },
      { q: "Le Cameroun (partie orientale) a obtenu son indépendance le :", opts: ["1er janvier 1960", "11 février 1961", "20 mai 1972", "4 mars 1959"], ok: 0, exp: "Le Cameroun français devient indépendant le 1er janvier 1960." },
      { q: "La réunification du Cameroun a eu lieu en :", opts: ["1960", "1961", "1972", "1984"], ok: 1, exp: "Le 1er octobre 1961, le Cameroun occidental rejoint la République." },
      { q: "Combien de régions compte le Cameroun ?", opts: ["8", "9", "10", "12"], ok: 2, exp: "10 régions depuis 2008 (décret transformant les provinces en régions)." },
      { q: "Le premier président du Cameroun fut :", opts: ["Paul Biya", "Ahmadou Ahidjo", "John Ngu Foncha", "Charles Assalé"], ok: 1, exp: "Ahmadou Ahidjo, président de 1960 à 1982." },
      { q: "Le plus haut sommet du Cameroun est :", opts: ["le Mont Oku", "le Mont Cameroun", "les Monts Mandara", "le Mont Bamboutos"], ok: 1, exp: "Le Mont Cameroun (≈ 4 100 m), volcan actif près de Buéa." },
      { q: "La monnaie du Cameroun est émise par :", opts: ["la BICEC", "la BEAC", "la BCEAO", "Afriland"], ok: 1, exp: "Le franc CFA d'Afrique centrale est émis par la BEAC (siège à Yaoundé)." },
      { q: "Le siège de l'ONU se trouve à :", opts: ["Genève", "Paris", "New York", "Washington"], ok: 2, exp: "Le siège principal de l'ONU est à New York ; Genève abrite un office européen." }
    ]
  },
  {
    cat: 'CONCOURS', id: 'conc-logique', title: 'Logique & calcul rapide — Entraînement 1', icon: '🧩', free: false,
    qs: [
      { q: "Suite : 2, 4, 8, 16, ... Le terme suivant est :", opts: ["20", "24", "32", "18"], ok: 2, exp: "Chaque terme est multiplié par 2 : 16 × 2 = 32." },
      { q: "Suite : 1, 1, 2, 3, 5, 8, ... Le suivant est :", opts: ["11", "12", "13", "15"], ok: 2, exp: "Suite de Fibonacci : chaque terme = somme des deux précédents. 5 + 8 = 13." },
      { q: "15 % de 200 = ?", opts: ["15", "20", "30", "35"], ok: 2, exp: "10 % = 20, 5 % = 10 → 15 % = 30." },
      { q: "Paul a le double de l'âge de son fils. Dans 10 ans la somme de leurs âges sera 56. Âge actuel de Paul ?", opts: ["36 ans", "24 ans", "30 ans", "12 ans"], ok: 1, exp: "x + 2x + 20 = 56 → 3x = 36 → fils 12 ans, Paul 24 ans." },
      { q: "Série : A, C, F, J, ... La lettre suivante est :", opts: ["M", "N", "O", "P"], ok: 2, exp: "Écarts +2, +3, +4, puis +5 : J + 5 = O." },
      { q: "Trouve l'intrus :", opts: ["Mangue", "Banane", "Carotte", "Papaye"], ok: 2, exp: "La carotte est un légume ; les autres sont des fruits." },
      { q: "Une horloge indique 15 h 40. Quel angle fait la grande aiguille depuis le 12 (sens horaire) ?", opts: ["180°", "240°", "200°", "220°"], ok: 1, exp: "40 min × 6° par minute = 240°." },
      { q: "3 ouvriers font un mur en 12 jours. 6 ouvriers (même rythme) le feront en :", opts: ["24 jours", "6 jours", "4 jours", "8 jours"], ok: 1, exp: "Deux fois plus d'ouvriers → deux fois moins de temps : 6 jours." }
    ]
  }
];
