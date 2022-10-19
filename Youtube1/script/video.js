

const showdata=()=>{
    let data = JSON.parse(localStorage.getItem("clicked_video"));  
    // console.log(data); 
    let {videoId} = data;  
    // console.log(videoId); 
    let iframe = document.createElement("iframe"); 

    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1` ; 

    iframe.width = "100%" 
    iframe.height = "100%" 

    iframe.setAttribute("allowfullscreen",true); 
    iframe.setAttribute("autoplay",true) 


    let vi_div = document.getElementById("video_details"); 
    vi_div.append(iframe);  

}








