/*Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument au programme.

Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, separateur) {
	# votre algorithme
	return (string)
}


Exemples d’utilisation :
$> python exo.py “je” “teste” “des” “trucs” “ “
Je teste des trucs


Afficher error et quitter le programme en cas de problèmes d’arguments.
 */
//Récupère arguments
const myArgs = process.argv.slice(2);
//Fonction du concat
function concat(array_de_strings, séparateur) {
  let string = "";
  //Boucle tableau de mots
  for (let i = 0; i < array_de_strings.length; i++) {
    //Si taille du tableau - atteinte quitter programme
    if (i == array_de_strings.length - 1) {
      return string;
    }

    if (i == array_de_strings.length - 2) {
      string += array_de_strings[i];
    } else {
      string += `${array_de_strings[i]}${séparateur}`;
    }
  }
}
//Appel + console.log de la fonction
console.log(concat(myArgs, myArgs[myArgs.length - 1]));

/*
si array[i] pas égal à array.length -1
console.log(`${array[i]} séparateur`) 
sinon console.log(`${array[i]}`)
*/
