function construtInformativesTop(json) {
  const $wrapper = document.querySelector(".header__informatives-wrapper")
  for (completeText of json) {
    $wrapper.innerHTML += `
        <span class="header__informatives-top--text${
          completeText.firstBold ? "-strong" : ""
        }"> ${completeText.text}
            <span class="header__informatives-top--text${
              completeText.firstBold === false ? "-strong" : "-margin"
            }">
            ${completeText.bold}
            </span>
        </span>
      
        `
  }
}

function informativesTop() {
  fetch("../../src/mocks/INFORMATIVES_TOP.json")
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      construtInformativesTop(json)
    })
}

function requestMenu() {
  fetch("../../src/mocks/MENU.json")
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      const sizeWindow = window.innerWidth

      if(sizeWindow >= 1024){
        constructMenuDesktop(json.menu)        
      } else {
        constructMenuMobile(json.menu)
      }
    })
}

function constructMenuDesktop(json) {
  let structureMenu = ""
  
  const $containerMenu = document.querySelector('.header__menu')

  for(const menu of json){
    structureMenu += `<div class="header__menu-wrapper">
        <a href=${menu.url} class="header__menu-department">${menu.name}</a>
        ${
          menu.children 
          ? `
          <div class="header__menu-items ${
            menu.name === "Turmalina" ? "turmalina" : "",
            menu.name === "Outros" ? "others" : ""
        }">
          ${menu.children.map(function (child){
            return `
            <div class="header__menu-wrapper-category">
            <a href=${child.url} class="header__menu-category">
              ${child.name}
              </a>
                ${child.children  ? `
                <div class="header__menu-sub-category">
                  ${child.children.map(function(subChild){
                    return `
                      <a href=${subChild.url} class="header__menu-category">
                        ${subChild.name}
                      </a>
                    `
                  }).join('')}
                </div>
                ` : ``}
            </div>
            `
          }).join('')}
          </div>
          `
          : ""
        } 
        </div>    
    `
  }

  $containerMenu.innerHTML = structureMenu

}

function handleMenuMobileCategory(){
  const $departments = document.querySelectorAll('.header__menu-mobile-with-child')    


  $departments.forEach(function ($department){
    const $iconClick = $department.querySelector('.iconArrow')
    const $category = $department.querySelector('.header__menu-mobile-items')


    $iconClick.addEventListener('click', function ($icon){
      $category.classList.toggle('active')
    })
  })


  



}

function constructMenuMobile(json){
  let structureMenu = ""
  const $containerMenu = document.querySelector('.header__menu-mobile-wrapper-list')

  json.map(function (menu){
    structureMenu += `
      <div class="header__menu-mobile-wrapper ${menu.children ? "header__menu-mobile-with-child" : ""} header__menu-mobile">
        <div class="header__menu-mobile-wrapper-department">
          <a
          
            class="header__menu-department header__menu-mobile-department"
          >
            ${menu.name}
          </a>          
          <span class="iconArrow header__menu-mobile-icon-arrow">
            <img src="./assets/arrow.png">
          </span>
        </div>
        ${
          menu.children 
          ? `
            <div class="header__menu-mobile-items">
              ${menu.children.map(function(child){
                return `
                  <div class="header__menu-wrapper">
                    <a href=${child.url}>${child.name}</a>
                  </div> 
              
                `
              }).join('')}
            </div>            
          ` : ``
        }
      </div>
    ` 
    
  })
  
  $containerMenu.innerHTML = structureMenu
  handleMenuMobileCategory()
}

informativesTop()
requestMenu()


function handleToogleMenu(){
  const $menuMobile = document.querySelector('.header__menu-hamburger')
  const $structureMenuMob = document.querySelector('.header__menu-wrapper-mobile')
  const $closeMenuMob = document.querySelector('.header__menu-mobile-wrapper-img')
  

  $menuMobile.addEventListener('click', function(){
    $structureMenuMob.classList.add('active')
  })

  $closeMenuMob.addEventListener('click', function(){
    $structureMenuMob.classList.remove('active')
  })

  

}

