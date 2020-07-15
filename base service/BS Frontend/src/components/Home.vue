<template>
  <div id="app">
    <div id="header">
      <Header></Header>
    </div>
    <div id="content">
      <div id="system-info">
        <System></System>
        <Service></Service>
      </div>
      <div id="mainpane">
        <Mainpane></Mainpane>
      </div>
      <div id="service-info"></div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Service from './system/Service'
import System from './system/System'
import Mainpane from './main/Mainpane'
export default {
  components: { Header, Service, System, Mainpane }
}
</script>

<style>
  html,body {
    height: 100%;
    width: 100%;
    margin: 0;
    overflow: hidden;
    color: white;
    font-size: 12px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #330033;
    height: 100%;
    width: 100%;
    display: block;
  }

  #header {
    height: 55px;
    width: 100%;
  }

  #content {
    height: 100%;
    width: 100%;
    display: flex;
  }

  #system-info {
    height: 100%;
    width: 17%;
  }

  #mainpane {
    height: 100%;
    width: 66%;
  }

  #service-info {
    height: 100%;
    width: 17%;
  }
</style>
