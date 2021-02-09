<template>
  <div>
    <!-- <label class="language-text" for="languages">{{ $t('messages.chooseLanguage') }}</label> -->
    <select
      :name="name"
      :id="id"
      class="languages"
      @change="onChangeLanguage()"
      v-model="$i18n.locale"
    >
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang[1]">
        {{ $t(`messages.${lang[0]}`) }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      langs: [
        ['turkish', 'tr'],
        ['english', 'en'],
      ],
    };
  },
  props: {
    name: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  methods: {
    onChangeLanguage() {
      this.$store.dispatch('setLanguage', this.$i18n.locale);
    },
    detectBrowserLanguage() {
      let browserLanguage = navigator.language;
      if (browserLanguage === 'tr') {
        this.$store.dispatch('setLanguage', 'tr');
        this.$i18n.locale = 'tr';
      }
    },
  },
  created() {
    this.detectBrowserLanguage();
  },
};
</script>
<style lang="scss">
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
  width: 85px;
}
</style>
