import { Toast } from 'mint-ui';
const mutations = {
    add(state) {
        state.num
    },
    getHomeSwipe(state, data) {
        console.log(data);
        state.homeSwipe = data
    },
    getgoodslists(state, data) {
        state.goodslists = data
    },
    getgoodsdetail(state, data) {
        state.goodsdetail = data
    },
    getcarts(state, data) {
        if (data) {
            state.carts.push(data)
        }
        localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    addcarts(state, index) {
        state.carts[index].goods_num++;
        console.log(state.carts[index].goods_num);
        localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    jiancarts(state, index) {
        if (state.carts[index].goods_num == 1) {
            state.carts[index].goods_num == 1;
            Toast("亲，你至少需要选择一件哦");
        } else {
            state.carts[index].goods_num--;
            localStorage.setItem('carts', JSON.stringify(state.carts))
        }

    },
    changeselect(state, index) {

        state.carts[index].goods_select = !state.carts[index].goods_select;
        let toselectall = state.carts.every(item => {
            return item.goods_select == true
        });
        if (toselectall) {
            state.is_allselect = true
        } else {
            state.is_allselect = false
        }
        localStorage.setItem('carts', JSON.stringify(state.carts))
        localStorage.setItem('is_allselect', state.is_allselect.toString())
    },
    allselect(state) {
        state.is_allselect = !state.is_allselect;
        if (state.is_allselect == true) {
            state.carts.map(item => {
                item.goods_select = true;
            })
        } else if (state.is_allselect == false) {
            state.carts.map(item => {
                item.goods_select = false;
            })
        }
        localStorage.setItem('is_allselect', state.is_allselect.toString())
        localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    getgoodsdetailqqq(state, data) {
        state.getsearchdata = data
    }
}
export default mutations