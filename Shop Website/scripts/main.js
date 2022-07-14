// Tooltips of BS5
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// MOBOLE-SLIDE
let img = document.querySelectorAll(".mobile-img");
let bigImg = document.querySelector(".big-mobile-img");

img.forEach((item) => {
    item.addEventListener("click", () => {
        bigImg.src = item.getAttribute("src");
    });
});

// GALLERY-MODAL
let gallleryImg = document.querySelectorAll(".gallery-img");
let modalImg = document.querySelector(".modal-img");

gallleryImg.forEach((item) => {
    item.addEventListener("click", () => {
        modalImg.src = item.getAttribute("src");
        var myModal = new bootstrap.Modal(document.getElementById("myModal"));
        myModal.show();
    });
});

// OWLCAROUSL SLIDER
$(document).ready(function () {
    $(".owl-1").owlCarousel({
        loop: true,
        rtl: true,
        dots: false,
        nav: true,
        navigation: true,
        navText: [
            '<button class="btn btn-dark mb-3"> <i class="bi bi-arrow-right"></i> </button>',
            '<button class="btn btn-dark mb-3"> <i class="bi bi-arrow-left"></i> </button>',
        ],
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            800: {
                items: 4
            },
        },

    });

    $(".owl-2").owlCarousel({
        loop: true,
        rtl: true,
        dots: false,
        nav: true,
        navigation: true,
        navText: [
            '<button class="btn btn-dark mb-3"> <i class="bi bi-arrow-right"></i> </button>',
            '<button class="btn btn-dark mb-3"> <i class="bi bi-arrow-left"></i> </button>',
        ],
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            600: {
                items: 3,
            },

        },

    });
});


// SHOW RANGE VALUE 
let range1 = document.getElementById("customRange1");
let range1Demo = document.getElementById("range1demo");
let range2 = document.getElementById("customRange2");
let range2Demo = document.getElementById("range2demo");

if (range1) {
    range1.addEventListener("input", () => {
        range1Demo.innerHTML = `${separate(range1.value)} تومان`;
    })
}

if (range2) {
    range2.addEventListener("input", () => {
        range2Demo.innerHTML = `${separate(range2.value)} تومان`;
    })
}

// SEPARATE PRICE
function separate(Number) {
    Number += '';
    Number = Number.replace(',', '');
    x = Number.split('.');
    y = x[0];
    z = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
        y = y.replace(rgx, '$1' + ',' + '$2');
    return y + z;
}

// PRODUCT NUMBER 
function MinusNum() {
    let val = parseInt(document.getElementById("product-number").value);
    if (val > 1) {
        document.getElementById("product-number").value = val - 1;
    }
}

function PlusNum() {
    let val = parseInt(document.getElementById("product-number").value);
    if (val < 10) {
        document.getElementById("product-number").value = val + 1;
    }
}



// FORM VALIDATION 
(function () {

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                console.log("ss");
                form.classList.add('was-validated')
            }, false)
        })
})()