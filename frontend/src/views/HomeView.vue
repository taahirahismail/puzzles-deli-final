<template>
  <div>
    <h1 class="header">PUZZLES DELI !</h1>
    <img src="https://i.postimg.cc/Hs0kVscY/sandwich-shop2.jpg" alt="">
  </div>
  <div class="row">
    <div id="green1" class="col-5">"Welcome to a World Between the Slices: <br> Where Culinary Dreams Become Delicious Realities! <br> Step into the extraordinary realm of flavours and textures 
at 'PUZZLES DELI'. “</div>
    <div id="yellow" class="col-3">Chicken</div>
    <div id="green2" class="col-3">Vegan</div>
  </div>
  <div class="row">
    <div id="red" class="col-3">Breakfast</div>
    <div id="yellow" class="col-3">Pastrami</div>

    <div id="review" class="p-2 col-5">
      
      <!-- <div class="card review-card">
        "Puzzles Deli is a hidden gem! The sandwiches are like pieces of culinary artistry – a symphony of flavors in every bite. From the first crunch to the last morsel, each sandwich is a delightful puzzle waiting to be solved. A must-visit for foodies!"
      </div> <br>

      <div class="card review-card">
        "Wow, what an amazing find! I'm blown away by the quality and creativity at Puzzles Deli. The sandwiches are masterpieces, and the ingredients taste so fresh. It's like they've cracked the code to making the perfect sandwich. Highly recommended!"
      </div> <br>

      <div class="card review-card">
        "Puzzles Deli delivers pure satisfaction! The taste combinations are genius, and the portions are generous. As someone who appreciates attention to detail, I'm thoroughly impressed with every aspect of this place. Their sandwiches are not just meals, they're experiences!"
      </div> -->
    </div>
  </div>
</template>

<style scoped>

#yellow{
  background-color: #f7bf3e;
}

#green1{
  background-color: #45A245;
  font-family: 'Londrina Solid', cursive;
  text-align: center;
  padding: 3%;
  font-size: 110%;
}
#green2{
  background-color: #45A245;
}

#red{
  background-color: #ee4823;
}

#review{
  border: 3px dashed #ee4823;
}


#yellow, #green1, #green2, 
#red, #review{
  border-radius: 20px;
  height: 200px;
}

.row{
  display: flex;
  justify-content: space-evenly;
  margin-top: 2%;
}

img{
  width: 100%;
  height: 80%;
}

.header{
  font-family: 'Luckiest Guy', cursive;
  text-align: center;
  font-size: 80px;
  color: black;
}
</style>
