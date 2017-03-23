<template>
<div>
    <mu-appbar :title="arrs.name">
        <mu-icon-button icon='menu' slot="left"/>
        <mu-icon-button icon='expand_more' slot="right"/>
     </mu-appbar>

    <mu-card >
        <mu-card-media :title="arrs.name" >
          <img :src='"http://cdn.tgp.qq.com/pallas/images/skins/original/"+arrs.key+"-000.jpg"'/>
        </mu-card-media>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab value="tab1" title="技能说明"/>
            <mu-tab value="tab2" title="皮肤欣赏"/>
   
        </mu-tabs>
         <div  style='padding:20px'>
             <div v-if="activeTab === 'tab1'">
                <h2>技能说明</h2>
                <mu-list>
                  <mu-avatar :src="'http://ossweb-img.qq.com/images/lol/img/passive/'+arrs.passive.image.full" />
                  <p>{{arrs.passive.name}}</p>
                  <p>{{arrs.passive.description}}</p> 
                  
               </mu-list>
             </div>
            <div class='tabbox' v-if="activeTab === 'tab2'">
                <h2>点击皮肤可观看视频哦</h2>
                <p><img :src='"http://cdn.tgp.qq.com/pallas/images/skins/original/"+arrs.key+"-001.jpg"' /></p>
                <p><img :src='"http://cdn.tgp.qq.com/pallas/images/skins/original/"+arrs.key+"-002.jpg"' /></p>
                <p><img :src='"http://cdn.tgp.qq.com/pallas/images/skins/original/"+arrs.key+"-003.jpg"' /></p>
                <p><img :src='"http://cdn.tgp.qq.com/pallas/images/skins/original/"+arrs.key+"-004.jpg"' /></p>
                <p><img :src='"http://cdn.tgp.qq.com/pallas/images/skins/original/"+arrs.key+"-005.jpg"' /></p>
                <p><img :src='"http://cdn.tgp.qq.com/pallas/images/skins/original/"+arrs.key+"-006.jpg"' /></p>
                <p><img :src='"http://cdn.tgp.qq.com/pallas/images/skins/original/"+arrs.key+"-007.jpg"' /></p>
            </div>  
         </div>
    </mu-card>
    <xfooter></xfooter>
</div>
</template>

<script>
var xfooter = require('./xfooter.vue')
export default {
  data () {
    return {
       arrs:[],
       activeTab: 'tab1'
    }
  },
  components:{
    xfooter:xfooter
  },
  methods:{
    get_id:function(){
      var id = this.$route.params.id;
     
      this.$http.get('http://lolapi.games-cube.com/GetChampionDetail?champion_id='+this.$route.params.id,{
        headers: {
          "DAIWAN-API-TOKEN":"78710-B0810-777C7-C9A85"
        }
      }).then(function(data){
          console.log(data.data.data[0])
          this.arrs = data.data.data[0]
         
      })
    },
     handleTabChange (val) {
      this.activeTab = val
    }
  },
  mounted:function(){
    this.get_id();
  }
}
</script>
<style>
    .tabbox img{
      width:300px;
      height:150px;
    }
</style>
