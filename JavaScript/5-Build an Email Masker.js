function maskEmail(email) {
  const domainStart = email.indexOf("@");

  let emailAddress = email.slice(0, domainStart);

  const lengthOfEmail = emailAddress.length;
  const firstLetter = emailAddress.charAt(0);
  const lastLetter = emailAddress.charAt(lengthOfEmail - 1);

  emailAddress = firstLetter + "*".repeat(lengthOfEmail - 2) + lastLetter;

  const domainName = email.slice(domainStart);

  return emailAddress + domainName;
}
let email = "apple.pie@example.com";
console.log(maskEmail(email));
