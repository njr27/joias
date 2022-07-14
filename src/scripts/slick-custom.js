$('.main-banner__container').slick({
    infinity: true,
    dots: true,
});

$('.content__showcase').slick({
    infinity: true,
    dots: true,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 7
});

$('.article__img').slick({    
    infinity: true,
    dots: true,
});


$prev = document.querySelectorAll('.slick-prev')
$next = document.querySelectorAll('.slick-next')

for (const prev of $prev){
    prev.innerHTML = '<img src="../src/assets/slick-arrow.png">'
}

for(const next of $next){
    next.innerHTML = '<img src="../src/assets/slick-arrow.png">'
}


