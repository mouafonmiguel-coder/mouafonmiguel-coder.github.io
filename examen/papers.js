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
  { exam: 'BEPC', year: 2026, subject: 'Mathématiques — Épreuve type (avec problème)', file: 'epreuves/ep-bepc-math-a7f3.pdf', free: true },
  { exam: 'BAC A', year: 2026, subject: 'Philosophie — Épreuve type (3 sujets au choix)', file: 'epreuves/ep-bac-philo-b2e8.pdf', free: true },
  { exam: 'BAC C', year: 2026, subject: 'Philosophie — Épreuve type (3 sujets au choix)', file: 'epreuves/ep-bac-philo-b2e8.pdf', free: false },
  { exam: 'BAC D', year: 2026, subject: 'Philosophie — Épreuve type (3 sujets au choix)', file: 'epreuves/ep-bac-philo-b2e8.pdf', free: false },
  { exam: 'Police', year: 2026, subject: 'Culture générale — Épreuve type', file: 'epreuves/ep-conc-cg-c9d4.pdf', free: true },
  { exam: 'ENAM', year: 2026, subject: 'Culture générale — Épreuve type', file: 'epreuves/ep-conc-cg-c9d4.pdf', free: false },
  { exam: 'Douanes', year: 2026, subject: 'Culture générale — Épreuve type', file: 'epreuves/ep-conc-cg-c9d4.pdf', free: false },
  { exam: 'Gendarmerie', year: 2026, subject: 'Culture générale — Épreuve type', file: 'epreuves/ep-conc-cg-c9d4.pdf', free: false }
];
