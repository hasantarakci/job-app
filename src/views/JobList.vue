<template>
  <div class="job-list-wrapper">
    <ul class="job-list">
      <li class="job" v-for="job in jobList" :key="job.jobId">
        <div class="picture-wrapper">
          <img class="picture" src="@/assets/logo.png" alt="kariyer-picture" />
        </div>
        <div class="desc-wrapper">
          <p>
            Firma: <span>{{ job.companyName }}</span>
          </p>
          <p>
            Pozisyon: <span>{{ job.positionName }}</span>
          </p>
          <span @click="goJobDetails(job)" class="for-details">Detaylar için tıklayın!</span>
        </div>
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
  ul {
    padding-left: 0;
    li {
      list-style: none;
    }
  }
  .job-list {
    display: grid;
    grid-template-columns: repeat(4, 285px);
    grid-gap: 20px;
    .job {
      border: 1px solid #0fc6e6;
      border-radius: 5px;
      .picture-wrapper {
        height: 200px;
        border-bottom: 1px solid #0fc6e6;
        .picture {
          display: block;
          margin: 0 auto;
        }
      }
      .desc-wrapper {
        margin: 16px 10px;
        .for-details {
          color: gray;
          text-decoration: underline;
          font-style: italic;
          cursor: pointer;
        }
      }
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
