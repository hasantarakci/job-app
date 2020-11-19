<template>
  <div id="app">
    <BrandHeader></BrandHeader>
    <div class="body-container">
      <div id="nav">
        <router-link to="/">Home</router-link> | <router-link to="/joblist">İş Listesi</router-link>
      </div>
      <router-view />
    </div>
    <BrandFooter></BrandFooter>
  </div>
</template>

<script>
import BrandHeader from '@/components/BrandHeader.vue';
import BrandFooter from '@/components/BrandFooter.vue';
export default {
  components: {
    BrandHeader,
    BrandFooter,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
#app {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: auto;
  padding: 0 10px;
  .body-container {
    min-height: calc(100vh - 160px);
    background: #fafafa;

    #nav {
      padding: 30px;
      text-align: center;

      a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: #0fc6e6;
        }
      }
    }
  }
}
</style>
