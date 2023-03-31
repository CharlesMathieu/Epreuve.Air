/*Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.


Exemples d’utilisation :
$> ruby exo.rb O 5
    O
   OOO
  OOOOO
 OOOOOOO
OOOOOOOOO


Afficher error et quitter le programme en cas de problèmes d’arguments.
 */
const padding = parseInt(process.argv[3]);
const argument = process.argv[2];
const space = " ";
let string = "";
let counter = 0;
for (let i = padding; i > 0; i--) {
  counter++;
  if (counter == 1) {
    string += `${argument}`;
  } else {
    string += `${argument.repeat(2)}`;
  }

  console.log(space.repeat(i) + string);
}
