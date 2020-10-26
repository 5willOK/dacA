import ajax from './ajax'

const Base_URL = 'http://localhost:3000/api'
    //http://localhost:3000/api/v1/search?keywords=小
export const apigetsearch = (params) => ajax(Base_URL + '/v1/search', params)