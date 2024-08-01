
// menampilkan banner auto slide
let currentIndex = 0;
const banners = document.querySelectorAll('.banner');
const totalBanners = banners.length;

function showNextBanner() {
    banners[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalBanners;
    banners[currentIndex].classList.add('active');
}

setInterval(showNextBanner, 3000);



// validasi form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    //hapus pesan eror
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('selectError').innerText = '';

    // value form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var select = document.getElementById('select').value;

    var isValid = true;
    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Please enter your name.';
        isValid = false;
    }

    if (email.trim() === '') {
        document.getElementById('emailError').innerText = 'Please enter your email.';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    if (select === '') {
        document.getElementById('selectError').innerText = 'Please select an option.';
        isValid = false;
    }

    if (isValid) {
        alert('Thank you for contacting us!');
    }
});

// valid email
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}