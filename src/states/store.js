import { configureStore, createSlice } from '@reduxjs/toolkit'

let data = createSlice({
    name: 'data',
    initialState: {
        account_info:"",
        platform: [], // 0 : 중고나라, 1 : 번개장터, 2 : 카페24
        title: "",
        price: "",
        gender: "", //FA : 여자어른, MA:남자어른, FK: 여자키즈,  MK: 남자키즈
        kids_age: null, // 0은 베이비, 1은 아동, 2는 쥬니어   
        category: "", //카테고리 목록표에서 가장 세분화된 단계 선택 ex) 아우터/패딩이면 ‘패딩’
        quality: 1, //새상품 : 0  사용감없음:1(default) 사용감적음:2 사용감 많음:3  고장파손:4
        content: "", //10자 이상
        rep_img: "", // 대표이미지
        img_list: [], // 대표이미지를 제와한 나머지 이미지
        tag_list: [],
    },
    reducers: {
        changeAccountInfo(state,action){
            state.account_info = action.payload
        },
        changePlatform(state, action) {
            state.platform = action.payload
        },
        changeTitle(state, action) {
            state.title = action.payload
        },
        changePrice(state, action) {
            state.price = action.payload
        },
        changeGender(state, action) {
            state.gender = action.payload
        },
        changeKidsAge(state, action) {
            state.kids_age = action.payload
        },
        changeCategory(state, action) {
            state.category = action.payload
        },
        changeQuality(state, action) {
            state.quality = action.payload
        },
        changeContent(state, action) {
            state.content = action.payload
        },
        changeRepImg(state, action) {
            state.rep_img = action.payload
        },
        changeImgList(state, action) {
            state.img_list = action.payload
        },
        changeTagList(state, action) {
            state.tag_list = action.payload
        },



    }
})

export default configureStore({
    reducer: {
        data: data.reducer
    }
})

export let { changeAccountInfo,changePlatform, changeTitle, changePrice, changeGender,
    changeKidsAge, changeCategory, changeQuality,
    changeContent, changeRepImg, changeImgList, changeTagList } = data.actions 