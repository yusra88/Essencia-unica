//carousel imagen quien somos
const images = [
  "imagenes/sectionabout.jpg",
  "imagenes/sectionabout1.jpg",
  "imagenes/sectionabout2.jpg",
];

let currentIndex = 0;

function loadSecImage() {
  const secImg = document.getElementById("img-sec2");

  secImg.src = images[currentIndex];
  currentIndex++;
console.log(currentIndex)
  if (currentIndex === images.length ) {
    currentIndex = 0;
  }

  setTimeout(loadSecImage, 1000);
}

loadSecImage();
 


//fonctionalidad por Btn-probar en la section 3
const btnProbar = document.querySelector('.btn-probar');

btnProbar.addEventListener('click', () => {
  window.location.href = '../html/formulario/formulario.html';
});

// //modal desceunto
window.addEventListener('load', function() {
  let modalContainer = document.querySelector('.modal-container');
  let closeButton = document.querySelector('.close-modal');

  function closeModal() {
    modalContainer.style.display = 'none';
  }

  modalContainer.addEventListener('click', function(eo) {
    if (eo.target === modalContainer) {
      closeModal();
    }
  });

  closeButton.addEventListener('click', closeModal);

  modalContainer.style.display = 'flex';
  
});



//desceunto
   // Récupérer l'élément span
   const countdown = document.querySelector('.contador');
   const endDate = new Date('2023-06-30T00:00:00Z');
   setInterval(() => {
   const diff = endDate - new Date();
   
     
     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
     const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((diff % (1000 * 60)) / 1000);
   
     
     countdown.textContent = `${days.toString().padStart(2, '0')} DAYS ${hours.toString().padStart(2, '0')} HR ${minutes.toString().padStart(2, '0')} MIN ${seconds.toString().padStart(2, '0')} SEC`;
   }, 1000);
   
//descargar imagenes section productos
const products = [
    {
      name: " Esencia del Unicornio ",
      descripcion:"Una fragancia mágica y etérea con notas de algodón de azúcar flores de cerezo y vainilla",
      price: "$99.99",
      image: "imagenes/product1.png"
    },
    {
      name: "Brisa de la Luna",
      descripcion : "Una fragancia nocturna y misteriosa con notas de jazmín, lirio de los valles y ámbar gris.",
      price: "$84.99",
      image: "imagenes/product2.png"
    },
    {
      name: " Aroma del Bosque Encantado",
      descripcion: "Una fragancia fresca y verde con notas de hojas de menta, hierba recién cortada y musgo.",
      price: "$79.99",
      image: "imagenes/product3.png"
    },
    {
      name: "Perfume del Cielo Estrellado",
      descripcion:"Una fragancia celestial y brillante con notas de bergamota, limón y estrellas fugaces",
      price: "$114.99",
      image: "imagenes/product4.png"
    },
    {
      name: "Esencia del Mar Profundo",
      descripcion:"Una fragancia salada y marina con notas de algas, sal marina y madera a la deriva.",
      price: "$89.99",
      image: "imagenes/product5.png"
    },
    {
      name: "Aroma del Jardín Secreto ",
      descripcion:"Una fragancia floral y enigmática con notas de rosa, jazmín y un toque de magia.",
      price: "$109.99",
      image: "imagenes/product6.png"
    }
  ];
  
  const productsSection = document.querySelector(".products-section");
  
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.style.backgroundColor="#fff"
    
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.style.width="60%"
    
    
    const name = document.createElement("h3");
    name.textContent = product.name;
    name.style.color ="#000";
  
    const descripcion = document.createElement("p");
    descripcion.classList.add("descripcion");
    descripcion.textContent = product.descripcion;
    descripcion.style.color ="#000";
  
    
    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = product.price;
    price.style.color = "red"
  
    const btnComprar = document.createElement("button");
    btnComprar.classList.add("btn","comprar");
    btnComprar.textContent= "+ Comprar";
    btnComprar.style.marginBottom="20%"
    
    productDiv.appendChild(image);
    productDiv.appendChild(name);
    productDiv.appendChild(descripcion)
    productDiv.appendChild(price);
    productDiv.appendChild(btnComprar);
  
    
    
    productsSection.appendChild(productDiv);
  });
  
  
  