<template>
  <div class="dlg-container">
    <div id="chartBarDig" style="width:100%; height:100%;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: ['system'],
  data () {
    return {
      chartLine: null
    }
  },
  methods: {
    draw: function () {
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['受理工单数', '处理工单数', '办结工单数'],
          textStyle: {
            color: '#fff',
            fontSize: 5
          },
          itemHeight: 4,
          itemWidth: 3,
          itemGap: 1,
          top: 0,
          left: 5
        },
        grid: {
          left: '0',
          bottom: '0',
          top: '10PX',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['人民网', '微信', '市长信箱', '邮件', '网络', '电话'],
            axisLabel: {
              color: '#fff',
              fontSize: 3,
              margin: 1
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              color: '#fff',
              fontSize: 4,
              margin: 1
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '受理工单数',
            type: 'bar',
            data: this.system.acceptData
          },
          {
            name: '处理工单数',
            type: 'bar',
            data: this.system.handleData
          },
          {
            name: '办结工单数',
            type: 'bar',
            data: this.system.finishData
          }
        ]
      }

      this.chartLine = echarts.init(document.getElementById('chartBarDig'))
      this.chartLine.setOption(option)
    }
  },
  mounted () {
    if (this.system) {
      this.draw()
    }
  }
}
</script>

<style>
  .dlg-container {

    height: 100%;
    width: 100%;
    background-color: #000066;
  }
</style>
