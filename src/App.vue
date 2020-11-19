<template>
  <div id="app">
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
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/joblist">İş Listesi</router-link>
    </div>
    <router-view />
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
#app {
  max-width: 1366px;
  margin: auto;

  .user-name-input {
    border-color: #912da2;
    border-width: 1px;
    border-radius: 5px;
    padding: 5px;
  }

  .user-name-button {
    background-color: #912da2;
    border: none;
    border-radius: 5px;
    padding: 7px;
    color: #ffffff;
    margin: 5px;
  }

  #nav {
    padding: 30px;
    text-align: center;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #912da2;
      }
    }
  }
}
</style>
