//annimation logo brand 

const image = document.querySelector('#brand');

let angle = 0;
setInterval(() => {
 angle += 1;
 image.style.transform = `rotate(${angle}deg)`;
}, 10);
afficherProduitAleatoire();

// function afficherProduitAleatoire() {
//     setTimeout(() => {
//       const index = Math.floor(Math.random() * products.length);
//       const produit = products[index];
//       const produitHTML = `
//         <div class="product">
//           <img src="${produit.image}" alt="${produit.name}">
//           <h3>${produit.name}</h3>
//           <p>${produit.descripcion}</p>
//           <span class="price">${produit.price}</span>
//           <button>Ajouter au panier</button>
//         </div>
//       `;
      
//     }, 5000);
//   }