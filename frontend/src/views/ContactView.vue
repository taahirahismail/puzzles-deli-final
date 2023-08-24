<template>
  <div class="row">
    
    <div class="p-3 col-5">
    <form
      action="https://formspree.io/f/mzblrvgp"
      method="POST"
      class="card p-3 green-bg"
    >
      <div class="mb-3 text-font">
        <label for="fullName" class="form-label">Full Name(s): *</label>
        <input
          v-model="fullName"
          type="text"
          id="fullName"
          name="Full Name"
          class="form-control input-bg"
          placeholder="eg: Clayton Margaret Sherman"
          required
        />
      </div>

      <div class="mb-3 text-font">
        <label for="email" class="form-label">Email: *</label>
        <input
          v-model="email"
          type="text"
          id="email"
          name="Email"
          class="form-control input-bg"
          placeholder="eg: claytonmsherman@hotmail.com"
          required
        />
      </div>

      <div class="mb-3 text-font">
        <label for="message" class="form-label">Message:</label>
        <textarea
          v-model="message"
          id="message"
          name="Message"
          class="form-control"
          rows="5"
          placeholder="Leave us a message and we'll get back to you soon!"
        ></textarea>
      </div>

      <p class="text-font">* indicates a required field.</p>

      <div class="p-3 text-center">
        <button type="submit" class="btn m-2 add-btn text-font">
          Submit!
        </button>
        <button type="reset" class="btn m-2 clr-btn text-font">
          Clear Fields
        </button>
      </div>
    </form>
  </div>

    <div class="p-3 col-7 text-font">
      <div class="card p-3 red-bg">
        <div class="row">
          <div class="card p-3 col-5 light-bg dashed-border">
          <p>Visit us at: Universitätsstraße 3, 79098 Freiburg im Breisgau, Germany.
          </p>
          <p>We're excited to meet you, so make sure you pull through, damnit!</p>
        </div>

        <div class="card col-7">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1099.514550716112!2d7.848087159633201!3d47.99488440172838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911c9ebee623eb%3A0xa1d69dc3344eb374!2sPuzzles!5e0!3m2!1sen!2sza!4v1692793756579!5m2!1sen!2sza" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        
      </div>

      <div class="pt-3 text-font">
        <div class="card p-3 yellow-bg">
          <h3>Alternatively, reach us at:</h3>
          <p>Email: <a href="mailto:taahirah.i@gmail.com">puzzlesdeli@unreal.net</a></p>
          <p>Mobile: <a href="tel:+0123456789">078 953 3354</a></p>
        </div>
      </div>
    </div>
  </div>

  <div class="p-3">
    <div class="row card p-3 red-bg"></div>
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

}
</script>

<style scoped>
.red-bg {
  background: #EE4823;
}

.yellow-bg {
  background: #F7BF3E;
}

.light-bg {
  background: #FAF9E8;
}

.dashed-border {
  border: 3px dashed #EE4823;
  border-radius: 10px;
}

.heading-font {
  font-family: "Lalezar", cursive;
}

.text-font {
  font-family: "Londrina Solid", cursive;
}

.green-bg {
  background: #45a245;
}

.input-bg {
  background: #faf9e8;
}

.heading-font {
  font-family: "Lalezar", cursive;
}

.text-font {
  font-family: "Londrina Solid", cursive;
}

.add-btn,
.clr-btn {
  border: 3px solid #ee4823;
  border-radius: 20px;
  background: #faf9e8;
  width: 45%;
}
</style>
