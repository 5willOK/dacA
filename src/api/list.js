import ajax from './ajax';

const Base_Url = 'http://localhost:3000/api'

// export const goodslists = (params) => ajax(Base_Url + '/v1/category/goodslist', params);
export const goodslists = (params) => ajax(Base_Url + "/v1/category/goodslist", params)
    // http://localhost:3000/api/v1/category/goodsdetail?goods_id=621
export const goodsdetail = (params) => ajax(Base_Url + "/v1/category/goodsdetail", params)