<template>
<mu-appbar title="顶部菜单" style='position:fixed;top:0px;width:100%'>
  <mu-icon-button  icon='home' slot="left" @click='open()'/>
  <mu-icon-button icon='favorite' slot="right" @click='close()'/>
</mu-appbar>
</template>
<script>
	module.exports = {
		methods:{
			open:function(){
				this.$store.commit('set_open',true);
				console.log(1)
				console.log(this.$store.state.isleftPopup)

			},
			close:function(){
				this.$store.commit('set_close',true);
			}
		}
	}
</script>