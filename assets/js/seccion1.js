
  /*document.addEventListener("DOMContentLoaded", function () {
    const linterna = document.getElementById('linterna');
    const niebla = document.getElementById('niebla');
    const cursor = document.getElementById('cursor-img'); 
    // Bloquea scroll
    document.body.style.overflow = "hidden";

    // Movimiento de linterna
    document.addEventListener('mousemove', (e) => {
      linterna.style.setProperty('--x', e.clientX + 'px');
      linterna.style.setProperty('--y', e.clientY + 'px');
    });

    // DESPUÉS DE 7 segundos: aplicar clase "oculto" a niebla y linterna
    setTimeout(() => {
      niebla.classList.add('oculto');
      linterna.classList.add('oculto');

      // DESPUÉS DE 5 segundos más: ocultar niebla y mostrar cursor + habilitar scroll
      setTimeout(() => {
        niebla.style.display = 'none';
        if (cursor) {
          cursor.src = "./assets/multimedia/img/mano.png";
          cursor.style.width = "80px";
        }
        document.body.style.overflow = "auto";

        //✅ MOSTRAR EL MODAL DESPUÉS DE LA ANIMACIÓN DE NIEBLA
        
        // 🧠 Variable global para verificar si el modal ya fue cerrado
        window.modalBienvenidaYaCerrado = false;

  // Simula espera por animación (ajusta según tus necesidades)
  setTimeout(() => {
    setTimeout(() => {
      const modalElement = document.getElementById("modalFullscreen");
      if (modalElement) {
        const miModal = new bootstrap.Modal(modalElement);
        miModal.show();

        // 🎯 Forzar reproducción del video
        const video = document.getElementById("video-bienvenida");
        if (video) {
          video.play().catch(error => {
            console.warn("⚠️ No se pudo reproducir el video automáticamente:", error);
          });
        }

        // ⏱️ Cerrar automáticamente el modal en 6 segundos
        let tiempoRestante = 6;
        const intervalo = setInterval(() => {
          tiempoRestante--;
          console.log(`Cerrando en ${tiempoRestante} segundos...`);
          if (tiempoRestante <= 0) {
            miModal.hide();
            clearInterval(intervalo);
          }
        }, 1000);

        // ✅ Mover este bloque aquí para asegurar acceso a modalElement y video
        modalElement.addEventListener('hidden.bs.modal', () => {
          if (video) {
            video.pause();
            video.currentTime = 0; // Reinicia el video
          }

          // Marcar que el modal ya fue cerrado (variable global)
          window.modalBienvenidaYaCerrado = true;

          // 🔔 Emitir evento personalizado
          document.dispatchEvent(new CustomEvent('modalBienvenidaCerrado'));
        });
      }

    }, 5000); // <- Espera 5 segundos después de linterna
  }, 7000); // <- Primeros 7 segundos de animación
});*/

document.addEventListener("DOMContentLoaded", function () {
  const linterna = document.getElementById('linterna');
  const niebla = document.getElementById('niebla');
  const cursor = document.getElementById('cursor-img'); 

  // 🧠 Variable global para verificar si el modal ya fue cerrado
  window.modalBienvenidaYaCerrado = false;

  // 🔒 Bloquea scroll al inicio
  document.body.style.overflow = "hidden";

  // 💡 Movimiento de linterna
  document.addEventListener('mousemove', (e) => {
    linterna.style.setProperty('--x', e.clientX + 'px');
    linterna.style.setProperty('--y', e.clientY + 'px');
  });

  // 🕒 DESPUÉS DE 7 segundos: aplicar clase "oculto" a niebla y linterna
  setTimeout(() => {
    niebla.classList.add('oculto');
    linterna.classList.add('oculto');

    // 🕒 DESPUÉS DE 5 segundos más: ocultar niebla, mostrar cursor y habilitar scroll
    setTimeout(() => {
      niebla.style.display = 'none';
      
      if (cursor) {
        cursor.src = "./assets/multimedia/img/mano.webp";
        cursor.style.width = "80px";
      }

      document.body.style.overflow = "auto";

      // ✅ MOSTRAR EL MODAL DESPUÉS DE LA ANIMACIÓN DE NIEBLA
      const modalElement = document.getElementById("modalFullscreen");

      if (modalElement) {
        const miModal = new bootstrap.Modal(modalElement);
        miModal.show();

        const video = document.getElementById("video-bienvenida");

        if (video) {
          video.play().catch(error => {
            console.warn("⚠️ No se pudo reproducir el video automáticamente:", error);
          });
        }

        // ⏱️ Cerrar automáticamente el modal en 6 segundos
        let tiempoRestante = 6;
        const intervalo = setInterval(() => {
          tiempoRestante--;
          console.log(`Cerrando en ${tiempoRestante} segundos...`);
          if (tiempoRestante <= 0) {
            miModal.hide();
            clearInterval(intervalo);
          }
        }, 1000);

        // ❌ Detener video y emitir evento personalizado al cerrar el modal
        modalElement.addEventListener('hidden.bs.modal', () => {
          if (video) {
            video.pause();
            video.currentTime = 0; // Reinicia el video
          }

          // 🔔 Marca que el modal fue cerrado y lanza evento
          window.modalBienvenidaYaCerrado = true;
          document.dispatchEvent(new CustomEvent('modalBienvenidaCerrado'));
        });
      }

    }, 5000); // <- Espera 5 segundos después de ocultar linterna
  }, 7000); // <- Primeros 7 segundos de animación
});

