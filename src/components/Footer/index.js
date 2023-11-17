const mainFooter = document.querySelector('footer')


// Bottom top div container
const btmTopDiv = document.createElement('div')
btmTopDiv.setAttribute('id','btm__top--div')

const btmTopSubDiv01 = document.createElement('div')
btmTopSubDiv01.setAttribute('id','btm__top--sub--div-01')

const btmTopSubDiv02 = document.createElement('div')
btmTopSubDiv02.setAttribute('id','btm__top--sub--div-02')

const btmButton = document.createElement('button')
btmButton.setAttribute('id','subscribe__button')
btmButton.textContent = 'Subscribe'


// Bottom mid div container
const btmMidDiv = document.createElement('div')
btmMidDiv.setAttribute('id','btm__mid--div')

const btmMidSubDiv01 = document.createElement('div')
btmMidSubDiv01.setAttribute('id','btm__mid--sub--div-01')

const btmMidSubDiv02= document.createElement('div')
btmMidSubDiv02.setAttribute('id','btm__mid--sub--div-02')

const btmMidSubDiv03 = document.createElement('div')
btmMidSubDiv03.setAttribute('id','btm__mid--sub--div03')

const btmMidSubDiv04 = document.createElement('div')
btmMidSubDiv04.setAttribute('id','btm__mid--sub--div-04')

const btmMidSubDiv05 = document.createElement('div')
btmMidSubDiv05.setAttribute('id','btm__mid--sub--div-05')



// Bottom below div container
const btmBelowDiv = document.createElement('div')
btmBelowDiv.setAttribute('id','btm__below--div')

// below is the function for footer bar

function showFooterTop()
{
    const btmHeader = document.createElement('h3')
    btmHeader.setAttribute('id','btm_header')
    btmHeader.innerText = 'Want Style Ideas and Treats?'

    const searchBar = document.createElement('input')
    searchBar.setAttribute('id','search__bar')
    searchBar.type = 'search'
    searchBar.placeholder = 'Enter Email *'

    const subscribeButton = document.createElement('button')
    subscribeButton.type = 'button'
    subscribeButton.placeholder = 'Subscribe'

    btmTopSubDiv01.append(btmHeader, searchBar)
    btmTopSubDiv02.append(subscribeButton)

    btmTopDiv.append(btmTopSubDiv01, btmTopSubDiv02)

    mainFooter.append(btmTopDiv)
}
showFooterTop()

// Adding a click event listener to the button
btmButton.addEventListener('click',function(){
    alert('Thank You for Subscribing!')
})
btmTopDiv.appendChild(btmButton)
mainFooter.append(btmTopDiv)



function showFooterMid()
{
    const btmLogo = document.createElement('figure')
    const btmLogoImage = document.createElement('img')
    btmLogoImage.setAttribute('id','btm__logo--img')
    btmLogoImage.src = './assets/uboric.png'

    btmLogo.append(btmLogoImage)
    
    let support = document.createElement('h4');
    support.innerText = 'SUPPORT'

    let aboutUs = document.createElement('a');
    aboutUs.setAttribute('id', 'about__us')
    aboutUs.innerText = "About Us";
    aboutUs.href = 'https://www.uboric.in/about-us/';

    let contactUs = document.createElement('a');
    contactUs.setAttribute('id', 'contact__us')
    contactUs.innerText = "Contact Us";
    contactUs.href = 'https://www.uboric.in/contact-us/';



    let shop = document.createElement('h4');
    shop.innerText = 'SHOP'

    let myAccount = document.createElement('a');
    myAccount.setAttribute('id', 'my__account')
    myAccount.innerText = "My Account";
    myAccount.href = 'https://www.uboric.in/my-account/';



    let company = document.createElement('h4');
    company.innerText = 'COMPANY'

    let shipping = document.createElement('a');
    shipping.setAttribute('id', 'shipping')
    shipping.innerText = "Shipping & Returns";
    shipping.href = 'https://www.uboric.in/shipping-returns/';

    let policy = document.createElement('a');
    policy.setAttribute('id', 'policy')
    policy.innerText = "Privacy Policy";
    policy.href = 'https://www.uboric.in/privacy-policy/';

    let terms = document.createElement('a');
    terms.setAttribute('id', 'terms')
    terms.innerText = "Terms & Conditions";
    terms.href = 'https://www.uboric.in/terms-conditions/';



    let contact = document.createElement('h4');
    contact.innerText = 'CONTACT'

    let customerCare = document.createElement('h5');
    customerCare.innerText = "Customer Care";

    let careDetails = document.createElement('p');
    careDetails.innerText = "Contact Support Available \nMon To Sat : 10:00Am to 6:00Pm\nE-mail\nuboric@gmail.com\nMobile\n+91 97243 82162\n+91 82000 99386";



    btmMidSubDiv01.append(btmLogo)
    btmMidSubDiv02.append(support, aboutUs, contactUs)
    btmMidSubDiv03.append(shop, myAccount)
    btmMidSubDiv04.append(company, shipping, policy, terms)
    btmMidSubDiv05.append(contact,customerCare, careDetails)

    btmMidDiv.append(btmMidSubDiv01, btmMidSubDiv02, btmMidSubDiv03, btmMidSubDiv04, btmMidSubDiv05)

    mainFooter.append(btmMidDiv)


}
showFooterMid()

// function showFooterBottom{
//     const btmBelowTxt = document.createElement('p')
//     btmBelowTxt.innerText = '\u00A9 2019 - 2022 UBORIC. ALL RIGHTS RESERVED.'

//     btmBelowDiv.append(btmBelowTxt)
//     mainFooter.append(btmBelowDiv)
// }
// showFooterBottom()