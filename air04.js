/* Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.


Exemples d’utilisation :
$> python exo.py 1 2 3 4 5 4 3 2 1
5

$> python exo.py bonjour monsieur bonjour
monsieur


Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
//Récupère arguments
const args = process.argv.slice(2);

function errorArgument() {
  if (args.length == 0) {
    console.log("error");
    process.exit();
  }
}

function trouverIntrus(arguments) {
  let currentArg = "";
  let intrusTrouvé = 0;

  for (let i = 0; i < arguments.length; i++) {
    currentArg = arguments[i];
    intrusTrouvé = 0;

    for (let j = 0; j < arguments.length; j++) {
      if (currentArg == arguments[j]) {
        intrusTrouvé += 1;
      }
    }
  }

  if (intrusTrouvé > 1) {
    return currentArg;
  } else {
    return "Pas d'intrus";
  }
}
console.log(errorArgument());
console.log(trouverIntrus(args));

//si number jamais égal à number parcouru
//quitter programme et console.log le number
