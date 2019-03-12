import axios from 'axios';


const KEY= 'AIzaSyDUjfvbMyDU2jtRbHPi29AJdwct08q9k4k';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: '25',
        key: KEY,
    }
});

