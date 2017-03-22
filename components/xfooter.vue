<template>
<mu-paper style='position:fixed;bottom:0px;width:100%'>
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item value="recents" href='#/news/1' title="资讯" icon="restore"/>
    <mu-bottom-nav-item value="flight_takeoff" href='#/search/2' title='评论' icon="flight_takeoff"/>
    <mu-bottom-nav-item value="favorites" href='#/players/3' title="玩家" icon="favorite"/>
    <mu-bottom-nav-item value="nearby" href='#/voides/4' title="视频" icon="location_on"/>
  </mu-bottom-nav>
</mu-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'recents'
      
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val

    }
  },
  mounted:function(){
      //从路由获取id this.$route.params.id
      var id = this.$route.params.id;
      console.log(this.$route.params.id)
      switch(id){
        case '1':
        this.bottomNav='recents';
        break;
        case '2':
        this.bottomNav='flight_takeoff';
        break;
        case '3':
        this.bottomNav='favorites';
        break;
        case '4':
        this.bottomNav='nearby';
        break;
      }
  }
}
</script>