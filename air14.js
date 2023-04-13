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

console.log(`${chalk.blue(`tests réussis : ${succès}/${nombreTest}`)}`);
