let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

//alert("Welcome to CHoC Official Website")
  Swal.fire({
    title: 'Welcome to the CHOCARE official WebSite',
    width: 600,
    padding: '3rem',
    color: 'orange',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("images/logo.ico")
      center top
      no-repeat
    `
  })
