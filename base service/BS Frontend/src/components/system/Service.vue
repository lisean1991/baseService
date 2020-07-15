<template>
  <div class="servicecontent">
    <div class="boxHeader">
      <span class="box-text">服务概况</span>
      <div class="box-border box-border-left-top"></div>
      <div class="box-border box-border-left-bottom"></div>
      <div class="box-border box-border-right-top"></div>
      <div class="box-border box-border-right-bottom"></div>
    </div>
    <div class="online-box">
      <div class="current-online-box">
        <div class="online-box-pic"></div>
        <div class="online-box-space"></div>
        <div class="online-box-info">
          <p class="online-box-text">当前在线人数</p>
          <p class="online-box-number">{{currentChoose.currentOnline}}</p>
        </div>
      </div>
      <div class="max-online-box">
        <div class="online-box-pic"></div>
        <div class="online-box-space"></div>
        <div class="online-box-info">
          <p class="online-box-text">最高在线人数</p>
          <p class="online-box-number">{{currentChoose.maxOnline}}</p>
        </div>
      </div>
    </div>
    <div class="line-box">
      页面会话连接数
      <div id="chartLine" style="width:100%; height:80%;"></div>
    </div>
    <div class="response-time-content">
      <div class="response-time-box">
        <div class="response-time-info">
          <div class="time-instance-box">
            <div :key='count+"response1"' v-for="count in 15" :class="15 - count < currentChoose.serviceResTime? 'time-instance1' : 'time-instance'"></div>
          </div>
          系统服务响应时长
        </div>
        <div class="response-time-percent">
          <div :style="currentChoose.SysResPercent >= 0 ? 'height: calc( 80% - 26px)':'height: calc( 80% - 36px)'"></div>
          <div :class="currentChoose.SysResPercent >= 0 ? 'arrow-up arrow-box arrow-color' +currentChoose.SysResLevel:'arrow-down arrow-box arrow-color' + currentChoose.SysResLevel"></div>
          <div :class="currentChoose.SysResPercent >= 0 ? 'prcentup' : 'prcent'">{{currentChoose.SysResPercent >= 0 ? currentChoose.SysResPercent + "%" : Math.abs(currentChoose.SysResPercent)+ "%"}}</div>
        </div>
      </div>
      <div class="response-time-box">
        <div class="response-time-info">
          <div class="time-instance-box">
            <div :key='count+"response1"' v-for="count in 15" :class="15 - count < currentChoose.dbResTime ? 'time-instance1' : 'time-instance'"></div>
          </div>
          数据库响应时长
        </div>
        <div class="response-time-percent">
          <div :style="currentChoose.DbResPercent >= 0 ? 'height: calc( 80% - 26px)':'height: calc( 80% - 36px)'"></div>
          <div :class="currentChoose.DbResPercent >= 0 ? 'arrow-up arrow-box arrow-color' + currentChoose.DbResLevel:'arrow-down arrow-box arrow-color' + currentChoose.DbResLevel"></div>
          <div :class="currentChoose.DbResPercent >= 0 ? 'prcentup' : 'prcent'">{{currentChoose.DbResPercent >= 0 ? currentChoose.DbResPercent + "%" : Math.abs(currentChoose.DbResPercent)+ "%"}} </div>
        </div>
      </div>
    </div>
    <div class="lb-box">
      <div class="point-text">{{currentChoose.name}}</div>
      <div class="left-border"></div>
      <div class="right-border"></div>
      <div class="point-box">
        <div :key="sy.id" v-for="sy in systemList" :class="sy.id === currentChoose.id ? 'point-choose' : 'point'"></div>
      </div>
    </div>
    <div class="end-line"></div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import echarts from 'echarts'

export default {
  data () {
    return {
      chartLine: null,
      currentCarouselIndex: 0
    }
  },
  computed: {
    ...mapState({
      currentChoose: state => state.ServiceInfo.currentChoose,
      systemList: state => state.ServiceInfo.systemList
    })
  },
  methods: {
    ...mapActions('ServiceInfo', [
      'getChooseSystemInfo',
      'getAllSystemInfo'
    ]),
    drawLineChart () {
      this.chartLine = echarts.init(document.getElementById('chartLine'))
      this.chartLine.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            color: 'white'
          },
          axisLine: {
            lineStyle: {
              color: 'darkslateblue',
              width: 1
            }
          },
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        grid: {
          left: '0',
          bottom: '0',
          top: '10px',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'darkslateblue',
              width: 1
            }
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: [{
          radius: '80%',
          data: this.currentChoose.connectNumber,
          type: 'line',
          areaStyle: {
            color: 'lightskyblue',
            origin: 'start'
          },
          itemStyle: {
            normal: {
              color: 'white',
              lineStyle: {
                color: 'dodgerblue',
                width: 3
              }
            }
          },
          smooth: true
        }]
      })
    },
    carousel () {
      this.currentCarouselIndex = this.currentCarouselIndex + 1 >= this.systemList.length ? 0 : this.currentCarouselIndex + 1
      this.getChooseSystemInfo(this.systemList[this.currentCarouselIndex].id)
      setTimeout(this.carousel, 3000)
    }
  },

  mounted () {
    this.drawLineChart()
    setTimeout(this.carousel, 3000)
  },

  beforeUpdate () {
    this.drawLineChart()
  },

  created () {
    this.getAllSystemInfo()
  }
}
</script>

