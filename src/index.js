function fetchRandomDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(dogs=>displayDogImages(dogs.message))
    .catch(error =>{
         alert("Error fetching dog images");
         console.log(error.message)
        })
}

function displayDogImages(dogs){
    dogs.map(dog=> console.log(dog))
}

fetchRandomDogs();