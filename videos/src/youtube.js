import axios from 'axios';

const KEY = 'AIzaSyD64SwtNCbs_SGLEF64mx4RNw81ef4pQpE'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
        type:'video'
    }
})