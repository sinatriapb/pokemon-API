
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(Response =>Response.json()).then(Response=>{
        
        let pokemon = Response.results
        let card =''
        for (let i = 0; i < pokemon.length; i++) {
            card+= `
            <div class="card">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png" alt="">
                <h3>${pokemon[i].name}</h3>
                <p>${pokemon[i].url}</p>
            </div>
        </div>`
        document.getElementById('container').innerHTML = card;
            
        }
        
    })
    

