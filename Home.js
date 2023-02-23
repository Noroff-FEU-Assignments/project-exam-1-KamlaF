baseUrl = "https://kamillafagerland.com/blogexam/wp-json/wp/v2/posts?_embed";
const carouselContainer = document.querySelector(".carouselContainer");
const loadMore = document.querySelector(".loadMore");



async function getProducts(url){
  const response = await fetch(url);
  const posts = await response.json();

  carouselContainer.innerHTML = "";
  
  posts.forEach(function(posts){
    console.log(posts);

  
    carouselContainer.innerHTML +=`
    
    
    <a href="/blogPost.html?id=${posts.id}" class="wrapper">
           <img class="carousel-image" style="background-image:url('${posts._embedded['wp:featuredmedia'][0].source_url}')"></img>
          
    </a> `
  })

  const carousel = document.querySelector(".carouselContainer");
  firstImg = carouselContainer.querySelectorAll("img")[0];
  arrowIcons= document.querySelectorAll(".fa-angle-right, .fa-angle-left");

  let isDragStart = false;
  let firstImgWidth = firstImg.clientWidth 

  arrowIcons.forEach(icon =>{
    icon.addEventListener("click", () =>{
      carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
       
    });

  })

  const dragging =(e)=>{
    carousel.scrollLeft=e.pageX;
  }
  carousel.addEventListener("mouseover", dragging);
}

getProducts(baseUrl);






