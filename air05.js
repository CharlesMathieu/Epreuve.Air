/*Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.


Exemples d’utilisation :
$> python exo.py “Hello milady,   bien ou quoi ??”
Helo milady, bien ou quoi ?


Afficher error et quitter le programme en cas de problèmes d’arguments.
 */
const string = process.argv[2];

function correction(chaîne) {
  let finalString = "";
  for (let i = 0; i < chaîne.length; i++) {
    if (chaîne[i] !== chaîne[i + 1]) {
      finalString += chaîne[i];
    }
  }
  return finalString;
}

console.log(correction(string));
