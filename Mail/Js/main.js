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
console.log(userEmail);

for (let i = 0; i < invitedEmail.length; i++) {
  const currentValue = invitedEmail[i];
  console.log(currentValue);
}
