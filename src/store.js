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
        goods.productCount += data.productCount
      }else{
        state.goodsList.push(data)
      }                 
    }
  },
  getters:{
    goodsNumber:state=>{
      let sum = 0
      state.goodsList.forEach(value=>{
        sum +=value.productCount
      })
        return sum
    }
},
  actions: {

  }
})
export default store
