<template>
    <div class="gridlist-demo-container">
      <mu-grid-list class="gridlist-demo">
        <mu-grid-tile v-for="list in lists" :key='list.id'>
        <a :href="'#/detail/'+list.id"><img id='images' :src="'http://cdn.tgp.qq.com/pallas/images/champions_id/'+list.id+'.png'"/></a>
          <span slot="title">{{list.cname}}</span>
          <span slot="subTitle">by <b>{{list.title}}</b></span>
          <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
      </mu-grid-list>
    </div>
</template>

<script>
      export default {
          data () {
            return {
              lists: []
            }
          },
          methods:{
            getchampion:function(){
              this.$http.get('http://lolapi.games-cube.com/champion',{
              
                  headers:{
                    "DAIWAN-API-TOKEN":"78710-B0810-777C7-C9A85"
                }
                  
              }).then(function(data){
                  console.log(data.data.data)
                  this.lists = data.data.data;
              })
            }
          },
          mounted:function(){
            this.getchampion();
          }
      }
</script>

<style>
      .gridlist-demo-container{
        
        margin-top:56px;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;

      }

      .gridlist-demo{
        width: 500px;
        overflow-y: auto;
      }
      #images{
        width:160px;
      }
      
</style>