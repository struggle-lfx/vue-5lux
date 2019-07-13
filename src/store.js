import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store =   new Vuex.Store({
  state: {
    goodsList:[]
  },
  mutations:{
    addTocar(state,data){
      let goods=state.goodsList.find(v=>v.id==data.id)
      if(goods){
        goods.productCount +=1
      }else{
        state.goodsList.push(data)
      }                 
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
