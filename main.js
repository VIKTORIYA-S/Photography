const hearts = document.querySelectorAll('.heart');
// const heartRed = document.querySelectorAll('.heart-red');
const downloads = document.querySelectorAll('.download');




hearts.forEach((heart) => {
  heart.addEventListener('mouseenter', () => {
    heart.src = 'img/heart-red.png';
    heart.style.borderRadius = '50%';
  });

  heart.addEventListener('mouseleave', () => {
    heart.src = 'img/heart.png';
    heart.style.borderRadius = '0';
  });
});

downloads.forEach((download) => {
  download.addEventListener('mouseenter', () => {
    download.src = 'img/download-red.png';
  });

  download.addEventListener('mouseleave', () => {
    download.src = 'img/download.png';
  });
});


hearts.forEach((heart) => {
  heart.addEventListener('click', () => {
    heart.src = 'img/heart-red.png';
  });
});






