import { configureStore, createSlice } from '@reduxjs/toolkit'

let data = createSlice({
    name: 'data',
    initialState: {

        platform: [], // 0 : 중고나라, 1 : 번개장터, 2 : 카페24
        board: "", // 0 : 여성패션, 1 : 남성패션, 2: 육아용품
        title: "",
        price: 1000,
        category: 1, // 향후 수십개 카테고리가 존재하고, 매칭 테이블 만들 예정 ex { 1 == 패션/속옷/팬티},
        use: "", // 미개봉, 거의 새 것, 사용감 있음,
        dlv: [0, 2], // 0 : 직거래, 1 : 택배 거래, 2 : 온라인 거,
        pay: "", // *** 0은 아무것도 선택안함. 즉, 0은 혼자만 보내져야 함. 1 : 안전결제, 2: 송금 / 1과 2는 중복 선택 가능? 추후 확인 필요
        expose_phone: 0, // 0 or 1
        safe_num: 0,
        watermark: 0, // 0 or 1
        content: [
            {
                type: "",
                path: "",
                word: "",

            }
        ],
        tag: [] //최대 10개까지 가능


    },
    reducers:{
        changePlatform(state, action){
            state.platform = action.payload
        },
        changeBoard(state,action){
            state.board = action.payload
        },
        changeTitle(state,action){
            state.title = action.payload
        }
        
    }
})

export default configureStore({
    reducer: {
        data : data.reducer
    }
}) 

export let { changePlatform, changeBoard, changeTitle } = data.actions 