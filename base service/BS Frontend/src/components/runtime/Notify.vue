<template>
  <div class="notify-content">
    <div class="boxHeader">
      <span class="box-text">信息通知</span>
      <div class="box-border box-border-left-top"></div>
      <div class="box-border box-border-left-bottom"></div>
      <div class="box-border box-border-right-top"></div>
      <div class="box-border box-border-right-bottom"></div>
    </div>
    <div class="notify-item">
      <div class="notify-item-box" v-for="msg in notifyList" :key="msg.id">
        <img :src="notyfyIcons[msg.type]" class="notify-item-icon"/>
        <div class="notify-item-text">{{msg.text}}</div>
      </div>
    </div>
    <div class="end-line"></div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      notifyList: [{
        id: 123,
        type: '01',
        text: '编号：134号 服务器发生故障！'
      }, {
        id: 1234,
        type: '03',
        text: '编号：1344号 服务器发生故障！'
      }, {
        id: 1235,
        type: '02',
        text: '编号：13424号 服务器发生故障！'
      }, {
        id: 1236,
        type: '04',
        text: '编号：154号 服务器发生故障！将于五分钟后关闭！'
      }, {
        id: 1237,
        type: '05',
        text: '编号：139号 服务器发生故障！'
      }, {
        id: 1236,
        type: '04',
        text: '编号：154号 服务器发生故障！将于五分钟后关闭！'
      }, {
        id: 123437,
        type: '05',
        text: '编号：139号 服务器发生故障！'
      }, {
        id: 123436,
        type: '04',
        text: '编号：154号 服务器发生故障！将于五分钟后关闭！'
      }, {
        id: 123437,
        type: '05',
        text: '编号：139号 服务器发生故障！'
      }, {
        id: 123634,
        type: '04',
        text: '编号：154号 服务器发生故障！将于五分钟后关闭！'
      }, {
        id: 12385,
        type: '05',
        text: '编号：139号 服务器发生故障！'
      }, {
        id: 12333634,
        type: '04',
        text: '编号：154号 服务器发生故障！将于五分钟后关22闭！'
      }, {
        id: 1244385,
        type: '05',
        text: '编号：139号 服务器发生故障11！'
      }],
      notyfyIcons: {
        '01': require('../../assets/img/Massge_icon_01.png'),
        '02': require('../../assets/img/Massge_icon_02.png'),
        '03': require('../../assets/img/Massge_icon_03.png'),
        '04': require('../../assets/img/Massge_icon_04.png'),
        '05': require('../../assets/img/Massge_icon_05.png')
      }
    }
  }
}
</script>

<style>
  .notify-content {
    height: calc(60% - 20px);
    margin: 20px 20px 0 20px;
  }

  .notify-item {
    height: calc(100% - 105px);
    width: 100%;
    overflow-y: auto;
    background-color: rgba(255,255,255,0.1);
  }
  .notify-item-box{
    height: 30px;
    display: flex;
    border-bottom: 1px solid dodgerblue;
  }

  .notify-item-text{
    text-align: left;
    height: 30px;
    font-size: 8px;
    line-height: 30px;
  }

  .notify-item-icon{
    height: 20px;
    width: 20px;
    margin: 5px;
  }
</style>
