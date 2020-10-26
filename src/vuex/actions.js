import { getHomeSwipe } from '../api/index'
import { goodslists, goodsdetail } from "@/api/list";
import { apigetsearch } from "@/api/search";

const actions = {
    async actgetHomeSwipe(context) {
        const result = await getHomeSwipe();
        console.log(result);
        context.commit("getHomeSwipe", result.data);
    },
    async actgoodslists(context, data) {
        const result = await goodslists(data);
        console.log(result);
        context.commit('getgoodslists', result.data)
    },
    async actgoodsdetail(context, data) {
        const result = await goodsdetail(data);
        console.log(result);
        context.commit('getgoodsdetail', result.data)
    },
    cartgoods(context, data) {
        context.commit('getcarts', data)
    },
    async getsearch(context, data) {
        console.log(data);
        const result = await apigetsearch(data);
        console.log(result);
        context.commit('getgoodsdetailqqq', result.data)
    }
}

export default actions