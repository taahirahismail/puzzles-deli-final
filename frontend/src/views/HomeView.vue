<template>
  <div class="media">
  <div>
    <h1 class="header">PUZZLES DELI !</h1>
    <img src="https://i.postimg.cc/Hs0kVscY/sandwich-shop2.jpg" alt="" />
  </div>

  <div class="row media">
    <div id="green1" class="p-2 col-5 media-2">
      Welcome to a World Between the Slices: <br />
      Where Culinary Dreams Become Delicious Realities! <br />
      Step into the extraordinary realm of flavours and textures at 'PUZZLES
      DELI'.
    </div>
    <div id="yellow" class="p-2 col-3 media-2">
      <img src="https://i.postimg.cc/RhPbj7L0/barney.png" alt="chicken-feature" class="yellow-bg">

      <div class="text-center yellow-bg">
        <button class="btn feature-btn">Chicken</button>
      </div>
    </div>

    <div id="green2" class="p-2 col-3 media-2">
      <img src="https://i.postimg.cc/JhJvGBMT/efin-laser.png" alt="pastrami-feature" class="green-bg">

      <div class="text-center green-bg">
        <button class="btn feature-btn">Pastrami</button>
      </div>
    </div>
  </div>

  <div class="row media">
    <div id="red" class="p-2 col-3 media-2">
      <img src="https://i.postimg.cc/Gm4Zn5Nn/cheeslyn.png" alt="vegan-feature" class="red-bg">

      <div class="text-center red-bg">
        <button class="btn feature-btn">Vegan</button>
      </div>
    </div>

    <div id="yellow" class="p-2 col-3 media-2">
      <img src="https://i.postimg.cc/hj1Y0WJT/breakfast-bagel-special.png" alt="breakfast-feature" class="yellow-bg">

      <div class="text-center yellow-bg">
        <button class="btn feature-btn">Breakfast</button>
      </div>
    </div>

    <div id="review" class="p-2 col-5 media-2">
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card p-2 review-card light-bg">
              "Puzzles Deli is a hidden gem! The sandwiches are like pieces of
              culinary artistry – a symphony of flavors in every bite. From the
              first crunch to the last morsel, each sandwich is a delightful
              puzzle waiting to be solved. A must-visit for foodies!"
            </div>
          </div>
          <div class="carousel-item">
            <div class="card p-2 review-card light-bg">
              "Wow, what an amazing find! I'm blown away by the quality and
              creativity at Puzzles Deli. The sandwiches are masterpieces, and
              the ingredients taste so fresh. It's like they've cracked the code
              to making the perfect sandwich. Highly recommended!"
            </div>
          </div>
          <div class="carousel-item">
            <div class="card p-2 review-card light-bg">
              "Puzzles Deli delivers pure satisfaction! The taste combinations
              are genius, and the portions are generous. As someone who
              appreciates attention to detail, I'm thoroughly impressed with
              every aspect of this place. Their sandwiches are not just meals,
              they're experiences!"
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
  font-family: "Londrina Solid", cursive;
}

#yellow, .yellow-bg {
  background-color: #f7bf3e;
}

#green1 {
  background-color: #45a245;
  font-family: "Londrina Solid", cursive;
  text-align: center;
  font-size: 250%;
}
#green2, .green-bg {
  background-color: #45a245;
}

#red, .red-bg {
  background-color: #ee4823;
}

#review {
  border: 3px dashed #ee4823;
  font-size: 220%;
}

#yellow,
#green1,
#green2,
#red,
#review {
  border-radius: 20px;
  min-height: 200px;
}

.light-bg {
  background: #FAF9E8;
  border: none;
  
}

.row {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2%;
}

img {
  width: 100%;
  height: 80%;
}

.header {
  font-family: "Luckiest Guy", cursive;
  text-align: center;
  font-size: 80px;
  color: black;
}

.feature-btn {
  border: 3px dashed #ee4823;
  border-radius: 10px;
  background: #faf9e8;
  width: 45%;
  font-size: 70%;
}

.feature-btn:hover {
  border: 3px dashed #faf9e8;
  border-radius: 10px;
  background: #ee4823;
  width: 45%;
}

@media screen and (max-width: 950px) {
  #review {
    font-size: 130%;
  }

  #green1 {
    font-size: 170%;
  }
}

@media screen and (max-width: 720px) {
  #review {
    font-size: 100%;
  }

  #green1 {
    font-size: 150%;
  }
}

@media screen and (max-width: 720px) {
  #review {
    font-size: 100%;
  }

  #green1 {
    font-size: 150%;
  }
}

@media screen and (max-width: 620px) {
  #review {
    font-size: 90%;
  }

  #green1 {
    font-size: 110%;
  }
}

@media screen and (max-width: 520px) {
  .media {
    display: flex;
    flex-direction: column;
  }

  .media-2 {
    width: 100%;
    margin-bottom: 10px;
  }

  .header {
    font-size: 48px;
  }

  #review {
    font-size: 120%;
  }

  #green1 {
    font-size: 150%;
  }
}
</style>
