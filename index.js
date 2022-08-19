addEventListener("DOMContentLoaded", (e)=>{
     const filmscont = document.querySelector(".box");
     //const content = document.querySelector(".text");
     //const filmscont2 = document.querySelector(".card-inner");
    // const content2 = document.querySelector(".card-back2")
     
    let link = `https://swapi.dev/api/films/`;
    const number = localStorage.getItem("chosen number")

    console.log(link + number)

     fetch(link + number)
    .then(response => response.json())
    
    .then(film => {
         
        let movie = document.createElement("h2")
        let title = document.createElement("h2")
        let director = document.createElement("h3")
        let episode = document.createElement("p")
        let create = document.createElement("p")

        
        
        title.innerText = film.title;
        director.innerText = film.director;
        episode.innerText = film.episode_id;
        create.innerText = film.created;



        
        movie.appendChild(title);
        movie.appendChild(create);      
        movie.appendChild(director);
        movie.appendChild(episode);
        
        filmscont.appendChild(movie);
        // filmscont2.appendChild(movie);
        // content.appendChild(movie);
      
    })
})
    
    
    
    
    
