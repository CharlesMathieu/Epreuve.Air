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

const { exec } = require("child_process");
const { error } = require("console");
const { stdout, stderr } = require("process");
const chalk = require("chalk");
const { syncBuiltinESMExports } = require("module");
let successNumber = 0;

exec("node air01.js 'salut les gars'", (error, stdout, stderr) => {
  const resultatAttendu = [
    `salut 
les 
gars
`,
  ];
  let resultat = [];
  resultat.push(stdout);

  if (resultatAttendu[0] == resultat[0] || resultat[0] == "error\n") {
    console.log(`air01 : ${chalk.green("success")}`);
    successNumber += 1;
  } else {
    console.log(`air01 : ${chalk.red("failure")}`);
  }

  if (error) {
    console.log(error);
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
});

exec(
  "node air02.js 'Crevette magique dans la mer des étoiles' 'l'",
  (error, stdout, stderr) => {
    const resultatAttendu = [`Crevette magique dans \nmer des étoiles \n`];
    let resultat = [];
    resultat.push(stdout);

    console.log(resultatAttendu);
    console.log(resultat);
    if (resultatAttendu[0] == resultat[0] || resultat[0] == "error\n") {
      console.log(`air02 : ${chalk.green("success")}`);
      successNumber += 1;
    } else {
      console.log(`air02 : ${chalk.red("failure")}`);
    }

    if (error) {
      console.log(error);
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
  }
);
