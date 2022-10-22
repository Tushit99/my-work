import navbar from "../components/nav.js";

let n = document.getElementById("main");
// console.log(navbar)
n.innerHTML = navbar();

//// serch section  

let id;

document.getElementById("movie_name").addEventListener("input", function () {
  debounce(1000);
});

function debounce(delay) {
  if (id) {
    clearTimeout(id);
  } 
  id = setTimeout(() => {  
    serch();  
  }, delay);  
} 

async function serch() {
  let loadimg = document.querySelector("#load");
  loadimg.style.display = "block";

  let movie = document.getElementById("movie_name").value;

  let res = await fetch(`https://www.omdbapi.com/?apikey=f8634ed4&s=${movie}`);

  let d1 = await res.json();
  display(d1.Search);
  console.log(d1.Search);
}

function display(arr) {
  document.querySelector(".display").innerHTML = "";

  let loadimg = document.querySelector("#load");
  loadimg.style.display = "none";

  arr.map((e) => {
    let div = document.createElement("div");
    div.id = "rest";

    let img = document.createElement("img");
    img.src = e.Poster;

    let name = document.createElement("h2");
    name.innerText = e.Title;

    let year = document.createElement("h2");
    year.innerText = e.Year;

    div.append(img, name, year);
    document.querySelector(".display").append(div);
  });
}


