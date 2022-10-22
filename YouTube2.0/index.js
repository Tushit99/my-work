import navbar from "./components/navbar.js";

document.querySelector("nav").innerHTML = navbar(); 


document.getElementById("myBtn").addEventListener("click", serchVideos)

async function serchVideos() {
  try {
    const API_key = "AIzaSyB4btXZPf-7JKtcXYv4xndBs_h6fmnxKJc";

    let serch = document.getElementById("search_term").value;

    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${serch}&key=${API_key}`
    );

    let x = await res.json();
    append(x.items); 
    // console.log(x.items); 
  } catch (err) {
    console.log(err);
  }
}

const append = (data) => {
    document.getElementById("data").innerHTML = "";
    // console.log(data);
    data.forEach(({ snippet, id: { videoId } }) => {
      let div = document.createElement("div");
  
      let name = document.createElement("h2");
      name.innerText = snippet.title;
  
      let title = document.createElement("p");
      title.innerText = snippet.channelTitle;
  
      let thumbnail = document.createElement("img");
      thumbnail.src = snippet.thumbnails.medium.url;
  
      div.append(thumbnail, name, title);
  
      div.onclick = () => {
        console.log(snippet, videoId);
        let data = {
          snippet,
          videoId,
        };
  
        data = JSON.stringify(data);
  
        localStorage.setItem("clicked_video", data);
  
        window.location.href = "./videos.html";
      };
  
      document.getElementById("data").append(div);
    });
  };
  
  var input = document.querySelector("#search_term");
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
  }); 

