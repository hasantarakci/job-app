import axios from 'axios';

export let HttpService = axios.create();

class Jobs {
  getJobList() {
    return HttpService.get('http://localhost:3000/jobs');
  }
}

export default new Jobs();