handleToogleMenu()


function slickShelf(){
  $('.shelf').slick({    
    infinity: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4 
});
}

function slickArrow(){
  $prev = document.querySelectorAll('.slick-prev')
  $next = document.querySelectorAll('.slick-next')

  for (const prev of $prev){
      prev.innerHTML = '<img src="../src/assets/slick-arrow.png">'
  }

  for(const next of $next){
      next.innerHTML = '<img src="../src/assets/slick-arrow.png">'
  }
}

function slickShelf2(){
  $('.shelf-2').slick({    
    infinity: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4 
});
}

function slickShelf3(){
  $('.shelf-mini').slick({    
    infinity: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 2 
});
}

function slickArrow2(){
  $prev = document.querySelectorAll('.slick-prev')
  $next = document.querySelectorAll('.slick-next')

  for (const prev of $prev){
      prev.innerHTML = '<img src="../src/assets/slick-arrow.png">'
  }

  for(const next of $next){
      next.innerHTML = '<img src="../src/assets/slick-arrow.png">'
  }
}

function slickArrow3(){
  $prev = document.querySelectorAll('.slick-prev')
  $next = document.querySelectorAll('.slick-next')

  for (const prev of $prev){
      prev.innerHTML = '<img src="../src/assets/slick-arrow.png">'
  }

  for(const next of $next){
      next.innerHTML = '<img src="../src/assets/slick-arrow.png">'
  }
}

function constructShelf(products){
  const $containerShelf = document.querySelector('.shelf')

  products.map(function(product){
    const image = document.createElement('img')
    const seal = document.createElement('div')
    const name = document.createElement('h2')
    const price = document.createElement('span')
    const containerProduct = document.createElement('div')
    const button = document.createElement('button')
    const installment = document.createElement('span')

    image.src = product.image
    image.classList.add('shelf__image')
    image.alt = product.title

    seal.textContent = product.category
    seal.classList.add('shelf__seal')

    name.textContent = product.title
    name.classList.add('shelf__name')

    price.textContent = Intl.NumberFormat('pt-BR', {
      style:'currency',
      currency: 'BRL',      
    }).format(product.price)
    price.classList.add('shelf__price')

    containerProduct.classList.add('shelf__product')     

    button.textContent = 'Comprar'
    button.classList.add('shelf__button')
    installment.textContent = 'Compre em até 8x sem juros'
    installment.classList.add('shelf__installment')

    containerProduct.appendChild(image)
    containerProduct.appendChild(seal)
    containerProduct.appendChild(name)
    containerProduct.appendChild(price)
    containerProduct.appendChild(installment)
    containerProduct.appendChild(button)

    $containerShelf.appendChild(containerProduct)

  })
  slickShelf()
  slickArrow()
}

function constructShelf2(products){
  const $containerShelf = document.querySelector('.shelf-2')

  products.map(function(product){
    const image = document.createElement('img')
    const seal = document.createElement('div')
    const name = document.createElement('h2')
    const price = document.createElement('span')
    const containerProduct = document.createElement('div')
    const button = document.createElement('button')
    const installment = document.createElement('span')

    image.src = product.image
    image.classList.add('shelf__image')
    image.alt = product.title

    seal.textContent = product.category
    seal.classList.add('shelf__seal')

    name.textContent = product.title
    name.classList.add('shelf__name')

    price.textContent = Intl.NumberFormat('pt-BR', {
      style:'currency',
      currency: 'BRL',      
    }).format(product.price)
    price.classList.add('shelf__price')

    containerProduct.classList.add('shelf__product')     

    button.textContent = 'Comprar'
    button.classList.add('shelf__button')
    installment.textContent = 'Compre em até 8x sem juros'
    installment.classList.add('shelf__installment')

    containerProduct.appendChild(image)
    containerProduct.appendChild(seal)
    containerProduct.appendChild(name)
    containerProduct.appendChild(price)
    containerProduct.appendChild(installment)
    containerProduct.appendChild(button)

    $containerShelf.appendChild(containerProduct)

  })
  slickShelf2()
  slickArrow2()
}

