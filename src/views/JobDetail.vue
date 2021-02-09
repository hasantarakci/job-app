<template>
  <div class="job-detail-wrapper">
    <div class="job-detail">
      <div class="picture-wrapper">
        <img class="picture" src="@/assets/logo.png" alt="kariyer-picture" />
      </div>
      <div class="desc-wrapper">
        <p>{{ $t('messages.company') }}: {{ jobDetail.companyName }}</p>
        <p>{{ $t('messages.position') }}: {{ jobDetail.positionName }}</p>
        <p>{{ $t('messages.description') }}: {{ jobDetail.description }}</p>
        <p>{{ $t('messages.adress') }}: {{ jobDetail.address }}</p>
        <p>
          {{ $t('messages.phone') }}:
          {{
            jobDetail.contactPhone.countryCallingCode +
              jobDetail.contactPhone.areaCode +
              jobDetail.contactPhone.number
          }}
        </p>
        <p>
          {{ $t('messages.published') }}: {{ jobDetail.durationDay }}
          {{ $t('messages.durationDay') }}
        </p>
        <p></p>
      </div>
    </div>
    <button @click="goHomePage" class="search-job-button">
      {{ $t('messages.continueToSearch') }}
    </button>
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
  .job-detail {
    display: flex;
    max-width: 700px;
    border: 1px solid #0fc6e6;
    border-radius: 5px;
    margin: 10px auto;
    .picture-wrapper {
      border-right: 1px solid #0fc6e6;
      width: 300px;
      display: flex;

      .picture {
        display: block;
        margin: auto;
      }
    }
    .desc-wrapper {
      padding: 10px;
      width: 300px;
    }
  }

  .search-job-button {
    background-color: #0fc6e6;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    padding: 15px;
    color: #ffffff;
    margin: 30px auto;
    display: block;
  }
}
</style>
