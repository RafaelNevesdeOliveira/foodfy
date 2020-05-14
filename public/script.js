const modalOverlay = document.querySelector('.modal-overlay')
const images = document.querySelectorAll('.image')

for(let image of images){
    image.addEventListener("click", function(){
        const imageId = image.getAttribute('id');
        const titulo = image.querySelector("h5").innerHTML;
        const dono = image.querySelector("p").innerHTML;

        modalOverlay.classList.add('active');

        modalOverlay.querySelector('img').src=`assets/${imageId}`;
        modalOverlay.querySelector('h5').innerHTML=`${titulo}`;
        modalOverlay.querySelector('p').innerHTML=`${dono}`;
    
    })
}

document.querySelector(".close-modal").addEventListener("click",function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src=""
})

        
