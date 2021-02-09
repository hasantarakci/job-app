<template>
  <div>
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang[1]">
          {{ $t(`messages.${lang[0]}`) }}
        </option>
      </select>
    </div>
    <div class="login-hamburger">
      <form v-if="!isLogin" name="userForm" method="post">
        <div class="name-val" v-if="!isName">{{ $t('messages.nameWarning') }}</div>
        <input
          class="login-input"
          type="text"
          name="userNameInput"
          id="userNameInput"
          v-model="userName"
          :placeholder="$t('messages.name')"
        />

        <div class="password-val" v-if="!isPassword">{{ $t('messages.passwordWarning') }}</div>
        <input
          class="login-input email-input"
          type="email"
          name="userMailInput"
          id="userMailInput"
          v-model="userMail"
          :placeholder="$t('messages.email')"
        />

        <div class="mail-val" v-if="!isMail">{{ $t('messages.mailWarning') }}</div>
        <input
          class="login-input"
          type="password"
          name="userPasswordInput"
          id="userPasswordInput"
          v-model="userPassword"
          :placeholder="$t('messages.password')"
        />
        <button class="login-button submit-btn" @click="login">
          {{ $t('messages.login') }}
        </button>
      </form>

      <div v-if="isLogin">
        <div class="user-name">{{ userName }}</div>
        <div class="user-mail">{{ userMail }}</div>
        <button class="logout-button submit-btn" @click="logout()">
          {{ $t('messages.logout') }}
        </button>
      </div>
    </div>
    <div class="router-links">
      <router-link v-for="(router, i) in routers" :key="i.name" :to="router.link"
        ><span @click="changeRouter">{{ router.name }}</span></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: '',
      userMail: '',
      userPassword: '',
      isLogin: false,
      isName: true,
      isMail: true,
      isPassword: true,
      langs: [
        ['turkish', 'tr'],
        ['english', 'en'],
      ],
    };
  },
  props: {
    routers: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    changeRouter(e) {
      this.$emit('closeModal', e);
    },
    login(e) {
      e.preventDefault();
      this.loginValidation();
      if (this.isName && this.isMail && this.isPassword) {
        let userInfo = {
          userName: this.userName,
          userMail: this.userMail,
          userPassword: this.userPassword,
        };
        this.$store.dispatch('setUserInfo', userInfo);
        this.isLogin = true;
      }
    },
    logout() {
      this.isLogin = false;
      this.userName = '';
      this.userMail = '';
      this.userPassword = '';
      this.$store.dispatch('setUserInfo', null);
    },
    loginValidation() {
      let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!this.userMail.match(mailFormat)) {
        this.isMail = false;
      } else {
        this.isMail = true;
      }
      if (!this.userName.length) {
        this.isName = false;
      } else {
        this.isName = true;
      }
      if (this.userPassword.length < 6) {
        this.isPassword = false;
      } else {
        this.isPassword = true;
      }
    },
  },
  created() {
    let userInfo = this.$store.getters.getUserInfo;
    if (userInfo && userInfo != null) {
      this.isLogin = true;
      this.userName = userInfo.userName;
      this.userMail = userInfo.userMail;
      this.userPassword = userInfo.userPassword;
    }
  },
};
</script>
<style lang="scss">
.login-hamburger {
  padding: 15px;
  background: #ffffff;
  border: 0.5px solid #031e30;
  border-radius: 5px;
  box-sizing: border-box;
  width: 90%;
  margin: 5px auto;

  .login-input {
    border-color: #031e30;
    border-width: 2px;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 100%;
  }

  .name-val,
  .mail-val,
  .password-val {
    color: red;
  }

  .login-button,
  .logout-button {
    width: 100%;
    background-color: #031e30;
    color: #ffffff;
  }

  .user-name,
  .user-mail {
    color: #031e30;
    margin-bottom: 10px;
  }
}
.router-links {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
</style>
