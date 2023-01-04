const nature = document.querySelector('#image_nature');
const button = document.querySelector('#button')
button.addEventListener('click', getRandomNatureImage);

function getRandomNatureImage() {
  fetch(`https://api.unsplash.com/photos/random?query=nature&client_id=DpJA8PLbeui9BOu_AazPS6QEg4115ZfhN1AhHTcb9j0`)
    .then(response => response.json())
    .then(data => {
      nature.src = data.urls.regular
      nature.style.height = '80vh';
      nature.style.width = '190vh';
    });
}


