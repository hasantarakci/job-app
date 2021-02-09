<template>
  <div class="contact-us">
    <form class="contact-form" name="contacForm" method="post">
      <input
        class="contact-input"
        type="text"
        name="contactNameInput"
        id="contactNameInput"
        v-model="contactName"
        :placeholder="$t('messages.name')"
      />

      <input
        class="contact-input"
        type="email"
        name="contactMailInput"
        id="contactMailInput"
        v-model="contactMail"
        :placeholder="$t('messages.email')"
      />

      <input
        class="contact-input"
        type="number"
        name="contactPhoneInput"
        id="contactPhoneInput"
        v-model="contactPhone"
        :placeholder="$t('messages.phone')"
      />

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
      countryList: [
        { id: 'tr', name: 'Turkey' },
        { id: 'en', name: 'United States of America' },
        { id: 'gb', name: 'United Kingdom' },
        { id: 'de', name: 'Germany' },
        { id: 'se', name: 'Sweden' },
        { id: 'ke', name: 'Kenya' },
        { id: 'br', name: 'Brazil' },
        { id: 'zm', name: 'Zimbabwe' },
      ],
    };
  },
  methods: {
    onChangeCountry() {
      this.countryList.forEach(x => {
        if (x.name == this.contactCountry) {
          this.contactCountryCode = x.id;
        }
      });
    },
    send(e) {
      e.preventDefault();
      if (
        this.contactName &&
        this.contactMail &&
        this.contactPhone &&
        this.contactCountry &&
        this.contactFeed
      ) {
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
  }
}
</style>
