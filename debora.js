// Pega o elemento do menu
const navbar = document.getElementById("menu-principal");
// Pega a posição inicial do menu
const sticky = navbar.offsetTop;

function stickyMenu() {

    // Se a rolagem da página for maior que a posição inicial do menu
    if (window.pageYOffset >= sticky) {
        // Adiciona a classe 'sticky' (que o CSS define como fixo)
        navbar.classList.add("sticky");
    } else {
        // Remove a classe 'sticky' (volta a ser estático)
        navbar.classList.remove("sticky");
    }

// Escuta o evento de rolagem (scroll) e executa a função 'stickyMenu'
window.onscroll = function() {
    stickyMenu();
};
// Pega o elemento do menu
const navbar = document.getElementById("menu-principal");

// Pega a posição vertical do menu
const stickyPoint = navbar.offsetTop;

function checkStickyMenu() {
    // Se o usuário rolou para baixo o suficiente
    if (window.pageYOffset >= stickyPoint) {
        // Adiciona a classe que o fixa no topo
        navbar.classList.add("sticky");
    } else {
        // Remove a classe  
        navbar.classList.remove("sticky");
         
    }
}

// Escuta o evento de rolagem (scroll)
window.onscroll = function() {
    checkStickyMenu();
}

}