<template>
<div class="text-center">
      <a
        data-bs-toggle="modal"
        data-bs-target="#addUser"
        href="#addUser"
        class="m-2 btn btn-outline-primary text-center"
        id="addUser"
        ><router-link to="/register">Add User</router-link></a>
</div>
<div class="modal" id="addUser">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Add User:</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div>
            <form class="card p-3 yellow-bg">
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
  
        
      </form>
          </div>
          <div class="modal-footer">
            <div class="p-3 text-center">
          <button type="submit" class="btn m-2 add-btn text-font" @click="addUser">Register!</button>
          <button type="reset" class="btn m-2 clr-btn  text-font">Clear Fields</button>
        </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
  import axios from 'axios'
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
    }, 
    methods:{
      async addUser(){
        try{
          await axios.post('https://puzzles-deli.onrender.com/register', {
            firstName: this.firstName,
            lastName: this.lastName,
            userAge: this.userAge,
            gender: this.gender,
            emailAdd: this.emailAdd,
            userPass: this.userPass,
            userProfile: this.userProfile
          })
          this.firstName = ""
          this.lastName = ""
          this.userAge = ""
          this.gender = ""
          this.emailAdd = ""
          this.userPass = ""
          this.userProfile = ""
          this.$router.push('/admin')
        }
        catch(err){
          alert(err)
        }
      }
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
  </style>