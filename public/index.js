let url =
  "https://api.unsplash.com/search/photos?page=1&query=cat&client_id=jCW0OKe51JoclZ_CMI07bSvEytgsZqevDhUoTRewgx0";
let cont = document.getElementById("container");
let searchB = document.getElementById("searchbar");
let searchBtn = document.getElementById("searchbtn");
let form = document.querySelector("form");
let showMoreBtn = document.getElementById("showmorebtn");
let html = "";
let input = "";
let page = 1;

let searchimg = async () => {
  input = searchB.value;
  let response = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=jCW0OKe51JoclZ_CMI07bSvEytgsZqevDhUoTRewgx0`
  );
  let data = await response.json();
  result = data.results;

  //   console.log(result);

  for (let item in result) {
    html += ` <div class="searchContainer">
        <img
          src="${result[item].urls.small}"
          alt="imge"
        />
        <a
          href="${result[item].urls.full}"
          >${result[item].description}</a
        >
      </div>`;
  }
  cont.innerHTML = html;
  html = "";
  page++;

  console.log(data);
};
showMoreBtn.onclick = async () => {
  searchimg();
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  searchimg();
});
