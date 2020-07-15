<template>
  <div class="main-container">
    <div class="main-box-bottom1">
      <img src="../../assets/img/Center_map_icon_06.png" class="img-center-map3 main-box-bottom-item"/>
      <img src="../../assets/img/Center_map_icon_07.png" class="img-center-map3 main-box-bottom-item"/>
      <img src="../../assets/img/Center_map_icon_08.png" class="img-center-map3 main-box-bottom-item"/>
      <div class="img-line41"></div>
      <div class="img-line42"></div>
      <div class="img-line43"></div>
      <div class="img-line44"></div>
      <div class="img-line45"></div>
      <div class="img-line46"></div>
      <div class="img-line47"></div>
      <div class="move-point21"></div>
      <div class="move-point22"></div>
      <div class="move-point23"></div>
    </div>
    <div class="main-box-bottom2">
      <img src="../../assets/img/Center_map_icon_09.png" class="img-center-map3 main-box-bottom-item"/>
      <img src="../../assets/img/Center_map_icon_10.png" class="img-center-map3 main-box-bottom-item"/>
      <img src="../../assets/img/Center_map_icon_12.png" class="img-center-map3 main-box-bottom-item"/>
    </div>
    <div class="main-box-bottom3">
      <div class="main-box-bottom-item1">
        <img src="../../assets/img/Center_map_icon_01.png" class="img-center-map2"/>
        <div class="img-line31"></div>
      </div>
      <div class="main-box-bottom-item1">
        <img src="../../assets/img/Center_map_icon_02.png" class="img-center-map2"/>
        <div class="img-line32"></div>
      </div>
      <div class="main-box-bottom-item1">
        <img src="../../assets/img/Center_map_icon_03.png" class="img-center-map2"/>
        <div class="img-line33"></div>
      </div>
      <div class="middle-point1">
        <img src="../../assets/img/Center_map_icon_05.png" class="img-center-map1"/>
      </div>
      <div class="img-line34"></div>
      <div class="img-line35"></div>
      <div class="img-line36"></div>
      <div class="img-line37"></div>
      <div class="img-line38"></div>
      <div class="move-point11"></div>
      <div class="move-point12"></div>
      <div class="move-point13"></div>
      <div class="move-point14"></div>
    </div>
    <div class="main-box-bottom">
      <div v-for="count in 4" :key="count+'bottom'" class="main-box-bottom-item">
        <div v-for="count1 in 3" :key="count1+'bottom1'" class="img-box">
          <img src="../../assets/img/Center_map_icon_13.png" class="img-center-map"/>
          <div class="img-line"></div>
        </div>
        <div class="img-line1"></div>
      </div>
      <div class="img-line2"></div>
      <div class="middle-point">
        <img src="../../assets/img/Center_map_icon_05.png" class="img-center-map1"/>
      </div>
      <div class="move-point1"></div>
      <div class="move-point2"></div>
      <div class="move-point3"></div>
      <div class="move-point4"></div>
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
    height: 130px;
    width: 530px;
    display: flex;
    transform-origin: bottom right;
    transform:skew(-60deg,30deg) translate(-9px, 9px) scale(0.9);
    position: relative;
    border: 2px solid darkslateblue;
    /*border-bottom: 2px solid darkslateblue;*/
    /*border-left: 2px solid darkslateblue;*/
    /*border-right: 2px solid darkslateblue;*/
  }

  .main-box-bottom3 {
    margin-top: 200px;
    height: 80px;
    height: 80px;
    width: 500px;
    display: flex;
    transform-origin: bottom right;
    transform:skew(-60deg,30deg) translate(188px, -46px) scale(0.9);
    position: relative;
    border: 2px solid darkslateblue;
  }

  .main-box-bottom2 {
    margin-top: 200px;
    height: 60px;
    width: 250px;
    display: flex;
    transform-origin: bottom right;
    transform:skew(-60deg,30deg) translate(394px, -132px);
    position: relative;
    border: 2px solid darkslateblue;
  }

  .main-box-bottom1 {
    margin-top: 200px;
    height: 60px;
    width: 250px;
    display: flex;
    transform-origin: bottom right;
    transform:skew(-60deg,30deg) translate(610px, -85px);
    position: relative;
    border: 2px solid darkslateblue;
  }

  .img-box {
    display: flex;
    transform:skew(60deg,-30deg);
  }

  .img-line {
    height: 1px;
    background-color: lightblue;
    width: 30%;
    transform:skew(-60deg,30deg) scale(-0.4) translate(-21px, -55px);
    margin: auto;
  }

  .img-line1 {
    height: 1px;
    background-color: lightblue;
    /*width: 120%;*/
    width: 150%;
    transform:rotate(90deg) translate(-71px, -30px);
    /*margin: auto;*/
  }

  .img-line2 {
    height: 1px;
    position: absolute;
    width: 398px;
    background-color: lightblue;
    /*width: 120%;*/
    transform:translate(105px, -49px);
    /*margin: auto;*/
  }

  .img-line31 {
    height: 1px;
    background-color: lightblue;
    width: 23%;
    transform:rotate(90deg) translate(-12px, -48px);
  }

  .img-line32 {
    height: 1px;
    background-color: lightblue;
    width: 29%;
    transform:rotate(90deg) translate(-15px, -29px);
  }

  .img-line33 {
    height: 1px;
    background-color: lightblue;
    width: 31%;
    transform:rotate(90deg) translate(-16px, -24px);
  }

  .img-line34 {
    height: 1px;
    position: absolute;
    width: 315px;
    background-color: lightblue;
    transform:translate(105px, 85px);
  }

  .img-line35 {
    position: absolute;
    height: 1px;
    background-color: lightblue;
    width: 24%;
    transform: skew(-60deg,30deg) translate(202px, -14px) scale(0.5);
  }

  .img-line36 {
    position: absolute;
    height: 1px;
    background-color: lightblue;
    width: 31%;
    box-shadow: 1px 1px 1px 1px rgba(255,255,255,0.2);
    transform: translate(100px, 43px) scale(0.5);
  }

  .img-line37 {
    position: absolute;
    height: 1px;
    background-color: lightblue;
    width: 40%;
    box-shadow: 1px 1px rgba(255,255,255,0.2);
    transform: translate(222px, 43px) scale(0.5);
  }

  .img-line38 {
    position: absolute;
    height: 1px;
    background-color: lightblue;
    width: 8%;
    transform:rotate(90deg) translate(4px, -220px);
  }

  .img-line41 {
    height: 1px;
    position: absolute;
    width: 25px;
    background-color: lightblue;
    transform:translate(-27px, 25px);
  }

  .img-line42 {
    height: 1px;
    position: absolute;
    width: 25px;
    background-color: lightblue;
    transform:translate(252px, 25px);
  }

  .img-line43 {
    height: 1px;
    position: absolute;
    width: 128px;
    background-color: lightblue;
    transform:rotate(90deg) translate(89px, 91px);
  }

  .img-line44 {
    height: 1px;
    position: absolute;
    width: 128px;
    background-color: lightblue;
    transform:rotate(86deg) translate(104px, -211px);
  }

  .img-line45 {
    height: 1px;
    position: absolute;
    width: 314px;
    background-color: lightblue;
    transform:translate(-27px, 153px);
  }

  .img-line46 {
    height: 1px;
    position: absolute;
    width: 7px;
    background-color: lightblue;
    transform: rotate(90deg) translate(149px, -127px);
  }

  .img-line47 {
    position: absolute;
    height: 1px;
    background-color: lightblue;
    width: 42%;
    transform: skew(-60deg,30deg) translate(198px, 54px) scale(0.5);
  }

  .middle-point {
    position: absolute;
    height: 33px;
    width: 60px;
    border-radius: 10px;
    border: 1px solid lightblue;
    transform: skew(8deg,0deg) translate(209px, -68px);
    background-color: #330033;
  }

  .middle-point1 {
    position: absolute;
    height: 33px;
    width: 60px;
    border-radius: 10px;
    border: 1px solid lightblue;
    transform: skew(8deg,0deg) translate(210px, -50px);
    background-color: #330033;
  }

  .main-box-bottom-item{
    width: 100px;
    height: 100%;
    margin: auto;
    transform: translate(-16px, -53px);
  }

  .main-box-bottom-item1{
    width: 100px;
    height: 100%;
    margin: auto;
    transform: translate(13px,2px);
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
    height: 80px;
    width: 80px;
    transform:skew(60deg,-30deg) translate(7px, -18px);
    /*margin-left: 28px;*/
  }

  .img-center-map3 {
    height: 40px;
    width: 40px;
    transform:skew(60deg,-30deg) translate(0px, -8px);
    /*margin-left: 28px;*/
  }

  .move-point1 {
    height: 2px;
    width: 2px;
    border-radius: 100%;
    background-color: greenyellow;
    position: absolute;
    transform: skew(60deg, -30deg) translate(-35px, 80px);
    animation: move1 2.5s linear infinite;
  }

  .move-point2 {
    height: 2px;
    width: 2px;
    border-radius: 100%;
    background-color: greenyellow;
    position: absolute;
    transform: skew(60deg, -30deg) translate(32px, 118px);
    animation: move2 2.7s linear infinite;
  }

  .move-point3 {
    height: 2px;
    width: 2px;
    border-radius: 100%;
    background-color: greenyellow;
    position: absolute;
    transform: skew(60deg, -30deg) translate(99px, 156px);
    animation: move3 3s linear infinite;
  }

  .move-point4 {
    height: 2px;
    width: 2px;
    border-radius: 100%;
    background-color: greenyellow;
    position: absolute;
    transform: skew(60deg, -30deg) translate(166px, 194px);
    animation: move4 2s linear infinite;

  }

   @keyframes move1 {
     65% {
       transform:skew(60deg, -30deg) translate(95px, 5px);
     }
     100% {
       transform: skew(60deg, -30deg) translate(142px, 32px);
     }
   }

  @keyframes move2 {
    100% {
      transform: skew(60deg, -30deg) translate(148px, 51px);
    }
  }

  @keyframes move3 {
    65% {
      transform: skew(60deg, -30deg) translate(229px, 81px);
    }
    100% {
      transform: skew(60deg, -30deg) translate(174px, 51px);
    }
  }

  @keyframes move4 {
    50% {
      transform: skew(60deg, -30deg) translate(296px, 119px);
    }
    100% {
      transform: skew(60deg, -30deg) translate(174px, 51px);
    }
  }

  .move-point11 {
    height: 2px;
    width: 2px;
    border-radius: 100%;
    background-color: greenyellow;
    position: absolute;
    transform: skew(60deg, -30deg) translate(54px, 148px);
    animation: move11 2.5s linear infinite;
  }

  .move-point12 {
    height: 2px;
    width: 2px;
    border-radius: 100%;
    background-color: greenyellow;
    position: absolute;
    transform: skew(60deg, -30deg) translate(54px, 148px);
    animation: move12 1s linear infinite;
  }

  .move-point13 {
    height: 2px;
    width: 2px;
    border-radius: 100%;
    background-color: greenyellow;
    position: absolute;
    transform: skew(60deg, -30deg) translate(54px, 148px);
    animation: move13 2.5s linear infinite;
  }

  .move-point14 {
    height: 2px;
    width: 2px;
    border-radius: 100%;
    background-color: greenyellow;
    position: absolute;
    transform: skew(60deg, -30deg) translate(132px, 61px);
    animation: move14 1s linear infinite;
  }

  @keyframes move11 {
    30% {
      transform:skew(60deg, -30deg) translate(54px, 116px);
    }
    65% {
      transform:skew(60deg, -30deg) translate(-21px, 72px);
    }
    100% {
      transform: skew(60deg, -30deg) translate(-2px, 61px);
    }
  }

  @keyframes move12 {
    50% {
      transform:skew(60deg, -30deg) translate(54px, 116px);
    }
    100% {
      transform: skew(60deg, -30deg) translate(79px, 101px);
    }
  }

  @keyframes move13 {
    30% {
      transform:skew(60deg, -30deg) translate(54px, 116px);
    }
    65% {
      transform:skew(60deg, -30deg) translate(136px, 163px);
    }
    100% {
      transform: skew(60deg, -30deg) translate(161px, 148px);
    }
  }

  @keyframes move14 {
    100% {
      transform: skew(60deg, -30deg) translate(100px, 80px);
    }
  }

  .move-point21 {
    height: 2px;
    width: 2px;
    border-radius: 100%;
    background-color: greenyellow;
    position: absolute;
    transform: skew(60deg, -30deg) translate(-23px, 11px);
    animation: move21 3.5s linear infinite;
  }

  .move-point22 {
    height: 2px;
    width: 2px;
    border-radius: 100%;
    background-color: greenyellow;
    position: absolute;
    transform: skew(60deg, -30deg) translate(-63px, 111px);
    animation: move22 1s linear infinite;
  }

  .move-point23 {
    height: 2px;
    width: 2px;
    border-radius: 100%;
    background-color: greenyellow;
    position: absolute;
    transform: skew(60deg, -30deg) translate(105px, 85px);
    animation: move23 4s linear infinite;
  }

  @keyframes move21 {
    10% {
      transform:skew(60deg, -30deg) translate(-36px, 4px);
    }
    45% {
      transform:skew(60deg, -30deg) translate(-146px, 68px);
    }
    80% {
      transform:skew(60deg, -30deg) translate(-67px, 115px);
    }
    100% {
      transform: skew(60deg, -30deg) translate(-67px, 142px);
    }
  }

  @keyframes move22 {
    50% {
      transform:skew(60deg, -30deg) translate(-67px, 115px);
    }
    100% {
      transform: skew(60deg, -30deg) translate(-67px, 142px);
    }
  }

  @keyframes move23 {
    10% {
      transform:skew(60deg, -30deg) translate(117px, 92px);
    }
    45% {
      transform:skew(60deg, -30deg) translate(11px, 158px);
    }
    80% {
      transform:skew(60deg, -30deg) translate(-67px, 115px);
    }
    100% {
      transform: skew(60deg, -30deg) translate(-67px, 142px);
    }
  }

</style>
