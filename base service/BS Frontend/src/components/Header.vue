<template>
  <div class="headerContent">
    <div class="headerTitile">
      <div class="headerTitileText">营销系统运行工况全景展示</div>
      <img class="img-logo" src="../assets/img/Top_logo.png"/>
    </div>
    <div class="headerNumber">
      <div class="headerNumber-text">安全运行 第 {{runDateNumber}} 天</div>
      <img class="img-center" src="../assets/img/Top_center.png"/>
    </div>
    <div class="headerTimeLocation">
      <div class="headerNumber-end">{{currenttime.date}} <span class="headerTime">{{currenttime.time}}</span> {{systemLocation}}</div>
      <img class="img-end" src="../assets/img/Top_Qout.png"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import utils from '../util/utils'

export default {
  data: function () {
    return {
      currenttime: {
        date: '1997-01-01',
        time: '00:00:00'
      }
    }
  },
  computed: {
    ...mapState({
      runDateNumber: state => state.PublicInfo.runDateNumber,
      systemDate: state => state.PublicInfo.systemDate.toLocaleString(),
      systemLocation: state => state.PublicInfo.systemLocation
    })
  },
  methods: {
    ...mapActions('PublicInfo', [
      'getPublicData'
    ]),
    getCurrentTime () {
      this.currenttime = utils.formatLocalDateTime(Date.now())
      setTimeout(this.getCurrentTime, 1000)
    }
  },

  created () {
    this.getPublicData()
    this.getCurrentTime()
  }
}
</script>

<style>
  .headerContent {
    display: flex;
    text-align: center;
    line-height: 40px;
    color: #ffffff;
  }

  .headerTitile {
    width: 17%;
    font-size: 12px;
    height: 40px;
    position: relative;
  }

  .headerTitileText {
    position: absolute;
    top: 23%;
    left: 37%;
  }

  .headerNumber {
    width: 66%;
    font-size: 24px;
    font-weight: bold;
    position: relative;
  }

  .headerNumber-text {
    position: absolute;
    top: 12%;
    left: 40%;
  }

  .headerNumber-end {
    position: absolute;
    top: 10%;
    left: 30%;
    font-size: 10px;
  }

  .headerTimeLocation {
    width: 17%;
    font-size: 10px;
    position: relative;
  }

  .headerTime{
    font-size: 12px;
  }

  .headerLogout {

  }

  .img-logo {
    height: 55px;
    padding-top: 4px;
    margin-left: 16px;
    width: 100%;
  }

  .img-center {
    height: 55px;
    /*margin-left: -7px;*/
    width: 100%;
  }

  .img-end {
    height: 52px;
    padding-top: 8px;
    margin-left: -6%;
    width: 100%;
  }
</style>
