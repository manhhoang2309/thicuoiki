document.getElementById('myBtn').addEventListener('click',getData);
function getData() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then(data => {
            let author = data.results
            let output = "<h2><center>Get User Data</center></h2>";
            author.forEach(function(lists) {
                    output += `
            });
          
    })
            
            

            
        
}
