type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  author: Author; //nested object
  name: string;
};

let book: Book = {
  author: {
    firstName: "Muhammad Ramzan",
    lastName: "Akram",
  },
  name: "Harry Porter",
};
