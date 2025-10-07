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

function findPostById(arr, id) {
  if (isNaN(id)) {
    throw new Error("id del post non puo essere diverso da un numero");
  }

  arr.forEach((obj) => {
    if (
      obj.id === undefined ||
      obj.title === undefined ||
      obj.slug === undefined
    ) {
      throw new Error("l'array non rispetta la struttura dati");
    }
  });

  return arr.find((obj) => obj.id === id);
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
};
