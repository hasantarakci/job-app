import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    messages: {
      english: 'English',
      turkish: 'Turkish',
      homePageHeader: 'Find My Job',
      homePage: 'Home Page',
      jobPostings: 'Job Postings',
      contactUs: 'Contact Us',
      chooseLanguage: 'Choose a Language',
      close: 'Close',
      login: 'Login',
      logout: 'Logout',
      welcomeFindMyJob: 'Welcome to Find My Job',
      positionCompanyName: 'Position, Company Name',
      searchPosition: 'Search Position',
      company: 'Company',
      position: 'Position',
      clickDetails: 'Click for details!',
      continueToSearch: 'Continue to Search',
      description: 'Description',
      adress: 'Adress',
      phone: 'Phone',
      published: 'Duration in Day',
      durationDay: 'days ago',
      name: 'Name - Surname',
      email: 'E-Mail',
      password: 'Password',
      send: 'Send',
      country: 'Country',
      feedbackArea: 'Feedback Area',
      nameWarning: "Can't be empty!",
      mailWarning: 'Write a valid mail!',
      passwordWarning: 'at least 6 characters!',
    },
  },
  tr: {
    messages: {
      english: 'İngilizce',
      turkish: 'Türkçe',
      homePageHeader: 'İşimi Bul',
      homePage: 'Ana Sayfa',
      jobPostings: 'İş İlanları',
      contactUs: 'Bize Ulaşın',
      chooseLanguage: 'Dili Seçiniz',
      close: 'Kapat',
      login: 'Giriş Yap',
      logout: 'Çıkış Yap',
      welcomeFindMyJob: "İşimi Bul'a Hoşgeldiniz!",
      positionCompanyName: 'Pozisyon, Firma Adı',
      searchPosition: 'Pozisyon Ara',
      company: 'Firma',
      position: 'Pozisyon',
      clickDetails: 'Detaylar için tıklayın!',
      continueToSearch: 'İş Aramaya Devam Et',
      description: 'Açıklama',
      adress: 'Adres',
      phone: 'Telefon',
      published: 'Yayın Süresi',
      durationDay: 'gündür yayında',
      name: 'Ad - Soyad',
      email: 'E-Posta',
      password: 'Şifre',
      send: 'Gönder',
      country: 'Ülke',
      feedbackArea: 'Geri Bildirim Alanı',
      nameWarning: 'Boş olamaz!',
      mailWarning: 'Geçerli bir mail yazınız!',
      passwordWarning: 'En az 6 karakter!',
    },
  },
};

export const i18n = new VueI18n({
  locale: 'en',
  messages,
});

export default i18n;
