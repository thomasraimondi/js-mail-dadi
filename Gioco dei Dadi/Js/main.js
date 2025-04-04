// generate user number
const userNumber = Math.floor(Math.random(6) * 6) + 1;
// generate pc number
const pcNumber = Math.floor(Math.random(6) * 6) + 1;

// print numbers
console.log(`Utente: ${userNumber}`);
console.log(`PC: ${pcNumber}`);

// compare the numbers
if (userNumber > pcNumber) {
  console.log("L'utente ha vinto");
} else if (userNumber === pcNumber) {
  console.log("Pareggio");
} else {
  console.log("Il pc ha vinto");
}
