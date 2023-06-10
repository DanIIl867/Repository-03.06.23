const images = document.querySelectorAll('img');

const option = {
   rootMargin: '150px'
}

const io = new IntersectionObserver((entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         const image = entry.target;
         const imgUrl = entry.target.dataset.lazy;

         image.src = imgUrl
         image.classList.add('appear')

         observer.unobserve(image);
      }

   })
}, option);

// io.observe(images)
images.forEach(image => io.observe(image))