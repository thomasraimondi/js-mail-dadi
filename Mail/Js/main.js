const invitedEmail = [
  "mail1",
  "mail2",
  "mail3",
  "mail4",
  "mail5",
  "mail6",
  "mail7",
  "mail8",
];

const userEmail = prompt("Inserisci la tua mail:");
console.log(`La mail dell'utente: ${userEmail}`);

let isFindEmail = false;
let outputMessage = "";

for (let i = 0; i < invitedEmail.length && isFindEmail === false; i++) {
  const currentValue = invitedEmail[i];
  if (currentValue === userEmail) {
    outputMessage = "Benvenuto alla festa ";
    isFindEmail = true;
    console.log(`Mail verificata: ${currentValue}`);
  } else {
    outputMessage = "La tua mail non è in lista";
  }
}

alert(outputMessage);
