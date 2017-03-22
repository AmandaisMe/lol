<template>  
    <div class="demo-infinite-container" :style="{height:listheight-306+'px'}">
      <mu-list >
            <a :href="'http://qt.qq.com/php_cgi/news/php/varcache_article.php?id='+arr.article_id+'&version=$PROTO_VERSION$'" v-for='arr in arrs' :key='arr.id' >
              <mu-list-item :title="arr.title" >
                <mu-avatar :src="arr.image_url_small" slot="leftAvatar"/>
                <span slot="describe">
                  <span style="color: rgba(0, 0, 0, .87)">{{arr.club_name}}</span>
                  {{arr.summary}} 
                </span>
                <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                  <mu-menu-item title="回复" />
                  <mu-menu-item title="标记" />
                  <mu-menu-item title="删除" />
                </mu-icon-menu>
              </mu-list-item>
            </a>
           <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="getlist()"/>
     </mu-list>
     
    </div>
</template>
<script>

export default {
  data () {
    return {
      arrs:[],
      loading: false,
      scroller: null,
      listheight:''
      //,bool:true
      
    }
  },
  methods:{
      getlist:function(){
          this.loading=true;
         this.$http.jsonp('http://1.guoguoniu.applinzi.com/php/list.php',{
          params:{
            callback:'JSON_CALLBACK'
          }
        }).then(function(data){
          
          this.arrs = this.arrs.concat(data.data.list);
          this.loading = false;
          
           
        })
      }
  },
  mounted:function(){
    this.getlist();
    this.scroller = this.$el
   
    
  }
}
</script>
<style scoped >
.demo-infinite-container{
  width:100%;
 margin-top:56px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  
}
</style>

