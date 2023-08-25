<template>
  <div class="media">
    <h1 class="header">About Us !</h1>

    <div class="row">
      <div class="col-11 green-bg-main">
        Welcome to Puzzles Deli, where sandwiches are more than just a meal— they're an expression of culinary creativity. As a small but passionate establishment, we've dedicated ourselves solely to the art of crafting exceptional sandwiches that burst with flavour and wholesome goodness. At Puzzles Deli, we believe that focusing on one thing allows us to excel at it. Our sandwiches are carefully crafted using the freshest locally sourced ingredients, resulting in a medley of tastes and textures that cater to both your cravings and your health-conscious choices. With each bite, you're completing a puzzle of flavors, discovering the thought and care we put into every combination. Join us on this savoury journey and experience sandwiches in a new light, where creativity knows no bounds and every bite tells a delicious story. <br> <br>

        <h4 class="heading-font green-head">Our Team:</h4>
        <br />

        Meet the Culinary Innovators: Behind the scenes of Puzzles Deli!, a diverse team of passionate professionals comes together to craft an unforgettable dining experience. Our talented chefs infuse creativity into every dish. Behind the curtain, our web developers work tirelessly to bring our offerings to your screen. From the culinary artists to the tech wizards, each member plays a vital role in weaving the tapestry of flavors, aesthetics, and seamless online experiences that define our restaurant.
      </div>
    </div>

    <div class="row">
      <div class="col-3 p-2 red-bg card-ani text-font">
        <img
          src="https://i.postimg.cc/650bn3f6/puzzles-deli-ceo.jpg"
          alt=""
          width="100%"
        />
        <br />

        <p class="p-2 red-bg">
          <strong class="red-bg">Liam Patel</strong> <br />
          <cite class="red-bg">CEO</cite> <br />
          Our visionary CEO behind Puzzles Deli. With his unwavering passion for
          culinary creativity and a keen business acumen, Liam has transformed a
          simple deli into a gastronomic haven, where every bite is a delightful
          enigma waiting to be solved.
        </p>
      </div>

      <div class="col-3 p-2 yellow-bg card-ani text-font">
        <img
          src="https://i.postimg.cc/28FMGTrD/puzzles-deli-headchef.jpg"
          alt=""
          width="100%"
        />

        <p class="p-2 yellow-bg">
          <strong class="yellow-bg">Alexander Chen</strong> <br />
          <cite class="yellow-bg">Head Chef</cite> <br />
          Meet the culinary maestro orchestrating symphonies of flavor at our
          restaurant. With an exquisite blend of innovation and tradition, Chef
          Chen's creations dance on taste buds, leaving an indelible mark of his
          culinary brilliance.
        </p>
      </div>

      <div class="col-3 p-2 green-bg card-ani text-font">
        <img
          src="https://i.postimg.cc/J0CYcHF0/puzzles-deli-accounts.jpg"
          alt=""
          width="100%"
        />

        <p class="p-2 green-bg">
          <strong class="green-bg">Olivia Rodriguez</strong> <br />
          <cite class="green-bg">Accounts Manager</cite> <br />
          Our meticulous Accounts Manager brings financial harmony to our
          operations. With her astute eye for numbers and unwavering dedication,
          Olivia ensures our business thrives as seamlessly as the notes in a
          perfect melody.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-3 p-2 yellow-bg card-ani text-font">
        <img
          src="https://i.postimg.cc/qqcbmMfL/puzzles-deli-dm.jpg"
          alt=""
          width="100%"
        />

        <p class="p-2 yellow-bg">
          <strong class="yellow-bg">Amina Khan</strong> <br />
          <cite class="yellow-bg">Director of Digital Marketing</cite> <br />
          The visionary Amina Khan, paints our brand's story across the digital
          canvas with mastery. Her strategic brilliance and creative flair
          illuminate our online presence, captivating audiences and transforming
          clicks into lifelong connections.
        </p>
      </div>

      <div class="col-3 p-2 green-bg card-ani text-font">
        <img
          src="https://i.postimg.cc/qB25BQt3/puzzles-deli-wd.jpg"
          alt=""
          width="100%"
        />

        <p class="p-2 green-bg">
          <strong class="green-bg">Sophie Nguyen</strong> <br />
          <cite class="green-bg">Senior Web Developer</cite> <br />
          Spearheaded by Sophie Nguyen, our web development team turns ideas
          into immersive digital experiences. With their coding wizardry, they
          craft virtual pathways that seamlessly connect our customers to the
          flavors and delights we offer (although they're a bit camera shy).
        </p>
      </div>

      <div class="col-3 p-2 red-bg card-ani text-font">
        <img
          src="https://i.postimg.cc/CLMZfgDj/puzzles-deli-delivery.jpg"
          alt=""
          width="100%"
        />

        <p class="p-2 red-bg">
          <strong class="red-bg">Mikey with the Bikey</strong> <br />
          <cite class="red-bg">Deliveries</cite> <br />
          Our delivery virtuoso who races against time to bring culinary joy to
          your doorstep. With a zest for promptness, a dash of warmth, and his
          trusty bikey (named Bella) Mikey ensures each delivery arrives as a
          delicious surprise.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-11 red-bg-main">
        At Puzzles Deli!, our journey is driven by passion, innovation, and the love for what we do. We invite you to join us on this culinary adventure, where flavors come alive and moments turn into memories. Whether you're savoring our creations, exploring our story, or connecting with us, we're thrilled to have you as part of our Puzzles Deli! family. Let's embark together on a delectable experience that's bound to delight your senses.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.yellow-bg {
  background-color: #f7bf3e;
}

.green-bg-main {
  background-color: #45a245;
  font-family: "Londrina Solid", cursive;
  text-align: center;
  padding: 3%;
  font-size: 110%;
}

.red-bg-main {
  background-color: #ee4823;
  font-family: "Londrina Solid", cursive;
  text-align: center;
  padding: 3%;
  font-size: 125%;
  border-radius: 10px;
}

.green-bg,
.green-head {
  background-color: #45a245;
}

.red-bg,
.red-head {
  background-color: #ee4823;
}

.card-ani,
.green-bg-main {
  border-radius: 10px;
  min-height: 300px;
}

.text-font {
  font-family: "Londrina Solid", cursive;
}

.row {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2%;
}

.header {
  font-family: "Luckiest Guy", cursive;
  text-align: center;
  font-size: 80px;
  color: black;
}

.green-bg {
  background: #45a245;
}

.heading-font {
  font-family: "Luckiest Guy", cursive;
}

img {
  border-radius: 7px;
}

.card-ani:hover {
  transform: translate3D(0, -1px, 0) scale(1.03);
  box-shadow: 8px 28px 50px rgba(0, 0, 0, 0.5), 1px 6px 12px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
}

@media screen and (max-width: 550px) {
  .media {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .col-3 {
    width: 90%;
    margin: 10px;
  }
}
</style>
