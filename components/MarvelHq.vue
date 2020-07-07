<template>
  <div class="marvel-hq container">
    <img
      src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelhq-promos-modules-featured-half-dsk-01.jpg"
      alt=""
    />
    <div class="marvel-text-con">
      <p class="text-small text-red text-bold">MARVEL HQ</p>
      <h3 class="text-white">Play games and read comics on MarvelHQ.com</h3>
      <a
        target="_self"
        class="cta-btn cta-btn--solid cta-btn--red "
        href="https://www.marvel.com/movies/captain-marvel"
        ><div class="innerFill "><span>CHECK IT OUT!</span></div></a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.marvel {
  &-hq {
    background-color: #000;
    display: flex;
  }
  &-text-con {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    h3 {
      width: 550px;
      text-align: center;
      margin-top: 30px;
    }
  }
}
@media screen and (max-width: 767px) {
  .marvel {
    &-hq {
      flex-direction: column;
      img {
        object-fit: contain;
      }
    }
    &-text-con {
      h3 {
        width: 100%;
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 999px) {
  .marvel {
    &-hq {
      /* flex-direction: column; */
      img {
				width:300px;
        object-fit: contain;
      }
    }
    &-text-con {
			padding:10px 0;
      h3 {
        width: 100%;
      }
    }
  }
}
</style>
