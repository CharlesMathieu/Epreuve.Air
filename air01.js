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

//Gestion d'erreur d'argument
if (!process.argv[2] || !isNaN(parseInt(process.argv[2]))) {
  console.log("error");
  process.exit();
}
//Récupère ma string
let myString = process.argv[2].trim();

//Ma fonction qui split
function split(string_à_couper, string_séparateur) {
  let currentString = "";
  let myArg = [];
  //Boucle ma string
  for (let i = 0; i < myString.length; i++) {
    currentString += string_à_couper[i];
    //Si rencontre un espace, tabulation, retour à la ligne alors push
    if (string_à_couper[i] == " " || i == myString.length - 1) {
      myArg.push(currentString);
      currentString = "";
    }
  }
  //Boucle pour afficher le résultat
  for (let j = 0; j < myArg.length; j++) {
    if (myArg[j] !== " ") {
      console.log(myArg[j]);
    }
  }
}

split(myString);
