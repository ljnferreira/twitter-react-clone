import api from './api';

const getUserData = () => api.get('/statuses/user_timeline.json?count=100&screen_name=ljnferreira')
  .then(
    response => {
      return response.data;
    }
  )

export {getUserData} ;