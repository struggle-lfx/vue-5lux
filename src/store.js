import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store =   new Vuex.Store({
  state: {
    goodsList:JSON.parse(localStorage.getItem('goodsList')) || []
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
//监听事件，每次进入mutations时，都会进入这个方法，将数据放入localstorg中
store.subscribe((mutations,state)=>{
  localStorage.setItem('goodsList',JSON.stringify(state.goodsList))
})
export default store
