const queryString = document.location.search;
const blogDetails = document.querySelector(".blog-details");



const params = new URLSearchParams(queryString);

const id = params.get("id");


const url = "https://kamillafagerland.com/blogexam/wp-json/wp/v2/posts/" + id + "?_embed";





async function fetchBlogPosts(){
    try{
        const response = await fetch(url);
        const posts = await response.json();

        blogDetails.innerHTML = "";

        console.log(posts)

        createHtml(posts);
    }
    catch(error){
        console.log(error);
       
    }
}



fetchBlogPosts();

function createHtml(posts){
    blogDetails.innerHTML +=
     `<h1 class="detailsH1">${posts.title.rendered}</h1>
     <img id="myImg" class="detail-image"  style="background-image:url('${posts._embedded['wp:featuredmedia'][0].source_url}')"></img>
     <p class="blogP">${posts.excerpt.rendered}</p>
     <dialog id="myModal" class="modal">
     <span class="close"></span>
     
     <img class="modal-image"  style="background-image:url('${posts._embedded['wp:featuredmedia'][0].source_url}')"></img>
    
   </dialog>`;

    



    

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

            
          }}
        



  


