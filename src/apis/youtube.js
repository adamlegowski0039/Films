import axios from 'axios';

const KEY = 'AIzaSyCP-BwmxAbwqB8x-8OgJcMrzo4aR0JdJd8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 8,
    key: KEY,
  },
});
