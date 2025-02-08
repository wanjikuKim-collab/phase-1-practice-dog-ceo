const dogImageContainer = document.getElementById('dog-image-container');
const dogBreeds = document.getElementById('dog-breeds') ;

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
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(breeds => addDogBreeds(breeds.message))
}

function displayDogImages(dogs){
    dogs.map(dog=>{
        console.log(dog);
        let img = document.createElement('img');
        img.className = 'dog-image';
        img.src = dog;
        img.alt = 'A random dog';
        dogImageContainer.append(img);
    })
}

function addDogBreeds(breeds){
   for(const breed in breeds){
    console.log(breed)
    let li = document.createElement('li');
    li.textContent = breed;

    li.addEventListener('click',()=> li.style.color = "cyan" )

    dogBreeds.appendChild(li);
   }
}

fetchDogBreed()
fetchRandomDogs();