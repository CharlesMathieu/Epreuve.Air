/*Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.

Votre programme devra intégrer une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}


Exemples d’utilisation :
$> python exo.py “Crevette magique dans la mer des étoiles” “la”
Crevette magique dans 
 mer des étoiles

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
//Gestion d'erreur d'argument
if (!process.argv[2] || !isNaN(parseInt(process.argv[2]))) {
  console.log("error");
  process.exit();
}

//Récupère ma string et mon séparateur
let myString = process.argv[2].trim().split(" ");
let stringSeparator = process.argv[3].split(" ");

// Je déclare ma fonction qui split
const split = function (string_à_couper, string_séparateur) {
  let currentString = "";
  let myArr = [];
  //boucle mon tableau de mot
  for (let i = 0; i < string_à_couper.length + 1; i++) {
    //Si mot parcouru = séparateur ou fin du tableau
    //atteinte
    //Ajoute current string au tableau
    if (
      string_à_couper[i] == string_séparateur[0] ||
      i == string_à_couper.length
    ) {
      myArr.push(currentString);
      currentString = "";
    } else {
      currentString += `${string_à_couper[i]} `;
    }
  }
  //Affichage résultat
  for (let j = 0; j < myArr.length; j++) {
    console.log(myArr[j]);
  }
};
//Appel de ma fonction
split(myString, stringSeparator);
