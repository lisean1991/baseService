<template>
  <div class="run-content">
    <div class="boxHeader">
      <span class="box-text">运行工程</span>
      <div class="box-border box-border-left-top"></div>
      <div class="box-border box-border-left-bottom"></div>
      <div class="box-border box-border-right-top"></div>
      <div class="box-border box-border-right-bottom"></div>
    </div>
    <div class="chart-box">
      <div id="chartGauge1" style="width:100%; height:100%;"></div>
      <div id="chartGauge" style="width:100%; height:100%;"></div>
    </div>
    <div class="store-rate-box">存储使用率
      <div class="store-rate-box-item">
        <div class="store-rate-box-content" :style="'width:'+ currentChoose.storeRate * 100 + '%'"></div>
      </div>
    </div>
    <div class="other-rate">
      <div class="other-rate-item">
        <div class="other-rate-box">
          <div class="other-rate-content">{{currentChoose.storeIO}}</div>
        </div>
        <div class="other-rate-title">存储IO</div>
      </div>
      <div class="other-rate-item">
        <div class="other-rate-box">
          <div class="other-rate-content">{{currentChoose.processNumber}}</div>
        </div>
        <div class="other-rate-title">进程数量</div>
      </div>
      <div class="other-rate-item">
        <div class="other-rate-box">
          <div class="other-rate-content">{{currentChoose.jdbcNumber}}</div>
        </div>
        <div class="other-rate-title">JDBC连接数</div>
      </div>
    </div>
    <div class="lb-box lb-box-local">
      <div class="point-text">{{currentChoose.name}}</div>
      <div class="left-border"></div>
      <div class="right-border"></div>
      <div class="point-box">
        <div :key="sy.id" v-for="sy in systemRunList" :class="sy.id === currentChoose.id ? 'point-choose' : 'point'"></div>
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
      chartGauge: null,
      chartGauge1: null,
      currentCarouselIndex: 0
    }
  },
  computed: {
    ...mapState({
      currentChoose: state => state.Runtime.currentChoose,
      systemRunList: state => state.Runtime.systemRunList
    })
  },
  methods: {
    ...mapActions('Runtime', [
      'getRunSystemDataById',
      'getAllRunSystemData'
    ]),
    drawLineChart () {
      this.chartGauge = echarts.init(document.getElementById('chartGauge'))
      this.chartGauge1 = echarts.init(document.getElementById('chartGauge1'))

      let option = {
        title: {
          show: true,
          text: '内存使用率',
          left: 'center',
          bottom: '0',
          textStyle: {
            fontSize: 8,
            fontWeight: 'normal',
            color: '#fff'
          }
        },
        series: [{
          name: '内存',
          type: 'gauge',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          radius: '80%',
          axisLine: {
            lineStyle: {
              color: [
                [0.25, '#00ff00'],
                [0.75, '#1e90ff'],
                [1, '#ff4500']
              ],
              width: 10
            }
          },
          axisLabel: {
            show: false
          },
          pointer: {
            shadowColor: '#fff',
            shadowBlur: 15,
            width: 4
          },
          detail: {
            offsetCenter: [0, '60%'],
            formatter: '{value}%',
            textStyle: {
              fontWeight: 'bolder',
              color: '#fff',
              fontSize: 12
            }
          },
          data: [{value: this.currentChoose.cacheRate, name: ''}]
        }]
      }

      let option1 = {
        title: {
          show: true,
          text: 'CPU使用率',
          left: 'center',
          bottom: '0',
          textStyle: {
            fontSize: 8,
            fontWeight: 'normal',
            color: '#fff'
          }
        },
        series: [{
          name: '内存',
          type: 'gauge',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          radius: '80%',
          axisLine: {
            lineStyle: {
              color: [
                [0.25, '#00ff00'],
                [0.75, '#1e90ff'],
                [1, '#ff4500']
              ],
              width: 10
            }
          },
          axisLabel: {
            show: false
          },
          pointer: {
            shadowColor: '#fff',
            shadowBlur: 15,
            width: 4
          },
          detail: {
            offsetCenter: [0, '60%'],
            formatter: '{value}%',
            textStyle: {
              fontWeight: 'bolder',
              color: '#fff',
              fontSize: 12
            }
          },
          data: [{value: this.currentChoose.cpuRate, name: ''}]
        }]
      }

      this.chartGauge1.setOption(option)

      this.chartGauge.setOption(option1)
    },
    carousel () {
      this.currentCarouselIndex = this.currentCarouselIndex + 1 >= this.systemRunList.length ? 0 : this.currentCarouselIndex + 1
      this.getRunSystemDataById(this.systemRunList[this.currentCarouselIndex].id)
      setTimeout(this.carousel, 3000)
    }
  },
  beforeUpdate () {
    this.drawLineChart()
  },
  mounted () {
    this.drawLineChart()
    setTimeout(this.carousel, 3000)
  },
  created () {
    this.getAllRunSystemData();
  }
}
</script>

<style>
  .run-content {
    height: calc(40% - 20px);
    margin: 20px 20px 0 20px;
  }

  .chart-box{
    height: 30%;
    margin: 10px 5px 0 5px;
    position: relative;
    display: flex;
  }

  .store-rate-box{
    height: 40px;
    margin: 20px 5px 0 5px;
    font-size: 8px;
  }

  .store-rate-box-item {
    margin-top: 4px;
    height: 25px;
    border-radius: 8px;
    width: 100%;
    border: 1px solid dodgerblue;
  }

  .store-rate-box-content{
    height: 25px;
    border-radius: 8px;
    background-color: lightskyblue;
  }

  .other-rate{
    height: 80px;
    display: flex;
    margin: 20px 5px 0 5px;
  }

  .other-rate-item{
    width: 60px;
    margin: auto;
  }

  .other-rate-box{
    width: 56px;
    height: 56px;
    margin: 0 1px;
    display: flex;
    border: 1px solid dodgerblue;
  }

  .other-rate-content{
    font-size: 16px;
    width: 45px;
    height: 45px;
    margin: auto;
    line-height: 42px;
    text-align: center;
    background-color: rgba(0,0,0,0.35);
    border: 1px solid dodgerblue;
  }

  .other-rate-title{
    text-align: center;
    font-size: 8px;
    margin-top: 4px;
  }

  .lb-box-local{
    margin-top: 20px;
  }
</style>
