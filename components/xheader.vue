<template>
<mu-appbar  style='position:fixed;top:0px;width:100%'>
  <mu-icon-button  icon='home' slot="left" @click='open()'/>
  <mu-icon-button icon='favorite' slot="right" @click='close()'/>
  {{title}}
</mu-appbar>
</template>
<script>
	module.exports = {
		methods:{
			open:function(){
				this.$store.commit('set_open',true);
				console.log(1)
				console.log(this.$store.state.isleftPopup)
				console.log(this.$store)
			},
			close:function(){
				//向store仓库发送设置
				this.$store.commit('set_close',true);
			}
		},
		//自动执行
		computed:{
			title:function(){
				//自动执行修改的命令
				return this.$store.state.title
			}
		}
	}
</script>