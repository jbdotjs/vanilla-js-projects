const fact_p = document.getElementById('fact');

function getFact() {
    axios.get("https://api.icndb.com/jokes/random")
        .then((response) => {
            let joke = response.data.value.joke;
            
            fact_p.innerHTML = joke;
        })
        .catch((err) => {
            console.log(err); // remove
        });
}
