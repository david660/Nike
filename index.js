function initAll() {
  let colors=document.querySelectorAll(".color-opt");

  let colorList=["red", "green", "blue", "black", "grey", "white", "yellow", "pink", "orange", "purple"];

  for (let i=0;i<colors.length;i++) {
    if(colors[i].classList[1]===colorList[i]){
      colors[i].style.backgroundColor=colorList[i];
    }
  }
}

function shoeArrange() {
  let shoeArr = ['react-metcon-mens-training-shoe-1G703V (1)', 'air-zoom-pegasus-36-trail-mens-trail-running-shoe-r48p3j', 'superrep-go-mens-training-shoe-19sK4X (1)', 'renew-run-mens-running-shoe-xdx3PD (1)', 'react-metcon-mens-training-shoe-1G703V', 'react-vision-womens-shoe-kGhsR6', 'air-vapormax-flyknit-3-mens-shoe-JsWsB7', 'air-max-270-mens-shoe-qVk0Vw', 'air-max-2090-mens-shoe-3pVM46', 'superrep-go-mens-training-shoe-19sK4X']

  let shoeDisplay = document.querySelector('.shoe-display')
  for (let i of shoeArr) {
    let shoeContainer = document.createElement('DIV')
    shoeContainer.className = 'shoe-container'

    let shoeImgContainer = document.createElement('DIV')
    shoeImgContainer.className = 'shoe-img-container'

    let shoeImage = document.createElement('IMG')
    shoeImage.className = 'shoe-image'
    shoeImage.src = `Nike wear\\\\${i}.jpg`
    shoeImage.alt = `shoes`

    shoeImgContainer.appendChild(shoeImage)

    let shoeWords = document.createElement('DIV')
    shoeWords.className = 'shoe-words'

    let showWord = document.createElement('DIV')
    showWord.className = 'show-word'

    let h4 = document.createElement('H4')
    h4.textContent = 'Fusion Sport'

    let p = document.createElement('P')
    p.textContent = 'The best of Nike at your foot as you like, a fussion of style, class and timelessness'

    showWord.appendChild(h4)
    showWord.appendChild(p)
    shoeWords.appendChild(showWord)

    let price = document.createElement('DIV')
    price.className = 'price'

    let money = document.createElement('DIV')
    money.className = 'money'
    money.textContent = '$150'
    let plus = document.createElement('DIV')
    plus.className = 'plus'
    plus.textContent = '+'

    price.appendChild(money)
    price.appendChild(plus)
    shoeWords.appendChild(price)

    let available = document.createElement('DIV')
    available.className = 'available'
    let word = document.createElement('P')
    word.textContent = 'Available'
    available.appendChild(word)
    
    shoeContainer.appendChild(shoeImgContainer)
    shoeContainer.appendChild(shoeWords)
    shoeContainer.appendChild(available)

    shoeDisplay.appendChild(shoeContainer)
  }
}
shoeArrange()

let burger = document.querySelector('.burger')
let navLinks = document.querySelector('.nav-bar-links')
console.log(navLinks)

burger.addEventListener('click', ()=>{
  navLinks.classList.toggle('active')
  burger.classList.toggle('toggle')
})



function toggleDisplay () {
  //pages
  let body=document.querySelector(".body");
  let login_page=document.querySelector(".login-page");
  let signup_page=document.querySelector(".signup-page");
  let product=document.querySelector(".product");

  //links
  const home=document.querySelector(".home");
  const login_bt=document.querySelector("#login");
  const sign_up=document.querySelector("#sign-up");
  const latest=document.querySelector(".latest-product");

  let pages=[body, login_page, signup_page, product];
  let links=[home, login_bt, sign_up, latest];

    

  for (let i=0;i<links.length;i++) {
    links[i].addEventListener("click", ()=>{
      (function(index) {
        links[index].onclick=function() {
          [].forEach.call(pages,function(el, i){
            el.style.display= i === index ? "flex" : "none";
          });
        }
      }(i));
    })
  }
}


initAll();
toggleDisplay();