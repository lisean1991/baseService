<template>
  <div class="main-container" id="main-container" @click="closeDialog()">
    <div class="main-box-bottom1">
      <img src="../../assets/img/Center_map_icon_06.png" class="img-center-map3 main-box-bottom-item" @click="clickSystem($event,topSystem.level2[0],'top_line_dlg1')"/>
      <img src="../../assets/img/Center_map_icon_07.png" class="img-center-map3 main-box-bottom-item" @click="clickSystem($event,topSystem.level2[1],'top_line_dlg2')"/>
      <img src="../../assets/img/Center_map_icon_08.png" class="img-center-map3 main-box-bottom-item" @click="clickSystem($event,topSystem.level2[2],'top_line_dlg3')"/>
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
      <div :class="top_line_class" v-if="topSystem.level2[0].id === showSystem || topSystem.level2[1].id === showSystem || topSystem.level2[2].id === showSystem"></div>
      <div class="img-dlg-top" v-if="topSystem.level2[0].id === showSystem || topSystem.level2[1].id === showSystem || topSystem.level2[2].id === showSystem">
        <DialogBottomSystem></DialogBottomSystem>
      </div>
    </div>
    <div class="main-box-bottom2">
      <img src="../../assets/img/Center_map_icon_09.png" class="img-center-map3 main-box-bottom-item" @click="clickSystem($event,topSystem.level1[0],'top_line_dlg4')"/>
      <img src="../../assets/img/Center_map_icon_10.png" class="img-center-map3 main-box-bottom-item" @click="clickSystem($event,topSystem.level1[1],'top_line_dlg5')"/>
      <img src="../../assets/img/Center_map_icon_12.png" class="img-center-map3 main-box-bottom-item" @click="clickSystem($event,topSystem.level1[2],'top_line_dlg6')"/>
      <div :class="top_line_class" v-if="topSystem.level1[0].id === showSystem || topSystem.level1[1].id === showSystem || topSystem.level1[2].id === showSystem"></div>
      <div class="img-dlg-top1" v-if="topSystem.level1[0].id === showSystem || topSystem.level1[1].id === showSystem || topSystem.level1[2].id === showSystem">
        <DialogBottomSystem></DialogBottomSystem>
      </div>
    </div>
    <div class="main-box-bottom3">
      <div class="main-box-bottom-item1">
        <img src="../../assets/img/Center_map_icon_01.png" class="img-center-map2" @click="clickSystem($event,middleSystem[0])"/>
        <div class="img-line31"></div>
        <div class="img-line-dlg-mid" v-if="middleSystem[0].id === showSystem"></div>
        <div class="img-dlg-mid" v-if="middleSystem[0].id === showSystem">
          <DIalogMiddleSystemLeft :system="cleckedSystem"></DIalogMiddleSystemLeft>
        </div>
      </div>
      <div class="main-box-bottom-item1">
        <img src="../../assets/img/Center_map_icon_02.png" class="img-center-map2" @click="clickSystem($event,middleSystem[1])"/>
        <div class="img-line32"></div>
        <div class="img-line-dlg-mid" v-if="middleSystem[1].id === showSystem"></div>
        <div class="img-dlg-mid" v-if="middleSystem[1].id === showSystem">
          <DialogBottomSystem></DialogBottomSystem>
        </div>
      </div>
      <div class="main-box-bottom-item1">
        <img src="../../assets/img/Center_map_icon_03.png" class="img-center-map2" @click="clickSystem($event,middleSystem[2])"/>
        <div class="img-line33"></div>
        <div class="img-line-dlg-mid1" v-if="middleSystem[2].id === showSystem"></div>
        <div class="img-dlg-mid1" v-if="middleSystem[2].id === showSystem">
          <DialogBottomSystem></DialogBottomSystem>
        </div>
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
      <div v-for="(systems, index) in bottomSystem" :key="index+'systems'" class="main-box-bottom-item">
        <div v-for="system in systems" :key="system.id" class="img-box" >
          <img src="../../assets/img/Center_map_icon_13.png" class="img-center-map" @click="clickSystem($event,system)"/>
          <div class="img-line"></div>
          <div :class="index < 2 ? 'img-line-dlg':'img-line-dlg-right'" v-if="system.id === showSystem"></div>
          <div :class="index < 2 ? 'img-dlg':'img-dlg-right'" v-if="system.id === showSystem">
            <DialogBottomSystem :system="cleckedSystem"></DialogBottomSystem>
          </div>
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

