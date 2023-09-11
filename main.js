
let liAS = document.querySelectorAll("ul li a"); 

liAS.forEach((a) => {
    a.addEventListener("click", (e) => {
        liAS.forEach((a) => {
            a.classList.remove('active');

        })
        e.currentTarget.classList.add("active");
    })
});

let lis = document.querySelectorAll("ul li"); 

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        lis.forEach((li) => {
            li.classList.remove('active');

        })
        e.currentTarget.classList.add("active");
    })
});

ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1100,
    delay: 200,
    

    });

ScrollReveal().reveal('.text h2, .srv-box, .main-heading, .box, .prog, .plan , .info', {origin: 'top' });
ScrollReveal().reveal('.text p, i,.text h3, .main-heading h2, .box, .prog-holder, .plan , .phone, address , .main-input', {origin: 'left' });
ScrollReveal().reveal('.content, .image, .text p ,.box p , .head , .social-icons , .subscribe', {origin: 'bottom' });
ScrollReveal().reveal('i,.imagge,.info a , .main-heading p, .shuffle ,.copyright , .subscribe p , .foot' , { origin: 'top'});
