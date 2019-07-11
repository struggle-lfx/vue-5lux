import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store =   new Vuex.Store({
  state: {
    goodsList:[]
  },
  mutations:{
    addGoods:(state,data)=>{
        state.goodsList.push(data);                      
    }
  },
  getters:{
    goodsNumber:state=>{
        return state.goodsList.length
    }
},
  actions: {

  }
})
export default store
