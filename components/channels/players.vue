<template>
    <div class="gridlist-demo-container">
     <input style='margin-bottom:20px' v-model='search' placeholder ="请随便输入点啥" @focus='focus' @keyup="change(search)" @blur='blur'/>
      <mu-grid-list class="gridlist-demo">
        <div class='list' v-for="list in lists" :key='list.id' v-show='bool'> 
          <mu-grid-tile style='width:150px' >
              <a :href="'#/detail/'+list.id"><img id='images' :src="'http://cdn.tgp.qq.com/pallas/images/champions_id/'+list.id+'.png'"/></a>
                <span slot="title">{{list.cname}}</span>
                <span slot="subTitle">by <b>{{list.title}}</b></span>
                <mu-icon-button icon="star_border" slot="action"/>
          </mu-grid-tile>
        </div>
      </mu-grid-list>
      <mu-grid-list class="gridlist-demo"  v-show='sort'>
        <div class='list' > 
          <mu-grid-tile style='width:150px' >
              <a :href="'#/detail/'+arrs.id"><img id='images' :src="'http://cdn.tgp.qq.com/pallas/images/champions_id/'+arrs.id+'.png'"/></a>
                <span slot="title">{{arrs.cname}}</span>
                <span slot="subTitle">by <b>{{arrs.title}}</b></span>
                <mu-icon-button icon="star_border" slot="action"/>
          </mu-grid-tile>
        </div>
      </mu-grid-list>

    </div>
</template>

<script>
      export default {
          data () {
            return {
              search:'',
              lists: [],
              dataSource: [],
              bool:true,
              sort:false,
              arrs :{}
              
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
            },
            title:function(){
              this.$store.commit('set_title',"英雄列表")

                  
            },
            focus:function(){
              this.bool = false;
              this.sort = false
              console.log(1)
              console.log(this.bool)
            
            },
            blur:function(){
             
             if(this.search == ''){
                this.bool = true;
             }
            },
            change (val) {
                  console.log(this)
                  var self = this;
                  console.log(`you choose ${val}`)
                   this.$http.get('http://lolapi.games-cube.com/champion',{
                
                    headers:{
                      "DAIWAN-API-TOKEN":"78710-B0810-777C7-C9A85"
                  }
                   
                }).then(function(data){
                    // console.log(data.data.data)
                    this.lists = data.data.data;
                    this.lists.forEach(function(ele,item){
                       
                    if(val==ele.cname){
                      console.log(1)
                      console.log(ele)
                       self.sort=true;
                     self.arrs = ele;
                     
                      console.log(self.arrs)
                      // console.log(arrs.id)

                      }
                    })
                })
            }
          },

          mounted:function(){
            this.getchampion();
            this.title();

            
       
          }
      }
</script>

<style>
      .gridlist-demo-container{
        padding:30px;
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
      .list{
        float:left;
      }
      
</style>