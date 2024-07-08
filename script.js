function buscar{
    var entrada = document.getElementById("entrada").ariaValueMax.toLowerCase();
     
    var url = "https://pokeapi.co/api/v2/pokemon/"+engtrda+"";
     
     fetch(url)
     .then(response => response.json)
     .then(data => {

        var tela = document.getElementById("tela");
       tela.innerHTML =
       '<h2>' + data.name + '</h2>'
       
       + '<img class= "pokemon" src+" '+ data.sprintes.front_default +'">'
        + '<img class= "pokemon" src+" '+ data.sprintes.back_default +'">'

       + '<p> Id: '+ data.id + '</p>'
       + '<p> Tipo: '+ data.types.map(type => type.type.name) + '</p>'
       + '<p> habilidade: '+ data.abilities.map(ability=> ability.ability.name) + '</p>'
        }).catch(error =>{
            var tela = document.getElementById("tela");
            tela.innerHTML = '<p> Pokémon não encontrado!</p>'
        })
    }