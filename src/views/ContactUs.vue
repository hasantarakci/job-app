<template>
  <div class="contact-us">
    <input type="text" :value="nameValue" placeholder="Adınız" />
    <input type="number" placeholder="E-Mail Adresiniz" />
    <input type="text" placeholder="Telefon Numaranız" />
  </div>
</template>

<script>
export default {
  name: 'JobList',
  data() {
    return {
      nameValue: '',
    };
  },
  methods: {},
  created() {
    let userName = this.$store.getters.getUserName;
    console.log('11', userName);
    if (userName && userName != null) {
      console.log(userName);
    }
  },
};
</script>

<style lang="scss"></style>
