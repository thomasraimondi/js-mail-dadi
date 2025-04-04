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

do {
  userEmail = prompt("Inserisci la tua mail:");
  console.log(userEmail);
} while (
  !(
    (userEmail.includes("@") && userEmail.endsWith(".it")) ||
    userEmail.endsWith(".com")
  )
);
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
