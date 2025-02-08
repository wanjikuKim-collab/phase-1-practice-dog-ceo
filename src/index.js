const dogImageContainer = document.getElementById('dog-image-container');
const dogBreeds = document.getElementById() 

function fetchRandomDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(dogs=>displayDogImages(dogs.message))
    .catch(error =>{
         alert("Error fetching dog images");
         console.log(error.message)
        })
}

function fetchDogBreed(){

}

function displayDogImages(dogs){
    dogs.map(dog=>{
        console.log(dog);
        let img = document.createElement('img');
        img.className = 'dog-image';
        img.src = dog;
        img.alt = 'A random dog';
        // img.style.width = " 300px";
        // img.style.height ='300px';
        // img.style.objectFit = 'cover'
        // img.style.padding = '20px'

        dogImageContainer.append(img);

    })
}

fetchRandomDogs();