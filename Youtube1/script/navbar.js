
function navbar() {
  return `
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzs7d1nlxerknIa7Ajtp1dwrRknLGo-4oZ7A&usqp=CAU"
        alt="youtube-img">
    <div class="nav_sr">
        <input type="text" id="search_term">
        <button id="myBtn" onclick="serchVideos()"> <i class="fa fa-search"></i> </button>
    </div> ` 
} 


export default navbar ; 


