/*Créez un programme qui décale tous les éléments d’un tableau vers la gauche. Le premier élément devient le dernier à chaque rotation.

Utilisez une fonction de ce genre (selon votre langage) :
ma_rotation(array) {
	# votre algorithme
	return (new_array)
}


Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit”
Albert, Thérèse, Benoit, Michel


Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

const argConsole = process.argv.slice(2);
function arrayRotation(array) {
  let firstIndex = "";
  let newArray = [];

  for (let i = 0; i < array.length + 1; i++) {
    if (i == 0) {
      firstIndex += array[i];
    } else if (i == array.length) {
      newArray += firstIndex;
    } else {
      newArray += `${array[i]} `;
    }
  }
  console.log(newArray);
}
arrayRotation(argConsole);
