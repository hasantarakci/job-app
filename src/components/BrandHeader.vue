<template>
  <div class="header">
    <div class="header__left">
      <div class="header__left-router">
        <img class="header__left-icon" src="@/assets/logo.png" alt="" />
        <div class="header__left-page">{{ pageName }}</div>
      </div>
    </div>

    <div class="header__nav">
      <router-link
        class="header__nav-link"
        v-for="(router, i) in routers"
        :key="i.name"
        :to="router.link"
        >{{ router.name }}</router-link
      >
    </div>

    <div class="header__right">
      <div class="header__right-language">
        <BrandLanguage id="headerLang" name="headerLang" />
      </div>
      <div class="header__right-login">
        <BrandUser />
      </div>
      <div class="header__right-menu">
        <img @click="openMenu" src="@/assets/hamburger.png" alt="" style="width: 30px;" />
        <div v-if="showMenu" class="menu-modal">
          <div class="modal-bg"></div>
          <div class="modal-wrapper">
            <div>
              <div @click="closeMenu">{{ $t('messages.close') }}</div>
              <BrandHamburger @closeModal="closeMenu" :routers="routers" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BrandHamburger from '@/components/BrandHamburger.vue';
import BrandLanguage from '@/components/BrandLanguage.vue';
import BrandUser from '@/components/BrandUser.vue';

export default {
  data() {
    return {
      userName: '',
      inputName: '',
      isLogin: false,
      showMenu: false,
    };
  },
  components: {
    BrandHamburger,
    BrandLanguage,
    BrandUser,
  },
  computed: {
    pageName() {
      if (this.$route.name == 'homePage') {
        return this.$i18n.t('messages.homePageHeader');
      } else {
        return this.$i18n.t(`messages.${this.$route.name}`);
      }
    },
    routers() {
      const routers = [
        { name: this.$t('messages.homePage'), link: '/' },
        { name: this.$t('messages.jobPostings'), link: '/job-postings' },
        { name: this.$t('messages.contactUs'), link: '/contact-us' },
      ];
      return routers;
    },
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
  },
};
</script>
<style lang="scss">
.header {
  height: 80px;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
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

    &-router {
      display: flex;
      align-items: center;
    }

    &-icon {
      width: 30px;
      height: auto;
      transform: rotate(-90deg);
    }
  }

  &__nav {
    display: none;
    padding: 20px;
    text-align: center;

    &-link {
      padding: 0 10px;
    }

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

    &-login {
      display: none;
    }

    &-language {
      display: none;
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
    }
  }
}
@media screen and (min-width: 1024px) {
  .header {
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
      &-language {
        display: block;
      }

      &-login {
        display: block;
        margin-left: 10px;
      }

      &-menu {
        display: none;
      }
    }
  }
}
</style>
