<template>
<nav class="navbar navbar-expand-lg navbar-light brown-bg">
    <div class="container-fluid">
      <a class="navbar-brand px-5" href="#">
        <img
          src="https://i.postimg.cc/vByKJhYM/EOMP-Node-JS-LOGO.png"
          alt="puzzles-logo"
          class="logo"
        />
      </a>
      <button
        class="navbar-toggler light-purple-bg"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-3 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link"
              >ABOUT</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link"
              >PRODUCTS</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link"
              >ADMIN</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link"
              >CONTACT</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>


    
</template>

<script>
export default {
    
}
</script>

<style scoped>

.router-link-active {
  color: #f7bf3e !important;
}
.nav-link:hover {
  color: #ee2823 !important;
}

.logo {
    width: 130px;
    height: 90px;
}


.nav-link{
    font-family: 'Lalezar', cursive;
    font-size: 30px;
    color: black;
}

@media screen and (max-width: 348px){
  .logo{
    width: 80px;
    height: 50px;
  }
}

</style>
