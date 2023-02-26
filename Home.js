baseUrl = "https://kamillafagerland.com/blogexam/wp-json/wp/v2/posts?_embed";
const imagesSlideshow = document.querySelector(".wrapper");



async function getProducts(url){
  const response = await fetch(url);
  const posts = await response.json();

  imagesSlideshow.innerHTML = "";
  
  posts.forEach(function(posts){
    console.log(posts);

    
    
    
    imagesSlideshow.innerHTML +=`

             <a href="/blogPost.html?id=${posts.id}" class="carousel">
               <img class="carousel-image2" draggable="false" style="background-image:url('${posts._embedded['wp:featuredmedia'][0].source_url}')">  
             </a>   `
              
  })
  
  const carousel = document.querySelector(".wrapper");
  firstImg = carousel.querySelectorAll(".carousel-image2")[0];
  arrowIcons = document.querySelectorAll(".carouselBody i");

  let isDragStart = false, prevPageX, prevScrollLeft;
  let firstImgWidth = firstImg.clientWidth;

  arrowIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
      carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;

    })

  });

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.thouches[0].pageX ;
    prevScrollLeft = carousel.scrollLeft;


  }

  const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.thouches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
  }

  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
  }

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("thouchstart", dragStart);

  carousel.addEventListener("mouseover", dragging);
  carousel.addEventListener("thouchmove", dragStart);

  carousel.addEventListener("mouseup", dragStop);
  carousel.addEventListener("mouseleave", dragStop);
  carousel.addEventListener("thouchend", dragStart);
  


}

  
getProducts(baseUrl);


