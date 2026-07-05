// Dark Mode Toggle

const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkBtn.innerHTML = "☀️ Light Mode";
    }
    else{
        darkBtn.innerHTML = "🌙 Dark Mode";
    }

});

// Book Now Button

const bookBtn =
document.getElementById("bookBtn");

bookBtn.addEventListener("click", function(){

    alert("Booking feature coming soon! ✈️");

});

// Like Buttons

const likeButtons =
document.querySelectorAll(".likeBtn");

likeButtons.forEach(function(btn){

    btn.addEventListener("click", function(){

        if(btn.innerHTML === "❤️ Like"){

            btn.innerHTML = "💖 Liked";
            btn.style.background = "#d90429";
            btn.style.color = "white";

        }
        else{

            btn.innerHTML = "❤️ Like";
            btn.style.background = "#ff4d6d";
            btn.style.color = "white";

        }

    });

});

// Search Destinations

const searchBox =
document.getElementById("searchBox");

searchBox.addEventListener("keyup", function(){

    const value =
    searchBox.value.toLowerCase();

    const cards =
    document.querySelectorAll(".card");

    cards.forEach(function(card){

        const title =
        card.querySelector("h3")
        .innerText
        .toLowerCase();

        if(title.includes(value)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});