function constructShelf3(products){
  const $containerShelf = document.querySelector('.shelf-mini')

  products.map(function(product){
    const image = document.createElement('img')
    const seal = document.createElement('div')
    const name = document.createElement('h2')
    const price = document.createElement('span')
    const containerProduct = document.createElement('div')
    const button = document.createElement('button')
    const installment = document.createElement('span')

    image.src = product.image
    image.classList.add('shelf__image')
    image.alt = product.title

    seal.textContent = product.category
    seal.classList.add('shelf__seal')

    name.textContent = product.title
    name.classList.add('shelf__name')

    price.textContent = Intl.NumberFormat('pt-BR', {
      style:'currency',
      currency: 'BRL',      
    }).format(product.price)
    price.classList.add('shelf__price')

    containerProduct.classList.add('shelf__product')     

    button.textContent = 'Comprar'
    button.classList.add('shelf__button')
    installment.textContent = 'Compre em até 8x sem juros'
    installment.classList.add('shelf__installment')

    containerProduct.appendChild(image)
    containerProduct.appendChild(seal)
    containerProduct.appendChild(name)
    containerProduct.appendChild(price)
    containerProduct.appendChild(installment)
    containerProduct.appendChild(button)

    $containerShelf.appendChild(containerProduct)

  })
  slickShelf3()
  slickArrow3()
}


function requestProducts(){
  fetch('https://fakestoreapi.com/products').then(function (response){
    return response.json()
  }).then( function (json){
    constructShelf(json)
  })
}

function requestProducts2(){
  fetch('https://fakestoreapi.com/products').then(function (response){
    return response.json()
  }).then( function (json){
    constructShelf2(json)
  })
}

function requestProducts3(){
  fetch('https://fakestoreapi.com/products').then(function (response){
    return response.json()
  }).then( function (json){
    constructShelf3(json)
  })
}


requestProducts()
requestProducts2()
requestProducts3()

function constructInstaFeed(photos){
  const $container = document.querySelector('.insta-feed')
  photos.map((photos) => {
    if(photos.mediaType == "IMAGE" || photos.mediaType == "CAROUSEL_ALBUM"){
    const img = document.createElement('img')
    img.src = photos.mediaUrl
    img.classList.add('image-insta')
    $container.appendChild(img)
    }else if(photos.mediaType == "VIDEO"){
      const video = document.createElement('video')
      video.src = photos.mediaUrl
      video.autoplay = true
      video.loop = true
      video.muted = true
      video.classList.add('image-insta')
      $container.appendChild(video)
      
    }
  })
}


function instaFeef(){
  fetch('https://feeds.behold.so/uHXGsoBk6oK3qHgZkOFh')
  .then(data => data.json())
  .then(photos => {
    constructInstaFeed(photos)
  });
}

instaFeef()

function toogleMenuFooter(){
  $activeFooter = document.querySelectorAll('.footer-menu__category')

  const sizeWindow = window.innerWidth

  if(sizeWindow >= 1024) return

  $activeFooter.forEach(function ($item){
    $item.addEventListener('click', function(){
      $item.classList.toggle('active')
    })
  })
}

toogleMenuFooter()

function slickInfoBanner2(){
  const windowWidth = window.innerWidth
  console.log(windowWidth)
  if(windowWidth > 768){
    $('.footer-banner').slick({
        slidesToShow: 4,
        dots: false,
        arrows: false,            
    })
  }else {
    $('.footer-banner').slick({
      slidesToShow: 1,
      dots: false,
      arrows: true,            
  })

  }
}

slickInfoBanner2()