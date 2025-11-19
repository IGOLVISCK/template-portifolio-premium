document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os elementos que queremos animar
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Distância do topo para ativar

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            } else {
                // Opcional: remover a classe se quiser que a animação repita ao subir
                // element.classList.remove("active"); 
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    
    // Chama uma vez para verificar elementos já visíveis no carregamento
    revealOnScroll();
});