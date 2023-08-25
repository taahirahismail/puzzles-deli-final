<template>
  <div>
    <div class="button">
    <a
      data-bs-toggle="modal"
      data-bs-target="#add-user-modal"
      href="#add-user-modal"
      class="m-2 btn btn-outline-danger text-center"
      
      >Add User</a
    >
  </div>
  <div class="modal" id="add-user-modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="text-center heading-font">Register:</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>

        <div>
          <form class="card p-3 yellow-bg">
            

            <div class="mb-3 text-font">
              <label for="firstName" class="form-label">First Name(s): *</label>
              <input
                v-model="model.user.firstName"
                type="text"
                id="firstName"
                name="firstName"
                class="form-control input-bg"
                placeholder="eg: Clayton"
                required oninvalid="this.setCustomValidity('Please insert first name')"
            oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="mb-3 text-font">
              <label for="lastName" class="form-label">Last Name: *</label>
              <input
                v-model="model.user.lastName"
                type="text"
                id="lastName"
                name="lastName"
                class="form-control input-bg"
                placeholder="eg: Sherman"
                required oninvalid="this.setCustomValidity('Please insert last name')"
            oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="mb-3 text-font">
              <label for="userAge" class="form-label">Age: *</label>
              <input
                v-model="model.user.userAge"
                type="number"
                id="userAge"
                name="userAge"
                class="form-control input-bg"
                required oninvalid="this.setCustomValidity('Please insert age')"
            oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="mb-3 text-font">
              <label for="gender" class="form-label">Gender: *</label>
              <input
                v-model="model.user.gender"
                type="text"
                id="gender"
                name="gender"
                class="form-control input-bg"
                placeholder="eg: Female"
                required oninvalid="this.setCustomValidity('Please insert gender')"
            oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="mb-3 text-font">
              <label for="emailAdd" class="form-label">Email: *</label>
              <input
                v-model="model.user.emailAdd"
                type="text"
                id="emailAdd"
                name="emailAdd"
                class="form-control input-bg"
                placeholder="eg: claytonsherman@hotmail.com"
                required oninvalid="this.setCustomValidity('Please insert email')"
            oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="mb-3 text-font">
              <label for="userPass" class="form-label">Password: *</label>
              <input
                v-model="model.user.userPass"
                type="text"
                id="userPass"
                name="userPass"
                class="form-control input-bg"
                placeholder="eg: P4$$w0rd"
                required oninvalid="this.setCustomValidity('Please insert password')"
            oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="mb-3 text-font">
              <label for="userProfile" class="form-label"
                >Profile Picture:</label
              >
              <input
                v-model="model.user.userProfile"
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
            <button
              type="submit"
              class="btn m-2 add-btn text-font"
              @click="addUser()"
            >
              Register!
            </button>
            <button type="reset" class="btn m-2 clr-btn text-font">
              Clear Fields
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addingUserID: null,
      model: {
        user: {
          firstName: "",
          lastName: "",
          userAge: "",
          gender: "",
          userRole: "",
          emailAdd: "",
          userPass: "",
          userProfile: "",
        },
      },
    };
  },
  methods: {
    addUser() {
      this.$store.dispatch("register", this.model.user);
      console.log(this.model.user);
      setTimeout(() => {
        location.reload();
      }, 50000);
    },
  },
};
</script>

<style scoped>
.button{
  float: right;
}

.yellow-bg{
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
  border: 3px dashed #ee4823;
  background: #faf9e8;
}

.add-btn:hover,
.clr-btn:hover {
  border: 3px solid #faf9e8;
  background: #ee4823;
  color: #faf9e8;
}

</style>