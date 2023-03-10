baseUrl = "https://kamillafagerland.com/blogexam/wp-json/wp/v2/posts?_embed";
const productContainer = document.querySelector(".productsApi");
const loadMore = document.querySelector(".loadMore");



async function getProducts(url){
  const response = await fetch(url);
  const posts = await response.json();

  productContainer.innerHTML = "";
  
  posts.forEach(function(posts){
    console.log(posts);

    
    
    
    productContainer.innerHTML +=`

    <a href="/blogPost.html?id=${posts.id}" class = "blogPosts">      
               <img class="product-image" style="background-image:url('${posts._embedded['wp:featuredmedia'][0].source_url}')"></img>
               <h1 class="blogh1">${posts.title.rendered}</h1>
    </a>
    `
  })
}

getProducts(baseUrl);

loadMore.onclick = function(){
    const newUrl = baseUrl + "&per_page=100";
    productContainer.innerHTML="";
    getProducts(newUrl);
}


    



    

        const img = document.getElementById("myImg");
        const modal = document.getElementById("myModal");
        const close = document.querySelector(".close")
        
        
        
        function openCheck(modal) {
            if (modal.open) {
              console.log("Modal open");
            } else {
              console.log("Modal closed");
             
            }
          }
        
        img.addEventListener('click', () =>{
            modal.showModal();
            modal.style.display = "block";
            openCheck(modal);
            
         
        });

      
        
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.close();
              openCheck(modal);
              window.location.reload();
             
              
           
              
            }

            
          }
        



  


