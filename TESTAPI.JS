baseUrl = "https://kamillafagerland.com/blogexam/wp-json/wp/v2/posts?_embed&pr_page=100";
const productContainer = document.querySelector(".productsApi");



async function getProducts(url){
  const response = await fetch(url);
  const posts = await response.json();

  

  

  
  
  posts.forEach(function(posts){
    console.log(posts);
    
    
    productContainer.innerHTML +=`
   
   
  
    <div class = "blogPosts">  
   
   <h1 class="blogh1">${posts.title.rendered}</h1>
   <img class="product-image" style="background-image:url('${posts._embedded['wp:featuredmedia'][0].source_url}')"></img>
   <p class="blogP">${posts.excerpt.rendered}</p>
   
    </div>
    `
  })
}

getProducts(baseUrl);