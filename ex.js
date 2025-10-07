function getInitials(completeName) {
  const [nome, cognome] = completeName.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str) {
  if (!str) {
    throw new Error("Titolo non valido");
  }

  const lowerStr = str.toLowerCase().replaceAll(" ", "-");
  return lowerStr;
}

function average(arr) {
  // let somma = 0;
  // arr.forEach((num) => {
  //   somma += num;
  // });
  // return somma / arr.length;

  arr.forEach((num) => {
    if (isNaN(num)) {
      throw new Error("avarege vuole solo numeri");
    }
  });

  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

function isPalindrome(str) {
  const reversStr = str.trim().split("").reverse().join("");
  return str.trim() === reversStr;
}

module.exports = { getInitials, createSlug, average, isPalindrome };
