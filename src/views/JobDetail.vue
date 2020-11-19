<template>
  <div class="job-detail-wrapper">
    <div class="job-detail">
      <p>Şirket: {{ jobDetail.companyName }}</p>
      <p>Pozisyon: {{ jobDetail.positionName }}</p>
      <p>Açıklama: {{ jobDetail.description }}</p>
      <p>Adres: {{ jobDetail.address }}</p>
      <p>
        Telefon:
        {{
          jobDetail.contactPhone.countryCallingCode +
            jobDetail.contactPhone.areaCode +
            jobDetail.contactPhone.number
        }}
      </p>
      <p>Yayın Tarihi: {{ jobDetail.durationDay }} gündür yayında</p>
    </div>
    <button @click="goHomePage" class="search-job-button">İş Aramaya Devam Et</button>
  </div>
</template>

<script>
export default {
  name: 'JobList',
  data() {
    return {
      jobDetail: null,
    };
  },
  methods: {
    goHomePage() {
      this.$router.push('/');
    },
  },
  created() {
    this.jobDetail = this.$store.getters.getJobDetail;
  },
};
</script>

<style lang="scss">
.job-detail-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .job-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px solid #912da2;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
  }

  .search-job-button {
    background-color: #912da2;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    padding: 15px;
    color: #ffffff;
    margin: 30px 0;
  }
}
</style>
