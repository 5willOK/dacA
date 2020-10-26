import axios from 'axios';
export default function ajax(url = '', params = {}, type = 'get') {
    let promise;
    return new Promise((resolve, reject) => {
        if (type === 'get') {
            // console.log(params); //{cat_id: "1109"}
            let paramsStr = '';
            Object.keys(params).forEach((item) => {
                paramsStr += item + '=' + params[item] + '&'
            });
            if (paramsStr !== '') {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
                // console.log(paramsStr); //cat_id=1109
            };
            url += '?' + paramsStr;
            console.log(url);
            promise = axios.get(url);
        } else if ('post' === type) {
            promise = axios.post(url, params);
        }
        promise.then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        })
    })
}