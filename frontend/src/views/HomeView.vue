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
    <div id="review" class="col-5">Review Carousel</div>
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
