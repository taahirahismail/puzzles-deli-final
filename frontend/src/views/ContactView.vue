<template>
  <div class="row media">
    <h1 class="text-center header">Contact Us !</h1>

    <div class="p-3 col-5 media-2">
      <form
        action="https://formspree.io/f/mzblrvgp"
        method="POST"
        class="card p-3 green-bg"
      >
        <div class="mb-3 green-bg text-font">
          <label for="fullName" class="form-label green-bg"
            >Full Name(s): *</label
          >
          <input
            v-model="fullName"
            type="text"
            id="fullName"
            name="Full Name"
            class="form-control p-2 light-bg"
            placeholder="eg: Clayton Margaret Sherman"
            required
          />
        </div>

        <div class="mb-3 green-bg text-font">
          <label for="email" class="form-label green-bg">Email: *</label>
          <input
            v-model="email"
            type="text"
            id="email"
            name="Email"
            class="form-control p-2 light-bg"
            placeholder="eg: claytonmsherman@hotmail.com"
            required
          />
        </div>

        <div class="mb-3 green-bg text-font">
          <label for="message" class="form-label green-bg">Message:</label>
          <textarea
            v-model="message"
            id="message"
            name="Message"
            class="form-control p-2 light-bg"
            rows="5"
            placeholder="Leave us a message and we'll get back to you soon!"
          ></textarea>
        </div>

        <p class="green-bg text-font">* indicates a required field.</p>

        <div class="p-3 green-bg text-center">
          <button type="submit" class="btn m-2 add-btn text-font">
            Submit!
          </button>
          <button type="reset" class="btn m-2 clr-btn text-font">
            Clear Fields
          </button>
        </div>
      </form>
    </div>

    <div class="p-3 col-7 text-font media-2">
      <div class="card p-3 red-bg">
        <div class="row red-bg">
          <div class="card mx-auto p-3 col-5 light-bg dashed-border media-font">
            <p>
              Visit us at: Universitätsstraße 3, 79098 Freiburg im Breisgau,
              Germany.
            </p>
            <p>
              We're excited to meet you, so make sure you pull through, damnit!
            </p>
          </div>

          <div class="card mx-auto col-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1099.514550716112!2d7.848087159633201!3d47.99488440172838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911c9ebee623eb%3A0xa1d69dc3344eb374!2sPuzzles!5e0!3m2!1sen!2sza!4v1692793756579!5m2!1sen!2sza"
              width="100%"
              height="300"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div class="pt-3 text-font">
        <div class="card p-3 yellow-bg">
          <h3 class="yellow-bg">Alternatively, reach us at:</h3>
          <br />
          <p class="yellow-bg">
            Email:
            <a href="mailto:taahirah.i@gmail.com" class="yellow-bg"
              >puzzlesdeli@unreal.net</a
            >
          </p>
          <p class="yellow-bg">
            Mobile: <a href="tel:+0123456789" class="yellow-bg">078 953 3354</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="p-3">
    <div class="row card p-3 text-center text-font red-bg">
      Thank you for choosing Puzzles Deli as your go-to destination for
      sandwiches and joining us in celebrating the art of sandwich-making, where creativity meets nutrition, and each bite is a piece of the puzzle that is our culinary journey.
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      message: "",
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
}
.red-bg {
  background: #ee4823;
}

.yellow-bg {
  background: #f7bf3e;
}

.green-bg {
  background: #45a245;
}

.light-bg {
  background: #faf9e8;
}

.dashed-border {
  border: 3px dashed #ee4823;
  border-radius: 10px;
}

.header {
  font-family: "Luckiest Guy", cursive;
  text-align: center;
  font-size: 80px;
  color: black;
}

.text-font {
  font-family: "Londrina Solid", cursive;
}

.add-btn,
.clr-btn {
  border: 3px solid #ee4823;
  border-radius: 10px;
  background: #faf9e8;
  width: 45%;
}

.add-btn:hover,
.clr-btn:hover {
  border: 3px solid #faf9e8;
  background: #ee4823;
  color: #faf9e8;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: #45a245;
}

@media screen and (max-width: 550px) {
  .media {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center !important;
  }

  .media-2 {
    width: 100%;
  }
}

@media screen and (max-width: 330px) {
  .media-font {
    font-size: 14px;
  }
}
</style>

