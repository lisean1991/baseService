<template>
  <div class="systemcontent">
    <div class="boxHeader">
      <span class="box-text">系统概况</span>
      <div class="box-border box-border-left-top"></div>
      <div class="box-border box-border-left-bottom"></div>
      <div class="box-border box-border-right-top"></div>
      <div class="box-border box-border-right-bottom"></div>
    </div>
    <div class="system-number">
      <div class="system-number-left"></div>
      <div class="system-number-center">
        <div v-if="systemNumber <= 10"  class="system-instance-box">
          <div :key='count+"system"' v-for="count in systemNumber " class="system-instance"></div>
        </div>
        <div v-if="systemNumber <= 20 && systemNumber > 10" class="system-instance-box">
          <div :key='count+"system"' v-for="count in systemNumber " class="system-instance1"></div>
        </div>
        <div v-if="systemNumber > 20" class="system-instance2-box">
          <div :key='count+"system"' v-for="count in 20 " class="system-instance2"></div>
          <div :key='count+"system1"' v-for="count in (systemNumber - 20) " class="system-instance2"></div>
        </div>
      </div>
      <div class="system-number-right">
        <p class="system-number-right-text1">{{systemNumber}}套</p>
        <p class="system-number-right-text2">接入系统总数</p>
      </div>
    </div>
    <div class="system-number">
      <div class="system-number-left"></div>
      <div class="system-number-center">
        <div v-if="serviceNumber <= 10"  class="system-instance-box">
          <div :key='count+"serviceNumber"' v-for="count in serviceNumber " class="system-instance"></div>
        </div>
        <div v-if="serviceNumber <= 20 && serviceNumber > 10" :key='count' v-for="count in serviceNumber " class="system-instance1"></div>
        <div v-if="serviceNumber > 20" :key='count+"serviceNumber"' v-for="count in serviceNumber " class="system-instance2-box">
          <div :key='count+"serviceNumber"' v-for="count in 20 " class="system-instance2"></div>
          <div :key='count+"serviceNumber1"' v-for="count in (serviceNumber - 20) " class="system-instance2"></div>
        </div>
      </div>
      <div class="system-number-right">
        <p class="system-number-right-text1">{{serviceNumber}}台</p>
        <p class="system-number-right-text2">服务器数量</p>
      </div>
    </div>
    <div class="jszd-number">缴费终端数量
      <div id="chartPie" style="width:100%; height:100%;"></div>
      <div class="lagend">
        POS终端: {{terminalData.POS}}<br/>
        ATM终端: {{terminalData.ATM}}<br/>
        VTM终端: {{terminalData.VTM}}<br/>
        其他终端: {{terminalData.OHTER}}
      </div>
    </div>
    <div class="system-number">
      <div class="person-number-left">
        <p class="person-text1 personText">注册用户数</p>
        <p class="system-number-right-text2 personText">{{personNumber}}</p>
      </div>
      <div class="person-number-center">
        <div :key='count+"personNumber"' v-for="count in 13 " class="person-instance"></div>
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
      chartPie: null
    }
  },
  computed: {
    ...mapState({
      systemNumber: state => state.SystemInfo.systemNumber,
      serviceNumber: state => state.SystemInfo.serviceNumber,
      personNumber: state => state.SystemInfo.personNumber,
      terminalData: state => state.SystemInfo.terminalData
    })
  },
  methods: {
    ...mapActions('SystemInfo', [
      'getSystemData',
      'getTerminalData'
    ]),
    getPercent (num) {
      return Math.round(num*100/(this.terminalData.POS + this.terminalData.ATM +this.terminalData.VTM+this.terminalData.OHTER)) + "%"
    },
    drawPieChart () {
      this.chartPie = echarts.init(document.getElementById('chartPie'));
      this.chartPie.setOption({
        color: ['palegreen', 'lightgrey', 'lightskyblue', 'royalblue'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '60%',
            selectedMode: false,
            center: ['50%', '52%'],
            hoverAnimation: false,
            minAngle: 12,
            data: [
              {value: this.terminalData.POS, name: 'POS终端' + this.getPercent(this.terminalData.POS)},
              {value: this.terminalData.ATM, name: 'ATM终端' + this.getPercent(this.terminalData.ATM)},
              {value: this.terminalData.VTM, name: 'VTM终端' + this.getPercent(this.terminalData.VTM)},
              {value: this.terminalData.OHTER, name: '其他终端' + this.getPercent(this.terminalData.OHTER)}
            ].sort((a, b) => a.value - b.value),
            itemStyle: {
              emphasis: {
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            labelLine: {
              normal: {
                length: 8,
                length2: 50,
                smooth: 0
              }
            },
            label: {
              textStyle: {
                color: 'white',
                fontSize: 6
              },
              alignTo: 'none',
              formatter: '{b}\n\n',
              borderWidth: 20,
              borderRadius: 4,
              padding: [0, -42]
            }
          }
        ]
      })
    }
  },

  mounted () {
    this.drawPieChart()
  },

  beforeUpdate () {
    this.drawPieChart()
  },

  created () {
    this.getSystemData()
    this.getTerminalData()
  }
}
</script>

