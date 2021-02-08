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
    if (userName && userName != null) {
      this.nameValue = userName;
    }
  },
};
</script>

<style lang="scss"></style>
