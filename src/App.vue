<template>
  <div id="app">
    <BrandHeader></BrandHeader>
    <div class="content-container">
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

  .content-container {
    padding: 20px 10px;
    min-height: calc(100vh - 200px);
    background: #fafafa;
  }
}
</style>
