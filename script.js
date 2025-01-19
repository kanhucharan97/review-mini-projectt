const review = [
  {
    img: "20220727_140912.jpg",
    name: "krushna swain",
    job: "web developer",
    info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    img: "20220727_140940.jpg",
    name: "rabi swain",
    job: "web designer",
    info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    img: "sagar.jpg",
    name: "sagar biswal",
    job: "intern",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    img: "Screenshot_20190929-122727_WhatsApp.jpg",
    name: "aditya tripathy",
    job: "the boss",
    info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic",
  },
]
let count = 0

// targeting html
let img = document.querySelector("#person-img")
const author = document.querySelector("#author")
const job = document.querySelector("#job")
const info = document.querySelector("#info")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

prevBtn.addEventListener("click", function () {
  if (count == 0) {
    count = 3
  } else {
    count--
  }
  // console.log(count)
  person()
})

nextBtn.addEventListener("click", function () {
  if (count == 3) {
    count = 0
  } else {
    count++
  }
  // console.log(count)
  person()
})
randomBtn.addEventListener("click", function () {
  let rNumber = Math.floor(Math.random() * review.length)
  count = rNumber

  person()
})

// changing the value or textContent
function person() {
  img.src = review[count].img
  author.textContent = review[count].name
  job.textContent = review[count].job
  info.textContent = review[count].info
}
