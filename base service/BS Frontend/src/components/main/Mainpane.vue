<template>
  <div class="main-container">
    <div class="main-box-bottom">
      <div v-for="count in 4" :key="count+bottom" class="main-box-bottom-item">
        <div v-for="count1 in 3" :key="count1+bottom1" class="img-box">
          <img src="../../assets/img/Center_map_icon_13.png" class="img-center-map"/>
          <div class="img-line"></div>
        </div>
        <div class="img-line1">
<!--          <div :class="'move-point'+ count"></div>-->
        </div>
<!--        -->
<!--        <img src="../../assets/img/Center_map_icon_13.png" class="img-center-map"/>-->
<!--        <img src="../../assets/img/Center_map_icon_13.png" class="img-center-map"/>-->
      </div>
      <div class="img-line2"></div>
      <div class="middle-point">
        <img src="../../assets/img/Center_map_icon_05.png" class="img-center-map1"/>
      </div>
      <div :class="'move-point'+ 2"></div>
<!--      <div class="main-box-bottom-dis"></div>-->
    </div>
  </div>
</template>

<style>
  .main-container{
    position: absolute;
    bottom: 10px;
  }

  .main-box-bottom {
    margin-top: 200px;
    height: 180px;
    width: 460px;
    display: flex;
    transform-origin: bottom right;
    transform:skew(-60deg,30deg);
    position: relative;
    border-bottom: 2px solid darkslateblue;
    border-left: 2px solid darkslateblue;
    border-right: 2px solid darkslateblue;
  }

  .img-box {
    display: flex;
    transform:skew(60deg,-30deg);
  }

  .img-line {
    height: 1px;
    background-color: lightblue;
    width: 70%;
    transform:skew(-60deg,30deg) scale(-0.4) translate(-30px, -55px);
    margin: auto;
  }

  .img-line1 {
    height: 1px;
    background-color: lightblue;
    /*width: 120%;*/
    width: 170%;
    transform:rotate(90deg) translate(-81px, -36px);
    /*margin: auto;*/
  }

  .img-line2 {
    height: 1px;
    position: absolute;
    width: 346px;
    background-color: lightblue;
    /*width: 120%;*/
    transform:translate(128px, -16px);
    /*margin: auto;*/
  }

  .middle-point {
    position: absolute;
    height: 33px;
    width: 60px;
    border-radius: 10px;
    border: 1px solid lightblue;
    transform: skew(8deg,0deg) translate(213px, -38px);
    background-color: #330033;
  }

  .main-box-bottom-item{
    width: 100px;
    height: 100%;
    margin: auto;
  }

  .img-center-map {
    height: 70px;
    /*margin-right: 100%;*/
    margin-bottom: -20px;
    /*transform:skew(60deg,-30deg);*/
    /*margin-left: 0px;*/
  }

  .img-center-map1 {
    height: 60px;
    transform:skew(58deg,-30deg) translate(13px,-26px);
    /*margin-left: 14px;*/
  }

  .img-center-map2 {
    height: 50px;
    margin-right: 100%;
    margin-bottom: 10px;
    transform:skew(60deg,-30deg);
    /*margin-left: 28px;*/
  }

  .move-point4 {
    height: 4px;
    width: 3px;
    border-radius: 100%;
    background-color: greenyellow;
    transform: translate(1px, -1px);
    animation: move2 2s linear infinite;
    z-index: 999;
  }

  .move-point1 {
    height: 4px;
    width: 3px;
    border-radius: 100%;
    background-color: greenyellow;
    transform: translate(1px, -1px);
    animation: move 2.5s linear infinite;
  }

  .move-point2 {
    height: 2px;
    position: absolute;
    width: 2px;
    border-radius: 100%;
    background-color: greenyellow;
    transform: skew(60deg, -30deg) translate(-68px, 113px);
    /*animation: move0 2.7s linear infinite;*/
  }

  .move-point3 {
    height: 4px;
    width: 2px;
    border-radius: 100%;
    background-color: greenyellow;
    transform: translate(1px, -1px);
    /*animation: move1 3s linear infinite;*/
  }

   @keyframes move {
     0% {
       transform: translate(150px, -1px);
     }
     50% {
       transform: translate(0px, -1px);
     }
     100% {
       transform: translate(-2px, -80px);
     }
   }

  @keyframes move0 {
    /*0% {*/
    /*  transform: translate(150px, -1px);*/
    /*}*/
    65% {
      transform:skew(60deg, -30deg) translate(78px, 29px);
    }
    100% {
      transform: skew(60deg, -30deg) translate(117px, 51px);
    }
  }

  @keyframes move1 {
    0% {
      transform: translate(150px, -1px);
    }
    50% {
      transform: translate(0px, -1px);
    }
    100% {
      transform: translate(-2px, 80px);
    }
  }

  @keyframes move2 {
    0% {
      transform: translate(150px, -1px);
    }
    50% {
      transform: translate(0px, -1px);
    }
    100% {
      transform: translate(-2px, 160px);
    }
  }

</style>