<style>
  @import "../../assets/style.css";
  .servicecontent {
    height: calc(50% - 20px);
    margin: 0px 20px 20px 20px;
  }

  .online-box {
    display: flex;
    margin-left: 5px;
    margin-top: 10px;
    margin-right: 5px;
  }

  .current-online-box {
    /*border: 1px solid blue;*/
    background-color: darkslateblue;
    height: 40px;
    width: calc(50% - 3px);
    border-radius: 2px;
    display: flex;
    position: relative;
  }

  .max-online-box {
    /*border: 1px solid blue;*/
    height: 40px;
    background-color: darkslateblue;
    width: calc(50% - 3px);
    margin-left: 6px;
    border-radius: 2px;
    display: flex;
    position: relative;
  }

  .online-box-pic {
    height: 100%;
    width: 40%;
  }

  .online-box-space {
    position: absolute;
    height: 30px;
    width: 1px;
    background-color: royalblue;
    top: 5px;
    left: 40%;
  }

  .online-box-info {
    height: 100%;
    width: 60%;
  }

  .online-box-number {
    margin: 0;
    text-align: center;
    font-size: 14px;
    line-height: 27px;
  }

  .online-box-text {
    margin: 0;
    text-align: center;
    font-size: 8px;
    margin-top: 4px;
  }

  .line-box{
    height: 30%;
    margin: 10px 5px 0 5px;
    position: relative;
  }

  .response-time-content {
    height: 30%;
    margin: 10px 5px 0 5px;
    display: flex;
  }

  .response-time-box {
    width: 50%;
    display: flex;
    font-size: 8px;
    text-align: center;
  }

  .response-time-info {
    width: 60%;
    height: 100%;
  }

  .response-time-percent {
    width: 40%;
    height: 100%;
  }

  .time-instance {
    width: 70%;
    height: 5px;
    margin: 2px 15% 0 15%;
    background-color: dodgerblue;
    opacity: 0.3;
    border-radius: 2px;
  }


  .time-instance1 {
    width: 70%;
    height: 5px;
    margin: 2px 15% 0 15%;
    background-image: linear-gradient(dodgerblue,lightskyblue);
    border-radius: 2px;
  }

  .time-instance-box {
    height: 80%;
  }

  .arrow-box {
    width: 10px;
    height: 10px;
    margin: 0 10px;
    /*background-color: orange;*/
    position: relative;
  }

  .prcent {
    text-align: left;
    height: 10px;
    margin-top: 14px;
    margin-left: 8px;
  }

  .prcentup {
    text-align: left;
    height: 10px;
    margin-top: 4px;
    margin-left: 8px;
  }

  .arrow-down:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    top: 100%;
    border: solid transparent;
    border-width: 10px;
    margin-left: -10px;
    border-top-color: orange;
  }

  .arrow-up:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    top: -200%;
    border: solid transparent;
    border-width: 10px;
    margin-left: -10px;
    border-bottom-color: orange;
  }

  .lb-box {
    height: 30px;
    font-size: 8px;
    margin: 0px 25%;
    text-align: center;
    width: 50%;
    margin-top: -5px;
    position: relative;
    border-bottom: 1px solid darkslateblue;
    border-top: 1px solid darkslateblue;
  }

  .right-border {
    position: absolute;
    height: 30px;
    width: 30px;
    top: 0;
    left: -30px;
    border-bottom: 1px solid darkslateblue;
  }

  .right-border::before{
    content:"";
    position:absolute;
    left:-6px;
    bottom:15px;
    width:43px;
    height:0px;
    box-sizing:border-box;
    border-bottom:1px solid darkslateblue;
    /*transform-origin:bottom center;*/
    transform:rotate(135deg);

  }

  .left-border {
    position: absolute;
    height: 30px;
    width: 30px;
    top: 0;
    right: -30px;
    border-bottom: 1px solid darkslateblue;
  }

  .left-border::before{
    content:"";
    position:absolute;
    right:-6px;
    bottom:15px;
    width:43px;
    height:0px;
    box-sizing:border-box;
    border-bottom:1px solid darkslateblue;
    /*transform-origin:bottom center;*/
    transform:rotate(45deg);
  }

  .point-box {
    height: 17px;
    width: 100%;
    display: flex;
  }

  .point-text {
    height: 10px;
    margin-top: 2px;
    line-height: 10px;
  }

  .point {
    height: 7px;
    width: 7px;
    margin: auto;
    border-radius: 100%;
    background-color: rgba(255,255,255,0.3);
  }

  .point-choose {
    height: 8px;
    width: 8px;
    margin: auto;
    border-radius: 100%;
    background-color: white;
  }

  .arrow-color0 {
    background-color: lightskyblue;
  }

  .arrow-color0.arrow-down:before {
    border-top-color: lightskyblue;
  }
  .arrow-color0.arrow-up:before {
    border-bottom-color: lightskyblue;
  }

  .arrow-color1 {
    background-color: orange;
  }

  .arrow-color1.arrow-down:before {
    border-top-color: orange;
  }
  .arrow-color1.arrow-up:before {
    border-bottom-color: orange;
  }

  .arrow-color2 {
    background-color: red;
  }

  .arrow-color2.arrow-down:before {
    border-top-color: red;
  }
  .arrow-color2.arrow-up:before {
    border-bottom-color: red;
  }
</style>
