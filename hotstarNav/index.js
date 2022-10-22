

let id;

function debounce(delay) {

    if (id) {
        clearTimeout(id);
    }

    id = setTimeout(() => {
        serch();
    }, delay)

}

async function serch() { 

    let loadimg = document.querySelector(".load");
    loadimg.style.display = "block"

    let movie = document.getElementById("movie_name").value;

    let res = await fetch(`https://www.omdbapi.com/?apikey=f8634ed4&s=${movie}`);

    let d1 = await res.json();
    display(d1.Search);
}

function display(arr) {
    document.querySelector(".append").innerHTML = "";

    let loadimg = document.querySelector(".load");
    loadimg.style.display = "none"

    arr.map((e) => {
        let d1 = document.createElement("div"); 
        d1.style.cursor = "pointer"
        
        let name = document.createElement("h4");
        name.innerText = e.Title;
        
        d1.append(name); 
        d1.addEventListener("click", function (){
            present(e); 
        }); 
        document.querySelector(".append").append(d1);
    })
}


function present(e){
    console.log(e); 
    document.querySelector(".append").innerHTML = "";

    let div = document.createElement("div");
    div.id = "rest"
    
    let d2 = document.createElement("div");  
    let d3 = document.createElement("div");  

    let img = document.createElement("img"); 
    img.src =  e.Poster ; 

    let name = document.createElement("h2"); 
    name.innerText = e.Title ; 

    let year = document.createElement("h2"); 
    year.innerText = e.Year ; 

    d2.append(img); 
    d3.append(name,year);
    div.append(d2,d3) ;  
    document.querySelector(".display").append(div);  
    
}




