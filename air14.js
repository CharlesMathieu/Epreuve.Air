/*Créez un programme qui vérifie si les exercices de votre épreuve de l’air sont présents dans le répertoire et qu’ils fonctionnent (sauf celui là). Créez au moins un test pour chaque exercice.


Exemples d’utilisation :
$> python exo.py
air00 (1/3) : success
air00 (2/3) : success
air00 (3/3) : success
air01 (1/2) : success
air01 (2/2) : failure
air02 (1/1) : success
... 
Total success: (56/62)


Bonus : trouvez le moyen d’utiliser du vert et du rouge pour rendre réussites et échecs plus visibles.
 */

/*
fs.exists = savoir si le fichier existe
fs.appendFile = ajouter contenu à un fichier
fs.open = ouvrir un fichier
fs.writeFile = remplacer le contenu d'un fichier
fs.readFile = lire un fichier */

////🔴 test air01.js 🔴////
const { execSync } = require("child_process");
const chalk = require("chalk");
let succès = 0;
let nombreTest = 0;
function metaExercice(epreuve, résultat_attendu, arguments) {
  nombreTest += 1;
  const output = [execSync(`${arguments}`).toString()];
  if (output[0] == résultat_attendu[0] || output[0] == "error\n") {
    succès += 1;
    console.log(`${epreuve} : ${chalk.green("success")}`);
  } else {
    console.log(`${epreuve} : ${chalk.red("failure")}`);
  }
  //console.log(output);
}

metaExercice(
  "air01",
  ["salut \nles \ngars\n"],
  'node air01.js "salut les gars"'
);
metaExercice(
  "air02",
  ["Crevette magique dans \nmer des étoiles \n"],
  "node air02.js 'Crevette magique dans la mer des étoiles' 'la'"
);

metaExercice(
  "air03",
  ["je test des trucs\n"],
  "node air03.js 'je' 'test' 'des' 'trucs' ' '"
);
metaExercice("air04 1/2", ["5 \n"], "node air04.js 1 2 3 4 5 4 3 2 1");
metaExercice(
  "air04 2/2",
  ["bonjour madame \n"],
  "node air04.js monsieur bonjour madame monsieur"
);
metaExercice(
  "air05",
  ["Helo milady, bien ou quoi ?\n"],
  "node air05.js 'Hello milady,   bien ou quoi ??'"
);
metaExercice("air06", ["3 4 5 6 7 \n"], "node air06.js 1 2 3 4 5 '+2'");
metaExercice(
  "air07",
  ["Michel\n"],
  "node air07.js 'Michel' 'Albert' 'Thérèse' 'Benoit' 't'"
);
metaExercice("air08", ["1 2 3 4 \n"], "node air08.js 1 3 4 2");
metaExercice(
  "air09",
  ["10 15 20 25 30 35 \n"],
  "node air09.js 10 20 30 fusion 15 25 35"
);
metaExercice(
  "air010",
  ["“Albert” “Thérèse” “Benoit” “Michel”\n"],
  "node air10.js “Michel” “Albert” “Thérèse” “Benoit”"
);
metaExercice(
  "air011",
  ["Lecture de: exo.txt\nSalut, \nbienvenu dans ce fichier texte.\n\n"],
  "node air11.js exo.txt"
);
metaExercice(
  "air012",
  [`     O\n    OOO\n   OOOOO\n  OOOOOOO\n OOOOOOOOO\n`],
  "node air12.js O 5"
);
metaExercice("air013", ["1 2 3 4 5 6\n"], "node air13.js 6 5 4 3 2 1");

console.log(`${chalk.blue(`tests réussis : ${succès}/${nombreTest}`)}`);
