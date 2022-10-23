<script lang="js" src="./PortfolioComponent.js" />
<template>
  <q-card dark bordered class="bg-grey-9 q-py-xl">
    <q-card-section>
      <div class="text-h4 text-bold text-center">{{content.title}}</div>
    <div class="text-subtitle2 text-center">{{content.subTitle}}</div>
    </q-card-section>
    <q-carousel
      animated
      v-model="slide"
      infinite
      swipeable
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      class="myCarousel"
    >
      <q-carousel-slide v-for="item in content.items" 
        :key="item.index" 
        :name="item.index">
          <q-img v-for="item in content.items" :key="item.index" :src="item.imgSrc">
            <div class="absolute-bottom text-h6 text-center text-uppercase text-bold">
              <a :href="item.link" target="_blank">{{ item.title }}</a>
            </div>
          </q-img>
      </q-carousel-slide>
    </q-carousel>
  </q-card>
</template>

<style lang="scss" scoped>
.myCarousel {
  max-width: 1440px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.q-carousel__slide, .q-carousel .q-carousel--padding {
  padding: 0px;
}

a:link {
  color: white;
  text-decoration: none;
}

a:visited {
  color: white;
  text-decoration: none;
}

a:hover {
  color: white;
  text-decoration: none;
}

a:active {
  color: white;
  text-decoration: none;
}
</style>
