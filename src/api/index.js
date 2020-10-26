import ajax from './ajax'

const Base_URL = 'http://localhost:3000/api'
    //http://192.168.0.191:3000/api/v1/index/swipe
export const getHomeSwipe = () => ajax(Base_URL + '/v1/index/swipe')