<template>
  <div class="contact-us">
    <form class="contact-form" name="contacForm" method="post">
      <div class="mail-val" v-if="!isCountry">{{ $t('messages.countryWarning') }}</div>
      <input
        class="contact-input"
        :placeholder="$t('messages.country')"
        list="contactCountryList"
        name="contactCountryInput"
        v-model="contactCountry"
        @change="onChangeCountry()"
      />
      <datalist name="contactCountryList" id="contactCountryList" class="countries">
        <option v-for="country in countryList" :key="country.id" :value="country.name">
          {{ country.name }}
        </option>
      </datalist>

      <div class="name-val" v-if="!isName">{{ $t('messages.nameWarning') }}</div>
      <input
        class="contact-input"
        type="text"
        name="contactNameInput"
        id="contactNameInput"
        v-model="contactName"
        :placeholder="$t('messages.name')"
      />

      <div class="mail-val" v-if="!isMail">{{ $t('messages.mailWarning') }}</div>
      <input
        class="contact-input"
        type="email"
        name="contactMailInput"
        id="contactMailInput"
        v-model="contactMail"
        :placeholder="$t('messages.email')"
      />

      <div class="tel-val" v-if="!isTel">{{ $t('messages.telWarning') }}</div>
      <input
        class="contact-input"
        type="tel"
        name="contactPhoneInput"
        id="contactPhoneInput"
        v-model="contactPhone"
        :placeholder="$t('messages.phone')"
      />

      <div class="feed-val" v-if="!isFeed">{{ $t('messages.feedWarning') }}</div>
      <textarea
        class="contact-feed"
        name="contactFeed"
        id="contactFeed"
        :placeholder="$t('messages.feedbackArea')"
        cols="30"
        rows="10"
        v-model="contactFeed"
      ></textarea>

      <button class="contact-button" @click="send">
        {{ $t('messages.send') }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'JobList',
  data() {
    return {
      contactName: '',
      contactMail: '',
      contactPhone: '',
      contactCountry: '',
      contactCountryCode: '',
      contactFeed: '',
      isCountry: true,
      isName: true,
      isMail: true,
      isTel: true,
      isFeed: true,
      countryList: [
        { id: 'tr', name: this.$t('messages.turkey') },
        { id: 'en', name: this.$t('messages.usa') },
        { id: 'gb', name: this.$t('messages.uk') },
        { id: 'de', name: this.$t('messages.germany') },
        { id: 'se', name: this.$t('messages.sweden') },
        { id: 'ke', name: this.$t('messages.kenya') },
        { id: 'br', name: this.$t('messages.brazil') },
        { id: 'zm', name: this.$t('messages.zimbabwe') },
      ],
    };
  },
  methods: {
    onChangeCountry() {
      this.countryList.forEach(x => {
        if (x.name == this.contactCountry) {
          this.contactCountryCode = x.id;
          if (x.id == 'tr' || x.id == 'en') {
            this.$i18n.locale = x.id;
          } else {
            this.$i18n.locale = 'en';
          }
          this.$store.dispatch('setLanguage', this.$i18n.locale);
        }
      });
    },
    send(e) {
      e.preventDefault();
      this.loginValidation();
      if (this.isName && this.isMail && this.isTel && this.isCountry && this.isFeed) {
        let contactInfo = {
          name: `${this.contactName}`,
          email: this.contactMail,
          phone: this.contactPhone,
          country_code: this.contactCountry,
          text: this.contactFeed,
        };
        console.log(JSON.stringify(contactInfo));
      }
    },
    loginValidation() {
      let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!this.contactMail.match(mailFormat)) {
        this.isMail = false;
      } else {
        this.isMail = true;
      }
      if (!this.contactCountry) {
        this.isCountry = false;
      } else {
        this.isCountry = true;
      }
      if (!this.contactName.length) {
        this.isName = false;
      } else {
        this.isName = true;
      }
      if (this.contactPhone.length != 9) {
        this.isTel = false;
      } else {
        this.isTel = true;
      }
      if (!this.contactFeed) {
        this.isFeed = false;
      } else {
        this.isFeed = true;
      }
    },
  },
  created() {
    let userInfo = this.$store.getters.getUserInfo;
    if (userInfo || userInfo != null) {
      this.contactName = userInfo.userName;
      this.contactMail = userInfo.userMail;
    }
  },
};
</script>

<style lang="scss">
.contact-us {
  .contact-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;

    .contact-input,
    .contact-feed {
      border-color: #031e30;
      border-width: 2px;
      border-radius: 5px;
      padding: 5px;
      margin-bottom: 10px;
      box-sizing: border-box;
      width: 100%;
      resize: none;
    }

    .contact-button {
      width: 100%;
      background-color: #0fc6e6;
      color: #ffffff;
      border: none;
      border-radius: 5px;
      padding: 7px;
      display: block;
    }

    .name-val,
    .mail-val,
    .country-val,
    .tel-val,
    .feed-val {
      color: red;
    }
  }
}
</style>
