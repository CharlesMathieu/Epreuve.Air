/*Créez un programme qui ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant. Le dernier argument est l’élément à ajouter.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_insert(array, new_element) {
	# your algo
	return (new_array)
}


Exemples d’utilisation :
$> ruby exo.rb 1 3 4 2
1 2 3 4

$> ruby exo.rb 10 20 30 40 50 60 70 90 33
10 20 30 33 40 50 60 70 90


Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

const numberList = process.argv.slice(2);
const newNumber = numberList[numberList.length - 1];

function sortedInsert(array, new_element) {
  new_element = parseInt(new_element);
  finaleSortedList = "";
  //Boucle tableau de nombre
  for (let i = 0; i < array.length; i++) {
    //
    if (array[i] < new_element) {
      finaleSortedList += `${array[i]} `;
      //
    } else if (new_element == "") {
      finaleSortedList += `${array[i - 1]} `;
      //
    } else if (array[i] > new_element) {
      finaleSortedList += `${new_element} `;
      new_element = "";
    }
  }
  console.log(finaleSortedList);
}

sortedInsert(numberList, newNumber);
