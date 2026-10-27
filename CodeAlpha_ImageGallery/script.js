const galleryItems = [

    // NATURE
    {
        title: "Golden Hour",
        category: "nature",
        image: "images/nature-01.jpg",
        description: "Warm light falling across a quiet landscape."
    },

    {
        title: "Soft Bloom",
        category: "nature",
        image: "images/nature-02.jpg",
        description: "A delicate bloom caught in gentle light."
    },

    {
        title: "Still Green",
        category: "nature",
        image: "images/nature-03.jpg",
        description: "Layers of green creating a quiet rhythm."
    },

    {
        title: "Blue Horizon",
        category: "nature",
        image: "images/nature-04.jpg",
        description: "Where the ocean meets an endless sky."
    },

    {
        title: "Mountain Air",
        category: "nature",
        image: "images/nature-05.jpg",
        description: "A distant landscape shaped by light and space."
    },

    {
        title: "After Rain",
        category: "nature",
        image: "images/nature-06.jpg",
        description: "Freshness captured just after the rain."
    },


    // FASHION
    {
        title: "Quiet Form",
        category: "fashion",
        image: "images/fashion-01.jpg",
        description: "Texture, structure and simplicity in one frame."
    },

    {
        title: "Soft Leather",
        category: "fashion",
        image: "images/fashion-02.jpg",
        description: "A timeless accessory with understated character."
    },

    {
        title: "Golden Detail",
        category: "fashion",
        image: "images/fashion-03.jpg",
        description: "A small detail that catches the light."
    },

    {
        title: "The Silhouette",
        category: "fashion",
        image: "images/fashion-04.jpg",
        description: "Clean lines and confident movement."
    },

    {
        title: "Everyday Elegance",
        category: "fashion",
        image: "images/fashion-05.jpg",
        description: "Simple styling with an effortless feel."
    },

    {
        title: "Editorial Mood",
        category: "fashion",
        image: "images/fashion-06.jpg",
        description: "A study in texture, tone and composition."
    },


    // PLACES
    {
        title: "Quiet Architecture",
        category: "places",
        image: "images/places-01.jpg",
        description: "Lines and shadows meeting in a thoughtful space."
    },

    {
        title: "The Stairway",
        category: "places",
        image: "images/places-02.jpg",
        description: "A simple structure transformed by light."
    },

    {
        title: "Open Door",
        category: "places",
        image: "images/places-03.jpg",
        description: "An invitation into somewhere new."
    },

    {
        title: "Soft Interior",
        category: "places",
        image: "images/places-04.jpg",
        description: "A calm space designed around simplicity."
    },

    {
        title: "City Rhythm",
        category: "places",
        image: "images/places-05.jpg",
        description: "Movement, architecture and everyday life."
    },

    {
        title: "Between Buildings",
        category: "places",
        image: "images/places-06.jpg",
        description: "A quiet perspective from the city."
    },


    // DETAILS
    {
        title: "Quiet Pages",
        category: "details",
        image: "images/details-01.jpg",
        description: "Stories waiting quietly between the pages."
    },

    {
        title: "Morning Ritual",
        category: "details",
        image: "images/details-02.jpg",
        description: "A small moment that starts the day."
    },

    {
        title: "Soft Scent",
        category: "details",
        image: "images/details-03.jpg",
        description: "A familiar fragrance presented simply."
    },

    {
        title: "Warm Light",
        category: "details",
        image: "images/details-04.jpg",
        description: "A quiet glow across an everyday object."
    },

    {
        title: "Little Things",
        category: "details",
        image: "images/details-05.jpg",
        description: "The beauty hidden in ordinary objects."
    },

    {
        title: "Ceramic Study",
        category: "details",
        image: "images/details-06.jpg",
        description: "Form, texture and simplicity."
    }

];


// ================================
// GALLERY
// ================================

const galleryGrid = document.querySelector(".gallery-grid");


// ================================
// DISPLAY GALLERY
// ================================

function displayGallery(items) {

    galleryGrid.innerHTML = "";

    items.forEach(function(item, index) {

        galleryGrid.innerHTML += `
            <article 
    class="gallery-card" 
    onclick="openLightbox(${galleryItems.indexOf(item)})"
>

                <div class="image-wrapper">

                    <img
                        src="${item.image}"
                        alt="${item.title}"
                    >

                    <div class="image-overlay">

                        <span class="card-category">
                            ${item.category.toUpperCase()} · ${String(index + 1).padStart(2, "0")}
                        </span>

                        <h3>
                            ${item.title}
                        </h3>

                        <span class="view-text">
                            VIEW ↗
                        </span>

                    </div>

                </div>

            </article>
        `;

    });

}


// Show all images when page loads

displayGallery(galleryItems);


// ================================
// FILTERS
// ================================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.category;

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        if (selectedCategory === "all") {

            displayGallery(galleryItems);

        } else {

            const filteredItems = galleryItems.filter(function(item) {

                return item.category === selectedCategory;

            });

            displayGallery(filteredItems);

        }

    });

});
// ===============================
// LIGHTBOX
// ===============================

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCategory = document.querySelector("#lightboxCategory");
const lightboxTitle = document.querySelector("#lightboxTitle");
const lightboxDescription = document.querySelector("#lightboxDescription");

const lightboxClose = document.querySelector("#lightboxClose");
const lightboxPrev = document.querySelector("#lightboxPrev");
const lightboxNext = document.querySelector("#lightboxNext");

let currentIndex = 0;


// Open lightbox
function openLightbox(index) {

    currentIndex = index;

    const item = galleryItems[currentIndex];

    lightboxImage.src = item.image;
    lightboxImage.alt = item.title;

    lightboxCategory.textContent =
        `${item.category.toUpperCase()} · ${String(currentIndex + 1).padStart(2, "0")}`;

    lightboxTitle.textContent = item.title;

    lightboxDescription.textContent = item.description;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


// Close lightbox
function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}


// Previous image
function showPrevious() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
    }

    openLightbox(currentIndex);
}


// Next image
function showNext() {

    currentIndex++;

    if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    }

    openLightbox(currentIndex);
}


// Close button
lightboxClose.addEventListener("click", closeLightbox);


// Previous button
lightboxPrev.addEventListener("click", showPrevious);


// Next button
lightboxNext.addEventListener("click", showNext);


// Close when clicking outside the image/content
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


// Keyboard controls
document.addEventListener("keydown", function(event) {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowLeft") {
        showPrevious();
    }

    if (event.key === "ArrowRight") {
        showNext();
    }

});
// ===============================
// MOBILE NAVIGATION
// ===============================

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});
// Close mobile menu when a link is clicked

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});