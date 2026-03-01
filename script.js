function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

function downloadcv() {
    alert("CV download started 🚀");
}

// Animate skills on scroll
const skillsSection = document.querySelector(".skills");

window.addEventListener("scroll", () => {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        document.querySelectorAll(".progress-bar").forEach(bar => {
            bar.style.width = bar.classList.contains("html") ? "90%" :
                              bar.classList.contains("css") ? "85%" : "75%";
        });
    }
});
function submitForm(event) {
    event.preventDefault();
    alert("Message sent successfully 🚀");
}


let reviews = [
  {
    name: "Ali Khan",
    image: "https://i.pravatar.cc/100?img=1",
    review: "Amazing work! My website looks professional.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Sara Ahmed",
    image: "https://i.pravatar.cc/100?img=2",
    review: "Delivered on time. Highly recommended!",
    rating: "⭐⭐⭐⭐"
  },
  {
    name: "Usman Tariq",
    image: "https://i.pravatar.cc/100?img=3",
    review: "Very creative developer.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Ayesha Noor",
    image: "https://i.pravatar.cc/100?img=4",
    review: "Loved the UI design!",
    rating: "⭐⭐⭐⭐⭐"
  }
];

let count = 2;

function showReviews() {
  let container = document.getElementById("reviews");
  container.innerHTML = "";

  for(let i = 0; i < count; i++) {
    container.innerHTML += `
      <div class="card">
        <img src="${reviews[i].image}">
        <h3>${reviews[i].name}</h3>
        <p>${reviews[i].review}</p>
        <span class="star">${reviews[i].rating}</span>
      </div>
    `;
  }
}

function showMore() {
  count += 2;
  if(count > reviews.length) {
    count = reviews.length;
  }
  showReviews();
}

showReviews();
