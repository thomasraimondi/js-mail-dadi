const invitedEmail = [
  "pippo@pippo.it",
  "pluto@pluto.com",
  "me@gmail.com",
  "lui@libero.it",
  "asd@yahoo.it",
  "qwe@outlook.com",
  "zxc@gmail.com",
  "cioa@icloud.com",
];
let userEmail = "";
let isFindEmail = false;
let outputMessage = "La tua mail non è in lista";

// Verify if the input respect the riquirments else ask again
do {
  userEmail = prompt("Inserisci la tua mail:");
  console.log(userEmail);
} while (
  !(
    (userEmail.includes("@") && userEmail.endsWith(".it")) ||
    userEmail.endsWith(".com")
  )
);

// print user email
console.log(`La mail dell'utente: ${userEmail}`);

// Search if the user email is in the array of invited email

//With For
// for (let i = 0; i < invitedEmail.length; i++) {
//   const currentValue = invitedEmail[i];
//   if (currentValue === userEmail) {
//     outputMessage = "Benvenuto alla festa ";
//     isFindEmail = true;
//     console.log(`Mail verificata: ${currentValue}`);
//   }
// }

//With While
let i = 0;
while (isFindEmail != true) {
  const currentValue = invitedEmail[i];

  if (currentValue === userEmail) {
    outputMessage = "Benvenuto alla festa ";
    isFindEmail = true;
    console.log(`Mail verificata: ${currentValue}`);
  }
  i++;
}

// print the message to the user
console.log(outputMessage);
