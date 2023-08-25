<template>
  <div class="load">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>


.load{
  display: flex;
  justify-content: center;
}

.loader {
  width: 150px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  animation: bounce 5s infinite;
  
}

.loader::before {
  content: 'Puzzles';
  position: absolute;
  display: block;
  left: -23%;
  bottom: 55%;
  color: green;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 4em;
  font-weight: 900;
  font-style: italic;
  animation: div-color-change 5s infinite;
}

.loader::after {
  content: 'Deli';
  position: absolute;
  top: 5%;
  left: 23%;
  color: #FAF9E8;
  font-size: 1.5em;
  font-weight: 800;
  letter-spacing: 10px;
  z-index: 1;
}

@keyframes bounce {
  0% {
    background-color: #EE4823;
    transform: translateX(0) translateY(60px);
  }

  25% {
    background-color: #F7BF3E;
    transform: translateX(60px) translateY(0);
  }

  55% {
    background-color: #45A245;
    transform: translateX(0) translateY(-60px);
  }

  75% {
    background-color: #F7BF3E;
    transform: translateX(-60px) translateY(0);
  }

  100% {
    background-color: #EE4823;
    transform: translateX(0) translateY(60px);
  }
}

@keyframes div-color-change {
  0% {
    color: #45A245;
  }

  25% {
    color: #EE4823;
  }

  55% {
    color: #F7BF3E;
  }

  75% {
    color: #EE4823;
  }

  100% {
    color: #45A245;
  }
}
</style>