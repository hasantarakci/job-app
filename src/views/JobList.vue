<template>
  <div class="job-list-wrapper">
    <ul class="job-list">
      <li @click="goJobDetails(job)" class="job" v-for="job in jobList" :key="job.jobId">
        <p>Şirket: {{ job.companyName }}</p>
        <p>Pozisyon: {{ job.positionName }}</p>
      </li>
    </ul>
    <button @click="goHomePage" class="search-job-button">İş Aramaya Devam Et</button>
  </div>
</template>

<script>
import Jobs from '@/services/service.js';

export default {
  name: 'JobList',
  data() {
    return {
      jobList: '',
      selectedLocation: '',
      submittedText: '',
    };
  },
  methods: {
    goHomePage() {
      this.$router.push('/');
    },
    goJobDetails(job) {
      this.$store.dispatch('setJobDetail', job);
      this.$router.push(`jobdetail/:id=${job.jobId}`);
    },
    getJobList() {
      let jobList = this.$store.getters.getJobList;
      if (!jobList || jobList === null) {
        Jobs.getJobList().then(res => {
          if (!res || !res.data) {
            return;
          }
          this.$store.dispatch('setJobList', res.data);
          jobList = res.data;
          this.filterJobList(jobList);
        });
      } else {
        this.filterJobList(jobList);
      }
    },
    filterJobList(jobList) {
      let filteredJobList = [];
      if (this.selectedLocation && this.submittedText) {
        jobList.forEach(element => {
          if (
            element.townName === this.selectedLocation &&
            element.positionName.includes(this.submittedText)
          ) {
            filteredJobList.push(element);
          }
        });
      } else if (this.submittedText) {
        jobList.forEach(element => {
          if (element.positionName.includes(this.submittedText)) {
            filteredJobList.push(element);
          }
        });
      } else if (this.selectedLocation) {
        jobList.forEach(element => {
          if (element.townName === this.selectedLocation) {
            filteredJobList.push(element);
          }
        });
      } else {
        this.jobList = jobList;
      }
      if (filteredJobList.length) {
        this.jobList = filteredJobList;
      }
    },
  },
  created() {
    this.selectedLocation = this.$store.state.selectLocation;
    this.submittedText = this.$store.state.searchText;
    this.getJobList();
  },
};
</script>

<style lang="scss">
.job-list-wrapper {
  display: flex;
  flex-direction: column;
  ul {
    padding-left: 0;
    li {
      list-style: none;
    }
  }
  .job-list {
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    .job {
      display: flex;
      flex-grow: 1;
      flex-basis: 250px;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      border: 1px solid #912da2;
      border-radius: 5px;
      margin: 10px;
      padding: 10px;
    }
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
