<template>
  <div class="header">
    <div class="header__left">
      <div class="header__left-router">
        <img class="header__left-icon" src="@/assets/logo.png" alt="" />
        <div class="header__left-page">{{ pageName }}</div>
      </div>
      <div class="header__left-login">
        <div>Hoşgeldin {{ userName }}</div>
        <button v-if="!isLogin" class="login-wrapper submit-btn">
          Giriş Yap
          <div class="login-modal">
            <input
              class="login-input"
              type="text"
              v-model="inputName"
              placeholder="Adınızı Giriniz"
            />
            <button class="login-button submit-btn" @click="login">Giriş Yap</button>
          </div>
        </button>
        <button v-if="isLogin" class="logout-button submit-btn" @click="logout">Çıkış Yap</button>
      </div>
    </div>

    <div class="header__nav">
      <router-link to="/">Ana Sayfa</router-link> |
      <router-link to="/job-list">İş Listesi</router-link> |
      <router-link to="/contact-us">Bize Ulaşın</router-link>
    </div>

    <div class="header__right">
      <div class="header__right-language">
        <label class="language-text" for="languages">Choose a language:</label>
        <select
          name="languages"
          id="languages"
          class="languages"
          @change="onChangeLanguage($event)"
          v-model="languageValue"
        >
          <option :value="languageEn">English</option>
          <option :value="languageTr">Turkish</option>
        </select>
      </div>
      <div class="header__right-menu">
        <img @click="openMenu" src="@/assets/hamburger.png" alt="" style="width: 30px;" />
        <div v-if="showMenu" class="menu-modal">
          <div class="modal-bg"></div>
          <div class="modal-wrapper">
            <div @click="closeMenu">
              Kapat
            </div>
            <div class="router-links">
              <router-link to="/">Ana Sayfa</router-link>
              <router-link to="/job-list">İş Listesi</router-link>
              <router-link to="/contact-us">Bize Ulaşın</router-link>
            </div>
          </div>
        </div>
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
      isLogin: false,
      showMenu: false,
      languageEn: 'English',
      languageTr: 'Turkish',
      languageValue: '',
      pageName: this.$router.currentRoute.name,
    };
  },
  methods: {
    openMenu() {
      this.showMenu = true;
      document.body.style.overflow = 'hidden';
    },
    closeMenu() {
      this.showMenu = false;
      document.body.style.overflow = 'auto';
    },
    login() {
      if (this.inputName) {
        this.userName = this.inputName;
        this.$store.dispatch('setUserName', this.userName);
        this.isLogin = true;
      }
    },
    logout() {
      this.isLogin = false;
      this.userName = `User${new Date().getTime()}`;
    },
    onChangeLanguage() {
      this.$store.dispatch('setLanguage', this.language);
    },
    detectBrowserLanguage() {
      let browserLanguage = navigator.language;
      if (browserLanguage === 'en-US') {
        this.languageValue = this.languageEn;
      } else if (browserLanguage === 'tr') {
        this.languageValue = this.languageTr;
      } else {
        this.languageValue = this.languageEn;
      }
    },
  },
  watch: {
    $route(to) {
      this.pageName = to.name;
      this.closeMenu();
    },
  },
  created() {
    this.detectBrowserLanguage();
  },
};
</script>
<style lang="scss">
.header {
  height: 80px;
  padding: 0 10px;
  width: calc(100%-20px);
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9;
  background: linear-gradient(to right, #0fc6e6 0%, #031e30 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__left {
    display: flex;

    &-login {
      display: none;
    }

    &-router {
      display: flex;
      align-items: center;
    }

    &-icon {
      width: 30px;
      height: auto;
      transform: rotate(-90deg);
    }

    .login-wrapper {
      position: relative;
      text-align: center;
      margin-top: 10px;

      &:hover {
        .login-modal {
          visibility: visible;
        }
      }

      .login-modal {
        visibility: hidden;
        transition: visibility 0.4s;
        padding: 15px;
        background: white;
        border: 0.5px solid #031e30;
        border-radius: 5px;
        position: absolute;
        top: 35px;
        left: 0;

        .login-input {
          border-color: #031e30;
          border-width: 2px;
          border-radius: 5px;
          padding: 5px;
        }

        .login-button {
          width: 100%;
          margin-top: 10px;
        }
      }
    }

    .logout-button {
      margin: 10px 0;
    }

    .submit-btn {
      background-color: #031e30;
      color: #ffffff;
      border: none;
      border-radius: 5px;
      padding: 7px;
      display: block;
    }
  }

  &__nav {
    display: none;
    padding: 20px;
    text-align: center;

    a {
      font-weight: bold;
      color: #ffffff;

      &.router-link-exact-active {
        color: #0fc6e6;
      }
    }
  }

  &__right {
    display: flex;
    align-items: center;

    &-language {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .language-text {
        color: #ffffff;
      }

      .languages {
        margin-top: 10px;
        background: #ffffff;
        border: none;
        border-radius: 5px;
        padding: 6px;
        color: #031e30;
        font-size: 13.3333px;
      }
    }

    &-menu {
      margin-left: 10px;

      .modal-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000000;
        opacity: 0.9;
        min-height: 100vh;
      }

      .modal-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        background: #ffffff;
        height: 100vh;
        width: 300px;
      }

      .router-links {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .header {
    &__left {
      &-login {
        display: block;
      }
    }

    &__nav {
      display: block;
      padding: 20px;
      text-align: center;

      a {
        font-weight: bold;
        color: #ffffff;

        &.router-link-exact-active {
          color: #0fc6e6;
        }
      }
    }

    &__right {
      &-menu {
        display: none;
      }
    }
  }
}
</style>
