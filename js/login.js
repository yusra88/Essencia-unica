//fecha 
function afficherDate() {
    let maintenant = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let fecha = maintenant.toLocaleDateString('es-ES', options);
    let hora = maintenant.toLocaleTimeString();
    document.getElementById("date").innerHTML = "Estamos en " + fecha + " y es " + hora;
  }
  // Appel de la fonction toutes les secondes
  setInterval(afficherDate, 1000);



const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector('.login-link');

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-eye-slash", "fa-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-eye", "fa-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

    /*validador contraseña login*/
    let usuarios = [{ correo: "yousra.rhazouali@estudioenpenascal.com", contrasena: 1234567, nombre: "yousra rhazouali"},
    { correo: "sara.rhazouali@estudioenpenascal.com", contrasena: "sara123", nombre: "sara rhazouali"}];
    const loginButton = document.querySelector('.login-btn');
    const signUpButton =document.querySelector('.signup-btn');
    const checkBox = document.querySelector('#termCon');
    // let correos =document.querySelector('.correo').value;
    // let password = document.querySelector('.password').value;

// Ajout de l'événement 'click' sur le bouton de connexion
    loginButton.addEventListener('click', validar)
     function validar() {
  let correo = document.querySelector('.correo').value;
  let contrasena = document.querySelector('.password').value;
  
  // Vérifier si l'utilisateur est déjà enregistré
  let usuario = usuarios.find(u => u.correo === correo && u.contrasena.toString()  === contrasena);
  
  if(usuario) {
    alert(`Bienvenue ${usuario.nombre}!`);
    location.href='../index.html';
    // Stocker les données de l'utilisateur dans le local storage
    localStorage.setItem('usuario', JSON.stringify(usuario)); 
  } else {
    alert("Vous n'êtes pas enregistré. Veuillez vous inscrire.");
    // Activer l'élément d'inscription
    document.querySelector('.container').classList.add('active');
  }
}
//registrar 
 signUpButton.addEventListener('click', registrar)
 function registrar() {
       if (checkBox.checked) {
     let nombre = document.querySelector('.nombre').value;
     let correo = document.querySelector('.correo').value;
     let contrasena = document.querySelector('.password').value;
       
    
    if(nombre && correo && contrasena) {
       let usuario = {nombre, correo, contrasena};
//       // Stocker les données de l'utilisateur dans le local storage
       localStorage.setItem('usuario', JSON.stringify(usuario)); 
//        // Ajouter les nouvelles données utilisateur à la liste 'usuarios'
     usuarios.push(usuario);
//       // Activer l'élément de connexion
    document.querySelector('.container').classList.remove('active');
      
    } else {
      alert("Veuillez remplir tous les champs.");
     }
  } else {
    alert("Veuillez accepter les termes et conditions pour vous inscrire.");
}
};

