console.log("working");
const quoteText = document.querySelector(`.quote`);
const url = "https://dummyjson.com/quotes/random";
const author = document.querySelector(`.author`);


async function getQuote() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  quoteText.innerHTML = data.quote;
  author.innerHTML = data.author;
}
const button = document.querySelector(`.button`);
button.addEventListener("click", () => {
  console.log("button dab gaya");
  getQuote();
});
