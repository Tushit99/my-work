// on click
let input = document.getElementById("myInput");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

// code

document.getElementById("myBtn").addEventListener("click", pushed);

class OurArr {
  constructor() {
    this.arr = [];
    this.length = 0;
  }
  pushing(a) {
    return this.arr.push(a);
  } 
  poping(){
    return this.arr.pop(); 
  } 
} 
let x = new OurArr();

function pushed() {
  let num = document.getElementById("myInput").value;
  x.pushing(num);
//   console.log(x);
  showme(x.arr);
}

function showme(arr) {
    document.getElementById("data").innerHTML = "" ; 

  arr.forEach((e) => {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.innerText = e
    div.append(h2);
    document.getElementById("data").append(div);
  });
}

function popme(){
    x.poping(); 
    showme(x.arr);
    console.log(x.arr); 
}
