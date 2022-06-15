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

function requestMenuDesktop() {
  fetch("../../src/mocks/MENU.json")
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      constructMenuDesktop(json.menu)
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
          <div class="header__menu-items ${menu.name === "Turmalina" ? "turmalina" : ""}">
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

informativesTop()
requestMenuDesktop()


function handleToogleMenu(){
  const $menuMobile = document.querySelector('.header__menu-hamburger')
  const $structureMenuMob = document.querySelector('.header__menu-wrapper-mobile')
  const $closeMenuMob = document.querySelector('.header__menu-mobile-wrapper-img')
  const $arrowSubmenu = document.querySelector('.arrow-submenu')
  const $structureSubmenu = document.querySelector('.header__menu-mobile-subdepartment-wrapper')
  const $arrowSubmenuList = document.querySelector('.header__menu-mobile-subdepartment--img')
  const $structureSubmenuList = document.querySelector('.header__menu-mobile-subdepartment-list')


  $menuMobile.addEventListener('click', function(){
    $structureMenuMob.classList.add('active')
  })

  $closeMenuMob.addEventListener('click', function(){
    $structureMenuMob.classList.remove('active')
  })

  $arrowSubmenu.addEventListener('click', function(){
    $structureSubmenu.classList.toggle('active')
    $arrowSubmenu.classList.toggle('active')
  })

  $arrowSubmenuList.addEventListener('click', function(){
    $arrowSubmenuList.classList.toggle('active')
    $structureSubmenuList.classList.toggle('active')
  })

}

handleToogleMenu()