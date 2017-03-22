<template>
      <div class="swiper-container have_header" style='margin-top:56px'>
          <swiper :options="swiperOption">
            <swiper-slide v-for="item in items" :key="item.id">
              <a :href="item.article_url" style="height: 200px;">
              <img :src="item.image_url_big"   class="banner-item" alt="" height="20%" width="100%"></a>
            </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
      </div>
   
</template>

<script>
   import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
      data:function(){
        return{
          items:[],
          swiperOption: {
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false
        }
        }
      },
      components: {
        swiper,
        swiperSlide
      },
      methods:{
        getdata:function(){
          this.$http.jsonp('http://1.guoguoniu.applinzi.com/php/banner.php',{
            params:{
              callback:'JSON-CALLBACK'
            }
          }).then(function(data){
            console.log(data.data.list)
            this.items = data.data.list
          })
        }
      },
      mounted:function(){
        this.getdata();
      }
  }
</script>
<style>
 
</style>