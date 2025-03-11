const movieContainer = document.getElementById('movie-container');

async function fetchData(){
    movieContainer.innerHTML = '';
    try{
        const res = await fetch('https://jsonfakery.com/movies/paginated');

        if(res.ok){

            Swal.fire("Success!", "", "success");

            const data = await res.json();

            data.data.forEach(movie => {
               movieContainer.innerHTML += `<div class="flex flex-col items-center">
               <img src="${movie.poster_path}" alt="" class="h-56">
                <h2 class="font-semibold">${movie.original_title}</h2>
               </div>` 
            });

        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
        }
    }
    catch(e){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to Fetch!",
          });
          console.error(e);
    }
}

document.getElementById('show').addEventListener('click',()=>{
    Swal.fire({
        title: "Do you want to browse movies?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`
      }).then((result) => {
        if (result.isConfirmed) {
          fetchData();
        } else if (result.isDenied) {
          Swal.fire("Canceled!", "", "info");
        }
      });
})