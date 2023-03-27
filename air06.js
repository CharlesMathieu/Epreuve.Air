/*Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.


Exemples d’utilisation :
$> ruby exo.rb 1 2 3 4 5 “+2”
3 4 5 6 7

$> ruby exo.rb 10 11 12 20 “-5”
5 6 7 15


L’opération à appliquer sera toujours le dernier élément.


Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

const numbers = process.argv.slice(2);

const signe = numbers[numbers.length - 1];

function additionSoustraction(nbList, x) {
  let numbersChanged = "";
  for (let i = 0; i < nbList.length - 1; i++) {
    if (x[0] == "-") {
      numbersChanged +=
        `${parseInt(nbList[i])}` - `${parseInt(x.slice(1))}` + " ";
    } else if (x[0] === "+") {
      numbersChanged += parseInt(nbList[i]) + parseInt(x.slice(1)) + " ";
    }
  }
  console.log(numbersChanged);
}
additionSoustraction(numbers, signe);
