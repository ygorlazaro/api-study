const url = 'https://viacep.com.br/ws/22743051/json/';

(async () =>{
    try{
        const data = await fetch(url);
        const endereco = await data.json();
        
        // const

    }catch{

    }
    
})();