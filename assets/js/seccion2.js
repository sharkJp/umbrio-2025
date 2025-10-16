
 //.........................................................................................seccion 2
  // Código del Slider de la Sección 2 (con pergamino)
  const slides = document.querySelectorAll(".slide");
  const prevBtnSlider = document.querySelector(".contenedor-slider .prev-secc2");
  const nextBtnSlider = document.querySelector(".contenedor-slider .next-secc2");

  const papiroContainer = document.querySelector(".papiro-container");
  const textoPapiro = document.getElementById("texto-papiro");

  const textos = [
    `<h2>Catedral</h2> <p>La Catedral Basílica Metropolitana Santiago de Tunja, ubicada en la Plaza de Bolívar, es una de las catedrales más antiguas de Latinoamérica y de Colombia. Su construcción inició en 1562 y finalizó en 1607.</p>`,
    `<h2>Catedral</h2> <p>Ha sido un lugar central de culto y testigo de la evolución de la región a lo largo de los siglos. La catedral refleja las profundas tradiciones católicas que han dado forma a la comunidad y sigue siendo un sitio clave tanto para ceremonias religiosas como para el patrimonio cultural.</p>`,
    `<h2>Plaza Simón Bolívar</h2> <p> Es la segunda más grande de Colombia después de la de Villa de Leyva, está rodeada por importantes edificios coloniales.</p>`,
    `<h2>El Pozo de Donato</h2> <p>El Pozo de Donato, también conocido como Pozo de Hunzahúa, es un lugar histórico cargado de leyendas...</p>`,
    `<h2>San Agustín</h2> <p>Este claustro de modelo sevillano fue terminado a principios del siglo XVII, edificado sobre las ruinas del cercado del Zaque Muisca Quemuenchatocha.</p>`,
    `<h2>San Agustín</h2> <p>Además de convento agustino, el claustro fue escuela, hospital de San Juan de Dios, cárcel de máxima seguridad para hombres y mujeres por un siglo, conocida como “El Panóptico”, con una famosa celda de castigo, El Solitario, y aparición propia, el Espanto del Panóptico.</p>`,
    `<h2>Cojines del Zaque</h2> <p>Las colinas de Tunja eran utilizadas por los muiscas como sitios de adoración al Sol y a la Luna. Debido a ello, se cree que los dos círculos de roca, que miden aproximadamente un metro de diámetro y se encuentran en el Parque Arqueológico los Cojines del Zaque, eran plataformas para adorar a los dioses muiscas.</p>`,
    `<h2>Cojines del Zaque</h2> <p>Este sitio arqueológico se encuentra al suroccidente de la ciudad de Tunja.</p>`,
    `<h2>San Francisco</h2> <p>Sus orígenes datan de la segunda mitad del siglo XVI no acabándose construir hasta bien entrado el siglo XVII. Sus más de cuatrocientos años de historia han supuesto una serie de avatares hasta alcanzar el momento actual.</p>`,
    `<h2>San Francisco</h2> <p>La iglesia y convento bajo la advocación de Santa María Magdalena pertenece a la Orden Franciscana OFM y está ubicado en el centro histórico de Tunja, en su sector más septentrional sobre la cárcava de San Francisco a la cual da nombre el convento.</p>`,
    `<h2>Biblioteca</h2> <p></p>`
  
  ];

  let currentIndex = 0;

  // Función para mostrar slide y texto
  const papiroCentro = document.querySelector(".papiro-centro");
  const extremoIzq = document.querySelector(".papiro-izquierdo");
  const extremoDer = document.querySelector(".papiro-derecho");

  function abrirCerrarPapiro(abierto) {
    if (abierto) {
      papiroCentro.style.transform = "scaleX(1)";
      extremoIzq.style.transform = "translateX(0)";
      extremoDer.style.transform = "translateX(0)";
    } else {
      papiroCentro.style.transform = "scaleX(0)";
      const anchoCentro = papiroCentro.offsetWidth / 2;
      extremoIzq.style.transform = `translateX(${anchoCentro}px)`;
      extremoDer.style.transform = `translateX(-${anchoCentro}px)`;
    }
  }

  /*function showSlide(index) {
    slides.forEach(
      (slide, i) => (slide.style.display = i === index ? "block" : "none")
    );

    // Cerrar pergamino
    abrirCerrarPapiro(false);

    setTimeout(() => {
      textoPapiro.innerHTML = textos[index]; // cambia contenido
      abrirCerrarPapiro(true); // abrir pergamino y volver extremos a borde
    }, 600);
  }*/

    function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  const currentSlide = slides[currentIndex];
  const nextSlide = slides[index];

  if (currentSlide === nextSlide) return;

  // Obtener las imágenes
  const currentImg = currentSlide.querySelector("img");
  const nextImg = nextSlide.querySelector("img");

  // Cerrar pergamino
  abrirCerrarPapiro(false);

  // Animación de salida solo en la imagen actual
  currentImg.classList.remove("fade-in");
  currentImg.classList.add("out");

  setTimeout(() => {
    // Ocultar slide completo
    currentSlide.style.display = "none";
    currentImg.classList.remove("out");

    // Mostrar siguiente slide
    nextSlide.style.display = "block";
    nextImg.classList.add("fade-in");

    // Actualizar pergamino
    textoPapiro.innerHTML = textos[index];
    abrirCerrarPapiro(true);

    // Actualizar índice
    currentIndex = index;
  },
  1000);
}

// Mostrar el primer slide con texto y animación
slides[currentIndex].style.display = "block";
slides[currentIndex].classList.add("fade-in");
textoPapiro.innerHTML = textos[currentIndex];
abrirCerrarPapiro(true);

// Botones
prevBtnSlider.addEventListener("click", () => {
  showSlide(currentIndex -1);
});

nextBtnSlider.addEventListener("click", () => {
  showSlide(currentIndex +1);
});

 /*prevBtnSlider.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtnSlider.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  // Mostrar el primero al cargar
  showSlide(currentIndex); */
