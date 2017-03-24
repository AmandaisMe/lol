<template>
  <div style='margin-top:56px'>
      <mu-list>
   
        <mu-list-item title="Alex Qin">
          <mu-avatar  slot="leftAvatar"/>
          <span slot="describe">
            <span style="color: rgba(0, 0, 0, .87)">看电影啊</span> <br/>
            我们去看电影，最近有部烂片上映，又有吐槽的了
          </span>
          
        </mu-list-item>
       
   
     </mu-list>

  </div>

</template>
<script>
  module.exports = {
    methods:{
      title:function(){
        this.$store.commit('set_title','视频锦集');
      }
    },
    mounted:function(){
      this.title();
    }
  }
</script>
