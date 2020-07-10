<template>
  <div class="headerContent">
    <div class="headerTitile">营销系统运行工况全景展示</div>
    <div class="headerNumber">安全运行 第 {{runDateNumber}} 天</div>
    <div class="headerTimeLocation">{{currenttime.date}} <span class="headerTime">{{currenttime.time}}</span> {{systemLocation}}</div>
    <div class="headerLogout">X</div>
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
  }

  .headerNumber {
    width: 66%;
    font-size: 24px;
    font-weight: bold;
  }

  .headerTimeLocation {
    width: 17%;
    font-size: 12px;
  }

  .headerTime{
    font-size: 16px;
  }

  .headerLogout {

  }
</style>
