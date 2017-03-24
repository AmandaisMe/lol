<template>
	<div>
		<xswiper></xswiper>
		<xlist></xlist>
	</div>
</template>
<script>
	var xswiper = require('../xswiper.vue')
	var xlist = require('../xlist.vue')
	module.exports = {
		components:{
			xswiper:xswiper,
			xlist:xlist
		},
		methods:{
			contents:function(){
				console.log(window.screen.availHeight)
			},
			title:function(){
				this.$store.commit('set_title','新闻列表')
			}
		},
		mounted:function(){
			this.contents();
			this.title();
		}
	}

</script>
<style>
	
</style>