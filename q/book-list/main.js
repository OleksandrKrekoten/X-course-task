const root = document.getElementById("root");

async function fetchDataAndLog() {
  try {
    const response = await fetch("../db/books.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

(async function displayBooks() {
  const booksData = await fetchDataAndLog();

  if (booksData) {
    const ul = document.createElement("ul");
    ul.classList.add("list");

    booksData.books.forEach((book) => {
      const bookItem = document.createElement("li");
      bookItem.classList.add("list_item");
      const imageSrc = book.image || "../img/imageNotFound.png";
      bookItem.innerHTML = `
      <img class="img" src="${imageSrc}" alt="${book.title}">
        <h2>${book.title}</h2>
        <p>By ${book.author}</p>
        <p>$ ${book.price}</p>
        
      `;

      ul.appendChild(bookItem);
    });

    root.appendChild(ul);
  }
})();
