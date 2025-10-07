const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
} = require("./ex.js");

describe("operazione su stringhe", () => {
  test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Mario Rossi")).toBe("M.R.");
    expect(getInitials("luigi rossi")).toBe("L.R.");
    expect(getInitials("luigi  rossi")).toBe("L.R.");
  });

  test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("anna")).toBeTruthy();
    expect(isPalindrome("ciao")).toBeFalsy();
    expect(isPalindrome("angolobarabologna")).toBeTruthy();
  });
});
describe("operazione su array", () => {
  test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([4, 8])).toBe(6);
    expect(average([10, 20, 30, 40, 50])).toBe(30);
    expect(() => average([10, "ciao"])).toThrow();
  });

  const posts = [
    {
      id: 1,
      title: "mizio",
      slug: "#mizio",
    },
    {
      id: 2,
      title: "fra",
      slug: "#fra",
    },
    {
      id: 3,
      title: "bro",
      slug: "#bro",
    },
  ];

  test("La funzione findPostById restituisce il post corretto dato l’array di post e l'id", () => {
    expect(findPostById(posts, 2)).toEqual({
      id: 2,
      title: "fra",
      slug: "#fra",
    });
    expect(() => findPostById(posts, "ciao")).toThrow(
      "id del post non puo essere diverso da un numero"
    );
    expect(findPostById(posts, 4)).toBe(undefined);
    expect(() => findPostById([20, 11, 39], 1)).toThrow(
      "l'array non rispetta la struttura dati"
    );
  });
});
describe("creazioni di slug", () => {
  test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("MARIO ROSSI")).toBe("mario-rossi");
    expect(() => createSlug("")).toThrow("Titolo non valido");
    expect(() => createSlug(null)).toThrow("Titolo non valido");
  });

  test("La funzione createSlug sostituisce gli spazi con " - ".", () => {
    expect(createSlug("Questo è un test")).toBe("questo-è-un-test");
  });
});

// 🎯 Snack 8 (Bonus)
// Creare due test che verifichino le seguenti descrizioni:

// 👉 "Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più."

// 👉 "Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno."

// 📌 Note:

// Si consiglia di resettare l'array di post dopo ogni test. Ti ricordi come si fa?
// 🎯 Snack 9 (Bonus)
// Creare un test che verifichi la seguente descrizione:

// 👉 "Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore."

// 📌 Nota:

// Gli errori devono essere chiari e distinti, es. "Slug già esistente" e “Id già esistente”.
// 🎯 Snack 10 (Bonus): createSlug() – Incrementare lo slug se esiste già
// Creare un test che verifichi la seguente descrizione:

// 👉 "Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già."
