import navbar from "../components/nav.js";

let n = document.getElementById("main");
n.innerHTML = navbar();

function showme() {
  let arr = [
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4835/1374835-h-b4b9bc8dfef6",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4633/1364633-h-f78a196931d6",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4248/1364248-h-04994afb88d4",
  ];

  let i = 1;
  let d1 = document.querySelector(".slidshow");
  d1.id = "slidediv";

  let img = document.createElement("img");
  img.src = arr[0];
  d1.append(img); 

  setInterval(() => {
    img.src = arr[i];
    d1.append(img);
    i++;
    console.log(i);
    if (i >= arr.length) {
      i = 0;
    }
  }, 3000);
}
showme();

//// movies filter

let str = [
    { name: "Bellbottom", relese: 2014, rating: 6.1, img: "https://m.media-amazon.com/images/M/MV5BNjZjNTU2MTQtNGQ5YS00YjQ1LTgwZTctYWNjMGRjMzhkMmVhXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_UY209_CR2,0,140,209_AL_.jpg" },
    { name: "Sardar Udham", relese: 2019, rating: 8.4, img: "https://m.media-amazon.com/images/M/MV5BZGFhNTYwZmMtNzk4Ny00MTExLThjMWUtNjYzMTEwZjEzMWQ3XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_UY209_CR13,0,140,209_AL_.jpg" },
    { name: "14 Phere", relese: 2017, rating: 5.8, img: "https://m.media-amazon.com/images/M/MV5BZDJjNGIzMWQtNTllMy00YTBiLWFmYTQtZTRhMjQwOWI2M2MzXkEyXkFqcGdeQXVyMTIzMzg0MTM2._V1_UY209_CR13,0,140,209_AL_.jpg" },
    { name: "Silence: Can You Hear It", relese: 2012, rating: 6.5, img: "https://m.media-amazon.com/images/M/MV5BYWI0YTBhZDctYzk5YS00ZGI5LTlhMmEtOWE1ODU5MjU1MGE1XkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_UY209_CR13,0,140,209_AL_.jpg" },
    { name: "Tribhanga", relese: 2021, rating: 6.2, img: "https://m.media-amazon.com/images/M/MV5BNzZkYzBhYjAtYTc1MC00NDVkLWJiY2EtNjcwNjJiMTEyYjE5XkEyXkFqcGdeQXVyMTEzMTU3MjI5._V1_UY209_CR0,0,140,209_AL_.jpg" },
    { name: "Milestone", relese: 2018, rating: 6.6, img: "https://m.media-amazon.com/images/M/MV5BYWMwOTFkNDctNjAwMS00OTNlLTg2Y2ItMjQ5Y2Q1MDdmYjBkXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_UY209_CR4,0,140,209_AL_.jpg" },
]

movie(str) 
function movie(str) {  

    let load = document.getElementById("load"); 
    load.style.display = "none" ; 

    document.querySelector(".movie_area").innerHTML = "";
    str.forEach((e) => {
        let d2 = document.createElement("div");

        let na = document.createElement("h3");
        na.innerText = e.name;

        let rel = document.createElement("h3");  
        rel.innerText = "release: " + e.relese;  

        let rat = document.createElement("h3");  
        rat.innerText = "Rating: " + e.rating;  

        let img = document.createElement("img");
        img.src = e.img;

        d2.append(img, na, rat, rel);
        document.querySelector(".movie_area").append(d2);  

    }) 
}

// sort function 

document.getElementById("sort2").addEventListener("change", function (){
    sortmovie();  
})

function sortmovie() {

    let load = document.getElementById("load"); 
    load.style.display = "block"

    setTimeout(() => {
        let select = document.querySelector("#sort2").value;
        if (select == "htl") {
            let x = str.sort((a, b) => { return b.rating - a.rating });
            movie(x);
        }
        else if (select == "lth") {
            let z = str.sort((a, b) => { return a.rating - b.rating });
            movie(z); 
        }  
    }, 3000)

}

document.getElementById("year").addEventListener("click",function (){
    yearsort(); 
})

function yearsort() {

    let load = document.getElementById("load"); 
    load.style.display = "block" ;

    setTimeout(() => {
        let c = str.sort((a, b) => { return a.relese - b.relese });
        movie(c);
    }, 3000)

}

