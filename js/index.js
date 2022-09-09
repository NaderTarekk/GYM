// Show Menu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// Menu Show 
navToggle.addEventListener('click', () => {
    navMenu.classList.add("show-menu");
})

//Menu Hidden
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
})

//Remove Menu On Click any link 
const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove('show-menu');
    })
})

const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);


// Calculate
const calculateForm = document.getElementById("calculate-form"),
    calculateCm = document.getElementById("calculate-cm"),
    calculateKg = document.getElementById("calculate-kg"),
    calculateMessage = document.getElementById("calculate-message");


const calculateBmi = (e) => {
    e.preventDefault()

    //check if a fields have a value
    if (calculateCm.value === '' || calculateKg.value === '') {
        //add and remove color
        calculateMessage.classList.remove('green-color');
        calculateMessage.classList.add('red-color');

        //show message
        calculateMessage.textContent = 'Fill in the height and weight 🤷‍♂️'// window + .

        //remove message after three seconds
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 3000)
    }

    else {
        //fomula
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))

        // show your health status
        if (bmi < 18.5) {
            // add color and display message
            calculateMessage.classList.add("yellow-color");
            calculateMessage.textContent = `your BMI is ${bmi} and you are skinny 😔`
        } else if (bmi < 25) {
            // add color and display message
            calculateMessage.classList.add("green-color");
            calculateMessage.textContent = `your BMI is ${bmi} and you are healthy 🥳`
        } else {
            // add color and display message
            calculateMessage.classList.add("red-color");
            calculateMessage.textContent = `your BMI is ${bmi} and you are overweight 😔`
        }

        // to clear the input field
        calculateCm.value = ''
        calculateKg.value = ''

        // remove message after 4 seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)
    }
}

calculateForm.addEventListener("submit", calculateBmi)

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY  = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// FOOTER EMAIL
const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message"),
    contactUser = document.getElementById("contact-user");

const sendEmail = (e) => {
    e.preventDefault()// de 34an el sf7a mt3ml4 reload

    //check if the field has a value
    if (contactUser.value === '') {
        //Add and remove color
        contactMessage.classList.remove('green-color');
        contactMessage.classList.add('red-color');

        //show message
        contactMessage.textContent = ' You must enter your email 🙁'

        //remove message after three second
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 3000)
    }
    else {
        // servicesID - templateID - #form - publickey
        emailjs.sendForm('service_ebzmisj', 'template_fsbpnhl', '#contact-form', 'Kj7MdIk0toh2pFeEq')
            .then(() => {
                //show message and add color
                contactMessage.classList.add('green-color')
                contactMessage.textContent = 'You registered successfully ✔';
                //remove message after three second
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 3000)

            }, (error) => {
                //Mail sending error
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })

        //to clear input field
        setTimeout(() => {
            contactUser.value = '';
        }, 4000)
    }

}
contactForm.addEventListener("submit", sendEmail);


// Scrollup
window.addEventListener('scroll', () => {
    const up = document.getElementById('scroll-up');
    if (scrollY >= 350) {
        up.classList.add('show-scroll');
    }
    else {
        up.classList.remove('show-scroll');
    }
});