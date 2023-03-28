/*Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_fusion(array1, array2) {
	# your algo
	return (new_array)
}


Exemples d’utilisation :
$> ruby exo.rb 10 20 30 fusion 15 25 35
10 15 20 25 30 35


Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/****** Création des deux tableaux ******/
const argConsole = process.argv.slice(2);
let array1 = [];
let array2 = [];
let split = 0;

for (let i = 0; i < argConsole.length; i++) {
  if (argConsole[i] == "fusion") {
    split += 1;
  }

  if (split == 0) {
    array1.push(argConsole[i]);
  } else {
    array2.push(argConsole[i]);
  }
}
array2.shift();
/******							 *******/

function sortedFusion(arr1, arr2) {
  let finalArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < array2[i]) {
      finalArray += `${arr1[i]} ${array2[i]} `;
    } else {
      finalArray += `${arr2[i]} ${array1[i]} `;
    }
  }
  console.log(finalArray);
}
sortedFusion(array1, array2);
