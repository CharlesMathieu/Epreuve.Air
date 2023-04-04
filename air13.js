/*Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri rapide (QuickSort).

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_quick_sort(array) {
	# votre algorithme
	return (new_array)
}


Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6



Afficher error et quitter le programme en cas de problèmes d’arguments.


Wikipedia vous présentera une belle description de cet algorithme de tri.
 */

const liste = process.argv.slice(2);

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort(liste));
