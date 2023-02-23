baseUrl = "https://kamillafagerland.com/blogexam/wp-json/wp/v2/posts?_embed";
const loadMore2 = document.querySelector(".loadMore");
const sliderContainer = document.querySelector(".slider");


async function getProducts(url){
  const response = await fetch(url);
  const posts = await response.json();

  sliderContainer.innerHTML = "";
  
  posts.forEach(function(posts){
    console.log(posts);

    
    
    
    sliderContainer.innerHTML +=`

   
    
              
              <div class="slide">
               <img class="carousel-image" style="background-image:url('${posts._embedded['wp:featuredmedia'][0].source_url}')"></img>
               <button class="btn btn-next">></button>
               <button class="btn btn-prev"><</button>
               </div>
              
              
              
              
  
    
    `
  })

  const slides = document.querySelectorAll(".slide");

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });
  

  const nextSlide = document.querySelector(".btn-next");
 
  let curSlide = 0;
  
  let maxSlide = slides.length - 1;
  
 
  nextSlide.addEventListener("click", function () {
   
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
  
   
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });
  
 
  const prevSlide = document.querySelector(".btn-prev");
  

  prevSlide.addEventListener("click", function () {
    
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide;
    }
  
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });
  
  }
  

  
getProducts(baseUrl);


