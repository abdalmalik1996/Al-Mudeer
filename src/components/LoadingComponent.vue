<template>
   <section class="Container-loader">
        <img class="logo-spinner" src="/logo-white.svg" alt="">
        <div class="half-circle-spinner">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
        </div>
      </section>
</template>



<style >
  .Container-loader{

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(9, 15, 19);;
    height: 100vh;
  }
.logo-spinner{
  position: absolute;
}
  .half-circle-spinner,
  .half-circle-spinner * {
    box-sizing: border-box;
  }

  .half-circle-spinner {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    position: relative;
  }

  .half-circle-spinner .circle {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(60px / 10) solid transparent;
  }

  .half-circle-spinner .circle.circle-1 {
    border-top-color: #FFF;
    animation: half-circle-spinner-animation 1s infinite;
  }

  .half-circle-spinner .circle.circle-2 {
    border-bottom-color: #FFFF;
    animation: half-circle-spinner-animation 1s infinite alternate;
  }

  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
