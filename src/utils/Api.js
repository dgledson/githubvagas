import axios from 'axios'

axios.defaults.baseURL = 'https://api.github.com/repos/backend-br/vagas';

export default class {
    static fetchJobs() {
        return axios.get('issues')
    }
}