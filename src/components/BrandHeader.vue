<template>
  <div class="header-container">
    <div class="header">
      <span> Hoşgeldin {{ userName }}</span>
      <div>
        <input
          class="user-name-input"
          type="text"
          v-model="inputName"
          placeholder="Adınızı Giriniz"
        />
        <button class="user-name-button" @click="submitName">Değiştir</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: `User${new Date().getTime()}`,
      inputName: '',
    };
  },
  methods: {
    submitName() {
      if (this.inputName) {
        this.userName = this.inputName;
        this.$store.dispatch('setUserName', this.userName);
      }
    },
  },
};
</script>
<style lang="scss">
.header-container {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9;
  background: linear-gradient(to right, #0fc6e6 0%, #031e30 100%);
  .header {
    padding: 10px;
    .user-name-input {
      border-color: #031e30;
      border-width: 2px;
      border-radius: 5px;
      padding: 5px;
    }

    .user-name-button {
      background-color: #031e30;
      border: none;
      border-radius: 5px;
      padding: 7px;
      color: #ffffff;
      margin: 5px;
    }
  }
}
</style>
