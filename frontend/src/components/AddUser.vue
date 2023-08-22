<template>
    <div class="p-3 col-7">
      <form action="https://puzzles-deli.onrender.com/register" method="POST" class="card p-3 yellow-bg">
        <h1 class="text-center heading-font">Register:</h1>
  
        <div class="mb-3 text-font">
          <label for="firstName" class="form-label">First Name(s): *</label>
          <input 
          v-model="firstName"
          type="text"
          id="firstName"
          name="firstName"
          class="form-control input-bg"
          placeholder="eg: Clayton"
          required
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="lastName" class="form-label">Last Name: *</label>
          <input 
          v-model="lastName"
          type="text"
          id="lastName"
          name="lastName"
          class="form-control input-bg"
          placeholder="eg: Sherman"
          required
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="userAge" class="form-label">Age: *</label>
          <input 
          v-model="userAge"
          type="number"
          id="userAge"
          name="userAge"
          class="form-control input-bg"
          required
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="gender" class="form-label">Gender: *</label>
          <input 
          v-model="gender"
          type="text"
          id="gender"
          name="gender"
          class="form-control input-bg"
          placeholder="eg: Female"
          required
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="emailAdd" class="form-label">Email: *</label>
          <input 
          v-model="emailAdd"
          type="text"
          id="emailAdd"
          name="emailAdd"
          class="form-control input-bg"
          placeholder="eg: claytonsherman@hotmail.com"
          required
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="userPass" class="form-label">Password: *</label>
          <input 
          v-model="userPass"
          type="text"
          id="userPass"
          name="userPass"
          class="form-control input-bg"
          placeholder="eg: P4$$w0rd"
          required
          />
        </div>

        <div class="mb-3 text-font">
          <label for="userProfile" class="form-label">Profile Picture:</label>
          <input 
          v-model="userProfile"
          type="text"
          id="userProfile"
          name="userProfile"
          class="form-control input-bg"
          placeholder="Insert image link here!"
          />
        </div>
  
        <p class="text-font">* indicates a required field.</p>
  
        <div class="p-3 text-center">
          <button type="submit" class="btn m-2 add-btn text-font">Register!</button>
          <button type="reset" class="btn m-2 clr-btn  text-font">Clear Fields</button>
        </div>
      </form>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        firstName: "",
        lastName: "",
        userAge: "",
        gender: "",
        emailAdd: "",
        userPass: "",
        userProfile: ""
      };
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lalezar&family=Londrina+Solid&display=swap');
  .yellow-bg {
    background: #45A245;
  }
  
  .input-bg {
    background: #FAF9E8;
  }
  
  .heading-font {
    font-family: 'Lalezar', cursive;
  }
  
  .text-font {
    font-family: 'Londrina Solid', cursive;
  }
  
  .add-btn, .clr-btn {
    border: 3px dashed #EE4823;
    background: #FAF9E8;
  }
  </style>>