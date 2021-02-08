<template>
  <div class="find-job">
    <h1>İşimi Bul'a Hoşgeldiniz!</h1>
    <input class="position-input" v-model="inputData" :placeholder="inputPlaceholder" />
    <button class="position-button" @click="findJob()">Pozisyon Ara</button>
    <div class="location-wrapper">
      <ul v-if="jobsLocation.length" class="location-list">
        <li class="location-item" v-for="(jl, index) in jobsLocation" :key="index">
          <input type="radio" name="location" :value="jl" :id="jl" />
          <label class="location-name" :for="jl">{{ jl }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Jobs from '@/services/service.js';

export default {
  name: 'Home',
  data() {
    return {
      jobs: [],
      inputPlaceholder: 'Pozisyon, Firma Adı',
      inputData: '',
      jobsLocation: [],
      selectedLocation: '',
    };
  },
  methods: {
    findJob() {
      const inputValues = document.querySelectorAll('input[name="location"]');
      inputValues.forEach(element => {
        if (element.checked === true) {
          this.selectedLocation = element.value;
        }
      });
      this.$store.dispatch('setSelectLocation', this.selectedLocation);
      this.$store.dispatch('setSearchText', this.inputData);
      this.$router.push('job-list');

      this.getJobs();
    },
    getJobs() {
      Jobs.getJobList().then(res => {
        if (!res || !res.data) {
          return;
        }
        this.jobs = res.data;
        this.$store.dispatch('setJobList', res.data);
        this.jobs.forEach(x => {
          if (x.townName) {
            if (!this.jobsLocation.includes(x.townName)) {
              this.jobsLocation.push(x.townName);
            }
          }
        });
        this.jobsLocation.sort();
      });
    },
  },
  created() {
    this.getJobs();
  },
};
</script>

<style lang="scss">
.find-job {
  text-align: center;

  .position-input {
    border: 2px solid #0fc6e6;
    border-radius: 5px;
    padding: 5px;
  }

  .position-button {
    background-color: #0fc6e6;
    border: none;
    border-radius: 5px;
    padding: 7px;
    color: #ffffff;
    margin: 5px;
  }

  .location-wrapper {
    margin: 10px auto;
    width: calc(100% - 20px);
    padding: 0 10px;
    max-width: 520px;

    .location-list {
      display: flex;
      padding: 10px;
      overflow: auto;
      background-color: #0fc6e6;
      border-radius: 5px;

      .location-item {
        display: flex;
        padding: 10px 5px;
        .location-name {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
