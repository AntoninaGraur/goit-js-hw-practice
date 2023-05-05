const list = document.querySelector(".list");
const BASE_URL = "https://fakestoreapi.com/";

const url = `${BASE_URL}/products`;


fetch(url)
    .then((res => res.json())
        .then((result) => {
            list.insertAdjacentHTML("afterbegin". createProductCardMarkup(result))
       
    }))

function createProductCardMarkup(data) {
  const markup = data
    .map(({ id, price, title, image }) => {
      return `
            <li class="card" id="${id}">
                <div class="card__image">
                    <img src="${image}" alt="${title}" />
                    <div class="card__info--button">
                        <div data-heart>&#x2764;</div>
                    </div>
                </div>
                <div class="card__info">
                    <h3>${title}</h3>
                    <p>${price}</p>
                    <button data-action="addToCart">+</button>
                </div>
            </li>
        `;
    })
    .join("");

  return markup;
}