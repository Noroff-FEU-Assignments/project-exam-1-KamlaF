baseUrl = "https://kamillafagerland.com/blogexam/wp-json/wp/v2/posts?_embed";
const productContainer = document.querySelector(".productsApi");



async function getProducts(url){
  const response = await fetch(url);
  const posts = await response.json();

  
  
  posts.forEach(function(posts){
    
    
    productContainer.innerHTML +=`
   
   
  
    <div class = "blogPosts">
    
   
   <div>${posts.content.rendered}</div>
   
    </div>
    `
  })

  

}

getProducts(baseUrl);