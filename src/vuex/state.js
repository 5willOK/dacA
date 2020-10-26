const state = {
    categoryitemdatas: [],
    homeSwipe: [], //首页轮播
    goodslists: [],
    goodsdetail: [],
    getsearchdata: [],
    carts: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    is_allselect: localStorage["is_allselect"] ? JSON.parse(localStorage["is_allselect"]) : 'true',
}
export default state