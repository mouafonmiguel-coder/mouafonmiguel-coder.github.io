// RÉUSSIR SON EXAMEN — catalogue des anciennes épreuves
// Pour ajouter une épreuve : déposer le PDF dans examen/epreuves/ puis ajouter une ligne ici.

var LEVELS = [
  { id: 'prim', name: '🏫 Primaire', exams: ['CEP', 'FSLC', 'Concours entrée en 6e', 'Common Entrance'] },
  { id: 'sec', name: '📘 Secondaire général', exams: ['BEPC', 'Probatoire A', 'Probatoire C', 'Probatoire D', 'BAC A', 'BAC C', 'BAC D'] },
  { id: 'tech', name: '🔧 Enseignement technique', exams: ['CAP', 'Probatoire technique', 'BAC technique'] },
  { id: 'gce', name: '🇬🇧 GCE (sous-système anglophone)', exams: ['GCE O Level', 'GCE A Level'] },
  { id: 'sup', name: '🎓 Université & Grandes écoles', exams: ['ENAM', 'ENS', 'ENSET', 'IDE (Infirmiers)', 'FMSB (Médecine)', 'Police', 'Gendarmerie', 'Douanes', 'EAMAU', 'IUT'] }
];

var YEAR_MIN = 2005, YEAR_MAX = 2026;

// file = chemin du PDF ; free = true (gratuit) / false (Premium)
var PAPERS = [
  { exam: 'GCE O Level', year: 2026, subject: 'Mathematics — Practice paper WITH FULL SOLUTIONS', file: 'epreuves/gce-ol-math-d4k7.pdf', free: true },
  { exam: 'GCE O Level', year: 2026, subject: 'English Language — Practice paper WITH ANSWERS', file: 'epreuves/gce-ol-eng-f8m2.pdf', free: false },
  { exam: 'GCE O Level', year: 2026, subject: 'Biology — Practice paper WITH SOLUTIONS', file: 'epreuves/gce-ol-bio-h3p9.pdf', free: false },
  { exam: 'GCE A Level', year: 2026, subject: 'Pure Mathematics — Practice paper WITH FULL SOLUTIONS', file: 'epreuves/gce-al-math-k6s1.pdf', free: true },
  { exam: 'GCE A Level', year: 2026, subject: 'Economics — Practice paper WITH MODEL ANSWERS', file: 'epreuves/gce-al-eco-m9t4.pdf', free: false },
  { exam: 'BEPC', year: 2026, subject: 'Mathématiques — Épreuve type (avec problème)', file: 'epreuves/ep-bepc-math-a7f3.pdf', free: true },
  { exam: 'BAC A', year: 2026, subject: 'Philosophie — Épreuve type (3 sujets au choix)', file: 'epreuves/ep-bac-philo-b2e8.pdf', free: true },
  { exam: 'BAC C', year: 2026, subject: 'Philosophie — Épreuve type (3 sujets au choix)', file: 'epreuves/ep-bac-philo-b2e8.pdf', free: false },
  { exam: 'BAC D', year: 2026, subject: 'Philosophie — Épreuve type (3 sujets au choix)', file: 'epreuves/ep-bac-philo-b2e8.pdf', free: false },
  { exam: 'Police', year: 2026, subject: 'Culture générale — Épreuve type', file: 'epreuves/ep-conc-cg-c9d4.pdf', free: true },
  { exam: 'ENAM', year: 2026, subject: 'Culture générale — Épreuve type', file: 'epreuves/ep-conc-cg-c9d4.pdf', free: false },
  { exam: 'Douanes', year: 2026, subject: 'Culture générale — Épreuve type', file: 'epreuves/ep-conc-cg-c9d4.pdf', free: false },
  { exam: 'Gendarmerie', year: 2026, subject: 'Culture générale — Épreuve type', file: 'epreuves/ep-conc-cg-c9d4.pdf', free: false }
];
