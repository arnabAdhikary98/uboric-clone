const mainHeader = document.querySelector('header')
const headerDiv = document.createElement('div')
headerDiv.setAttribute('id','header__div')


//left part of the header
const mainHeaderLeftDiv = document.createElement('div')
mainHeaderLeftDiv.setAttribute('id', 'main__header--left--div')


//middle part of the header
const mainHeaderMidDiv = document.createElement('div')
mainHeaderMidDiv.setAttribute('id', 'main__header--mid--div')

const mainHeaderMidSubDiv01 = document.createElement('div')
mainHeaderMidSubDiv01.setAttribute('id','main__header--mid--sub--div-01')

const mainHeaderMidSubDiv02= document.createElement('div')
mainHeaderMidSubDiv02.setAttribute('id','main__header--mid--sub--div-02')

const mainHeaderMidSubDiv03 = document.createElement('div')
mainHeaderMidSubDiv03.setAttribute('id','main__header--mid--sub--div-03')

const mainHeaderMidSubDiv04 = document.createElement('div')
mainHeaderMidSubDiv04.setAttribute('id','main__header--mid--sub--div-04')

const mainHeaderMidSubDiv05 = document.createElement('div')
mainHeaderMidSubDiv05.setAttribute('id','main__header--mid--sub--div-05')

const mainHeaderMidSubDiv06 = document.createElement('div')
mainHeaderMidSubDiv06.setAttribute('id','main__header--mid--sub--div-06')


//right part of the header
const mainHeaderRightDiv = document.createElement('div')
mainHeaderRightDiv.setAttribute('id', 'main__header--right--div')

const mainHeaderRightSubDiv01 = document.createElement('div')
mainHeaderRightSubDiv01.setAttribute('id','main__header--right--sub--div-01')

const mainHeaderRightSubDiv02 = document.createElement('div')
mainHeaderRightSubDiv02.setAttribute('id','main__header--right--sub--div-02')

const mainHeaderRightSubDiv03 = document.createElement('div')
mainHeaderMidSubDiv03.setAttribute('id','main__header--right--sub--div-03')

const mainHeaderRightSubDiv04 = document.createElement('div')
mainHeaderRightSubDiv04.setAttribute('id','main__header--right--sub--div-04')



// function to show header bar
function showHeaderLeft()
{
    const logo = document.createElement('a')
    const logoImage = document.createElement('img')
    logoImage.setAttribute('id','logo_image--header')
    logoImage.src = 'https://i.ibb.co/2ZzrpLC/logo.png'
    logoImage.innerHTML = 'https://www.uboric.in/'

    logo.append(logoImage)
    mainHeaderLeftDiv.append(logo)
    headerDiv.append(mainHeaderLeftDiv)
    mainHeader.append(headerDiv)
}
showHeaderLeft()

function showHeaderMid()
{
    let home = document.createElement('a');
    home.setAttribute('id', 'home')
    home.innerText = "Home";
    home.href = 'https://www.uboric.in/';

    let aboutUsHeader = document.createElement('a');
    aboutUsHeader.setAttribute('id', 'aboutUs__Header')
    aboutUsHeader.innerText = "About Us";
    aboutUsHeader.href = 'https://www.uboric.in/about-us/';

    let shop = document.createElement('a');
    shop.setAttribute('id', 'shop')
    shop.innerText = "Shop";
    shop.href = 'https://www.uboric.in/shop/';

    let theGlobalStore = document.createElement('a');
    theGlobalStore.setAttribute('id', 'the__global--store')
    theGlobalStore.innerText = "The Global Store";
    theGlobalStore.href = 'https://www.uboric.in/product-category/the-global-store/';

    let catagories = document.createElement('a');
    catagories.setAttribute('id', 'catagories')
    catagories.innerText = "Catagories";
    catagories.href = 'https://www.uboric.in/product-category/the-global-store/';

    let contactUsHeader = document.createElement('a');
    contactUsHeader.setAttribute('id', 'contactUs__header')
    contactUsHeader.innerText = "Contact Us";
    contactUsHeader.href = 'https://www.uboric.in/contact-us/';

    mainHeaderMidSubDiv01.append(home)
    mainHeaderMidSubDiv02.append(aboutUsHeader)
    mainHeaderMidSubDiv03.append(shop)
    mainHeaderMidSubDiv04.append(theGlobalStore)
    mainHeaderMidSubDiv05.append(catagories)
    mainHeaderMidSubDiv06.append(contactUsHeader)

    mainHeaderMidDiv.append(mainHeaderMidSubDiv01, mainHeaderMidSubDiv02, mainHeaderMidSubDiv03, mainHeaderMidSubDiv04, mainHeaderMidSubDiv05, mainHeaderMidSubDiv06)
    headerDiv.append(mainHeaderMidDiv)
    mainHeader.append(headerDiv)
}
showHeaderMid()

function showHeaderRight()
{
    let searchLogo = document.createElement('a')
    let searchLogoImage = document.createElement('img')
    searchLogoImage.setAttribute('id','search__logo-image')
    searchLogoImage.src = 'https://i.ibb.co/DC1HC7n/search.png'

    searchLogo.append(searchLogoImage)

    let profileLogo = document.createElement('a')
    let profileLogoImage = document.createElement('img')
    profileLogoImage.setAttribute('id','profile__logo-image')
    profileLogoImage.src = 'https://i.ibb.co/9rWXDzH/user.png'
    profileLogo.href = 'src/pages/login/login.html'

    profileLogo.append(profileLogoImage)

    let wishListLogo = document.createElement('a')
    let wishListLogoImage = document.createElement('img')
    wishListLogoImage.setAttribute('id','wishlist__logo-image')
    wishListLogoImage.src = 'https://i.ibb.co/qd8vy55/wish-list.png'
    wishListLogo.href = 'https://www.uboric.in/wishlist/'

    wishListLogo.append(wishListLogoImage)

    let cartLogo = document.createElement('a')
    let cartLogoImage = document.createElement('img')
    cartLogoImage.setAttribute('id','cart__logo-image')
    cartLogoImage.src = 'https://i.ibb.co/6gCTQqG/bag.png'

    cartLogo.append(cartLogoImage)

    mainHeaderRightSubDiv01.append(searchLogo)
    mainHeaderRightSubDiv02.append(profileLogo)
    mainHeaderRightSubDiv03.append(wishListLogo)
    mainHeaderRightSubDiv04.append(cartLogo)

    mainHeaderRightDiv.append(mainHeaderRightSubDiv01, mainHeaderRightSubDiv02, mainHeaderRightSubDiv03, mainHeaderRightSubDiv04)
    headerDiv.append(mainHeaderRightDiv)
    mainHeader.append(headerDiv)
}
showHeaderRight()