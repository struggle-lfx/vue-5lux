import axios from 'axios'
const http = {
    get({url,params={}}){
        return axios({
            url,
            method:'GET',
            params
        })
    }
}




export default http