<style>
  .systemcontent {
    height: calc(50% - 20px);
    margin: 20px 20px 0 20px;
  }

  .system-number {
    display: flex;
    margin-left: 5px;
    margin-top: 10px;
    margin-right: 5px;
    border-radius: 2px;
  }

  .system-number-left {
    border: 1px solid darkslateblue;
    height: 40px;
    width: 40px;
    border-radius: 2px;
  }

  .system-number-right {
    border: 1px solid darkslateblue;
    height: 40px;
    width: 50px;
    margin-left: -1px;
    display: block;
    font-size: 8px;
    border-radius: 2px;
  }
  .system-number-center {
    border: 1px solid darkslateblue;
    height: 40px;
    width: calc( 100% - 92px);
    margin-left: -1px;
    display: flex;
  }

  .person-number-left {
    height: 40px;
    font-size: 8px;
    width: 40px;
    border-radius: 2px;
  }

  .person-number-center{
    height: 40px;
    width: calc( 100% - 42px);
    display: flex;
  }

  .system-instance-box {
    margin: 3px auto;
    display: inline-block;
    font-size: 0;
    width: 140px;
    height: calc(100% - 6px);
  }

  .system-instance2-box {
    margin: 1px auto;
    display: inline-block;
    font-size: 0;
    width: 140px;
    height: calc(100% - 6px);
  }

  .system-instance {
    width: calc( 10% - 4px );
    /*width: 10%;*/
    height: 34px;
    background-image: linear-gradient(dodgerblue,lightskyblue);
    margin: 0 2px;
    border-radius: 3px;
    display: inline-table;
  }

  .system-instance1 {
    width: calc( 5% - 2px );
    height: 34px;
    background-image: linear-gradient(dodgerblue,lightskyblue);
    margin:  0 1px;
    border-radius: 1px;
    display: inline-table;
  }

  .system-instance2 {
    width: calc( 5% - 2px );
    height: 17px;
    background-image: linear-gradient(dodgerblue,lightskyblue);
    margin:  1px;
    border-radius: 1px;
    display: inline-table;
  }

  .person-instance {
    width: calc( 7.7% - 6px );
    /*width: 10%;*/
    height: 30px;
    background: url("../../assets/img/Comm_icon_01_on.png");
    background-size:100% 100%;
    margin: 6px 3px;
    display: inline-table;
  }

  .system-number-right-text1 {
    margin: 4px 0 0 0;
  }

  .person-text1 {
    margin: 5px 0 0 0;
  }

  .system-number-right-text2 {
    margin: 0;
  }

  .personText {
    line-height: 15px;
    text-align: right;
  }

  .jszd-number{
    height: 50%;
    margin-top: 10px;
    position: relative;
  }

  .lagend {
    position: absolute;
    height: 50px;
    width: 80px;
    top: 20px;
    left: 0;
    font-size: 8px;
  }
</style>
