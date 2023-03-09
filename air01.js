/*Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).

Votre programme devra utiliser une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}


Exemples d’utilisation :
$> python exo.py “Bonjour les gars”
Bonjour
les
gars

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

let myString = process.argv[2];

if (!myString || !isNaN(parseInt(myString))) {
  console.log("error");
  process.exit();
}
function split(string_à_couper, string_séparateur) {
  let splitString = string_à_couper.split("");
  let currentString = "";
  let myArg = [];

  for (let i = 0; i <= splitString.length; i++) {
    currentString += splitString[i];
    if (splitString[i] == " ") {
      myArg.push(currentString);
      currentString = "";
    }

    if (i == splitString.length) {
      myArg.push(currentString.slice(0, -9));
      console.log(myArg);
      process.exit();
    }
  }
}

split(myString);
