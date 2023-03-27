/*Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.

Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, string) {
	# votre algorithme
	return (nouvel_array_de_strings)
}


Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “t”
Michel

$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “a”
Michel, Thérèse, Benoit



Afficher error et quitter le programme en cas de problèmes d’arguments.
 */
const strings = process.argv.slice(2);
const élément = strings[strings.length - 1];

function élémentOuPas(array_de_strings, arg) {
  let find = 0;
  let newArray = "";

  for (let i = 0; i < array_de_strings.length - 1; i++) {
    find = 0;
    for (let j = 0; j < array_de_strings[i].length; j++) {
      if (array_de_strings[i][j] == arg) {
        find += 1;
      }
    }
    if (find == 0) {
      newArray += `${array_de_strings[i]} `;
    }
  }
  return newArray;
}

console.log(élémentOuPas(strings, élément));