<script>
import DialogBottomSystem from './DialogBottomSystem'
import DIalogMiddleSystemLeft from './DIalogMiddleSystemLeft'
import {mapState, mapActions} from 'vuex'
const defaultWidth = 1680
const defaultHeight = 939
export default {
  data: () => {
    return {
      showSystem: 0,
      cleckedSystem: {},
      top_line_class: '',
      sizeChange: false
    }
  },
  components: {DialogBottomSystem, DIalogMiddleSystemLeft},
  computed: {
    ...mapState({
      bottomSystem: state => state.Mainpane.bottomSystem,
      middleSystem: state => state.Mainpane.middleSystem,
      topSystem: state => state.Mainpane.topSystem
    })
  },
  methods: {
    ...mapActions('Mainpane', ['getLayerSystemData']),
    scaleScreen: function () {
      this.excuted = true
      this.sizeChange = !this.sizeChange
      let currentWidthRate = window.innerWidth / defaultWidth
      let crrentHeghtRate = window.innerHeight / defaultHeight
      let rate = crrentHeghtRate > currentWidthRate ? currentWidthRate : crrentHeghtRate
      document.getElementById('main-container').style.transform = 'scale(' + rate + ')'
      document.getElementById('main-container').style.transformOrigin = 'bottom'
    },
    clickSystem: function (e, sys, classTop) {
      console.log(this.showSystem)
      this.showSystem = sys.id
      this.cleckedSystem = sys
      this.top_line_class = classTop
      e.stopImmediatePropagation()
    },
    closeDialog: function () {
      if (this.showSystem !== 0) {
        this.showSystem = 0
      }
    }
  },
  mounted () {
    this.excuted = true
    window.addEventListener('resize', function () {
      if (this.excuted) {
        this.excuted = false
        setTimeout(this.scaleScreen, 500)
      }
    }.bind(this))
    // this.scaleScreen()
  },
  created () {
    this.getLayerSystemData()
  },
  updated () {
    this.scaleScreen()
  }
}
</script>

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
    border: 2px solid midnightblue;
    box-shadow: 4px 4px 4px #330033, 11px 6px 4px midnightblue;
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
    border: 2px solid midnightblue;
    box-shadow: 4px 4px 4px #330033, 11px 6px 4px midnightblue;
  }

  .main-box-bottom2 {
    margin-top: 200px;
    height: 60px;
    width: 250px;
    display: flex;
    transform-origin: bottom right;
    transform:skew(-60deg,30deg) translate(394px, -132px);
    position: relative;
    border: 2px solid midnightblue;
    box-shadow: 4px 4px 4px #330033, 11px 6px 4px midnightblue;
  }

  .main-box-bottom1 {
    margin-top: 200px;
    height: 60px;
    width: 250px;
    display: flex;
    transform-origin: bottom right;
    transform:skew(-60deg,30deg) translate(610px, -85px);
    position: relative;
    border: 2px solid midnightblue;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.75), 11px 6px 4px midnightblue;
  }

  .img-box {
    display: flex;
    width: 50px;
    transform:skew(60deg,-30deg);
  }

  .img-line {
    height: 1px;
    background-color: lightblue;
    /*width: 30%;*/
    width: 28px;
    position: absolute;
    transform:skew(-60deg,30deg) scale(-0.4) translate(-152px, -42px);
    margin: auto;
  }

  .img-line1 {
    height: 1px;
    background-color: lightblue;
    /*width: 120%;*/
    width: 152px;
    transform:rotate(90deg) translate(-86px, -28px);
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
    transform: translate(-16px, -38px);
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

  .img-line-dlg {
    position: absolute;
    height: 2px;
    background-color: blue;
    width: 60px;
    box-shadow: 2px 0 2px darkslateblue;
    transform:rotate(60deg) translate(-32px, 3px);
  }

  .img-dlg {
    position: absolute;
    height: 80px;
    width: 120px;
    border: 1px solid blue;
    transform: translate(-126px, -134px);
    box-shadow: 2px 2px 2px darkslateblue;
  }

  .img-line-dlg-right {
    position: absolute;
    height: 2px;
    background-color: blue;
    box-shadow: 2px 0 2px darkslateblue;
    width: 60px;
    transform:rotate(181deg) translate(-44px, -22px);
  }

  .img-dlg-right {
    position: absolute;
    height: 80px;
    width: 120px;
    border: 1px solid blue;
    transform: translate(102px, -58px);
    box-shadow: 2px 2px 2px darkslateblue;
  }

  .img-line-dlg-mid {
    position: absolute;
    height: 2px;
    background-color: blue;
    width: 165px;
    box-shadow: 2px 0 2px darkslateblue;
    transform:rotate(183deg) translate(127px, 30px);
  }

  .img-dlg-mid {
    position: absolute;
    height: 100px;
    width: 140px;
    border: 1px solid blue;
    transform:skew(60deg, -30deg) translate(-89px, -153px);
    box-shadow: 2px 2px 2px darkslateblue;
  }

  .img-line-dlg-mid1 {
    position: absolute;
    height: 2px;
    background-color: blue;
    width: 123px;
    box-shadow: 2px 0 2px darkslateblue;
    transform:rotate(201deg) translate(-28px, 27px);
  }

  .img-dlg-mid1 {
    position: absolute;
    height: 100px;
    width: 140px;
    border: 1px solid blue;
    transform:skew(60deg, -30deg) translate(149px, 53px);
    box-shadow: -2px -2px 2px darkslateblue;
  }

  .img-dlg-top {
    position: absolute;
    height: 80px;
    width: 120px;
    border: 1px solid blue;
    transform:skew(60deg, -30deg) translate(-229px, 3px);
    box-shadow: 2px 2px 2px darkslateblue;
  }

  .img-dlg-top1 {
    position: absolute;
    height: 80px;
    width: 120px;
    border: 1px solid blue;
    transform:skew(60deg, -30deg) translate(-159px, -46px);
    box-shadow: 2px 2px 2px darkslateblue;
  }

  .top_line_dlg1 {
    position: absolute;
    height: 2px;
    background-color: blue;
    width: 154px;
    box-shadow: 2px 0 2px darkslateblue;
    transform:rotate(106deg) translate(127px, 51px);
  }

  .top_line_dlg2 {
    position: absolute;
    height: 2px;
    background-color: blue;
    width: 192px;
    box-shadow: 2px 0 2px darkslateblue;
    transform:rotate(131deg) translate(122px, -25px);
  }

  .top_line_dlg3 {
    position: absolute;
    height: 2px;
    background-color: blue;
    width: 258px;
    box-shadow: 2px 0 2px darkslateblue;
    transform:rotate(146deg) translate(105px, -62px);
  }

  .top_line_dlg4 {
    position: absolute;
    height: 2px;
    background-color: blue;
    width: 89px;
    box-shadow: 2px 0 2px darkslateblue;
    transform:rotate(145deg) translate(85px, -24px);
  }

  .top_line_dlg5 {
    position: absolute;
    height: 2px;
    background-color: blue;
    width: 186px;
    box-shadow: 2px 0 2px darkslateblue;
    transform:rotate(165deg) translate(71px, -53px);
  }

  .top_line_dlg6 {
    position: absolute;
    height: 2px;
    background-color: blue;
    width: 249px;
    box-shadow: 2px 0 2px darkslateblue;
    transform:rotate(169deg) translate(57px, -58px);
  }

</style>
