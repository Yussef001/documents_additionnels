document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".zoomable");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
  
    let scale = 1; // Échelle initiale pour le zoom
  
    // Ouvrir la lightbox avec l'image sélectionnée
    images.forEach((image) => {
      image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
        scale = 1; // Réinitialiser le zoom
        lightboxImg.style.transform = `scale(${scale})`;
      });
    });
  
    // Fermer la lightbox
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    // Fermer la lightbox en cliquant à l'extérieur de l'image
    lightbox.addEventListener("click", (e) => {
      if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
      }
    });
  
    // Zoom avec la molette de la souris
    lightboxImg.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        scale += 0.1; // Zoom avant
      } else {
        scale = Math.max(1, scale - 0.1); // Zoom arrière (ne pas aller en dessous de 1)
      }
      lightboxImg.style.transform = `scale(${scale})`;
    });
  });
  