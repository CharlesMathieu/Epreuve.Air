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
//Récupère la string
let myString = process.argv[2];
//Gestion d'erreur d'argument
if (!myString || !isNaN(parseInt(myString))) {
  console.log("error");
  process.exit();
}

//Fonction qui split ma string
function split(string_à_couper, string_séparateur) {
  let splitString = string_à_couper.split("");
  let currentString = "";
  let myArg = [];
  console.log(splitString);
  //Boucle tableau de mes lettres
  for (let i = 0; i <= splitString.length; i++) {
    currentString += splitString[i];
    //Si on passe sur un espace dans mon tableau, on push le mot dans un tableau
    if (splitString[i] == " ") {
      myArg.push(currentString);
      currentString = "";
    }
    //Code pour supprimer les undefined dans mon tableau
    if (i == splitString.length) {
      myArg.push(currentString.slice(0, -9));
    }
  }
  //Boucle pour écrire les arguments 1 par 1
  for (let j = 0; j < myArg.length; j++) {
    console.log(myArg[j]);
  }
}

split(myString);
