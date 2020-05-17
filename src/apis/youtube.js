import axios from 'axios';

const KEY = 'AIzaSyDb2KthhW5Q2WfjexdH1aWCQsGngD7dd0w';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
