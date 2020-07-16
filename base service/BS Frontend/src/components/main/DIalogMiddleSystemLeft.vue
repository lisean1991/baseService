<template>
  <div class="dlg-container">
    <div id="chartPieDig" style="width:100%; height:100%;"></div>
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
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        title: {
          text: '资金分布单位',
          textStyle: {
            color: 'lightskyblue',
            fontSize: 6
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['50%', '52%'],
            labelLine: {
              normal: {
                length: 3,
                length2: 6,
                smooth: 0
              }
            },
            label: {
              textStyle: {
                color: 'white',
                fontSize: 4
              },
              alignTo: 'none'
            },
            data: this.system.data
          }
        ]
      }

      this.chartLine = echarts.init(document.getElementById('chartPieDig'))
      this.chartLine.setOption(option)
    }
  },
  mounted () {
    this.draw()
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
