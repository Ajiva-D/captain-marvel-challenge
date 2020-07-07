<template>
  <header>
    <nav class="main-nav">
      <div class="name-title">
        <p>DAVID</p>
        <font-awesome-icon icon="bars" class="icon" @click="toggleNav(true)" />
      </div>
      <n-link to="/">
        <svg width="130" height="52" xmlns="http://www.w3.org/2000/svg">
          <rect fill="#EC1D24" width="100%" height="100%"></rect>
          <path
            fill="#FEFEFE"
            d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"
          ></path>
          <path fill="#EC1D24" d="M0 0h30v52H0z"></path>
          <path
            fill="#FEFEFE"
            d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"
          ></path>
        </svg>
      </n-link>
      <div class="master-card">
        <div>
          <font-awesome-icon icon="credit-card" class="icon credit-card" />
        </div>
        <div class="master-card-text">
          <span>Marvel</span><br />
          <span>Mastercard®</span>
        </div>
        <div class="search">
          <font-awesome-icon icon="search" class="icon" />
        </div>
      </div>
    </nav>
    <transition name="fade">
      <div class="mobile-nav" v-if="showNav">
        <nav class="below-nav">
          <font-awesome-icon icon="times" class="icon" @click="toggleNav(false)" />
          <a href="">VIDEOS</a>
          <a href="">CHARACTERS</a>
          <a @click="switchRoute">COMICS</a>
          <a href="">MOVIES</a>
          <a href="">TV SHOWS</a>
          <a href="">GAMES</a>
          <a href="">NEWS</a>
          <a href="">MORE</a>
          <a href="" class="mobile-mastercard">MARVEL MASTERCARD®</a>
          <div class="mobile-nav-extra">
            <div class="nav-profile">
              <p class="text-tiny text-yellow">MARVEL INSIDER</p>
              <p class="text-mid text-bold">DAVID</p>
            </div>
            <ul class="social-links top">
              <li>
                <a href="" class="text-grey"
                  ><font-awesome-icon
                    :icon="['fab', 'facebook-square']"
                    class="icon"
                /></a>
              </li>

              <li>
                <a href="" class="text-grey"
                  ><font-awesome-icon :icon="['fab', 'twitter']" class="icon"
                /></a>
              </li>

              <li>
                <a href="" class="text-grey"
                  ><font-awesome-icon :icon="['fab', 'instagram']" class="icon"
                /></a>
              </li>

              <li>
                <a href="" class="text-grey"
                  ><font-awesome-icon
                    :icon="['fab', 'tumblr']"
                    class="icon tumblr"
                /></a>
              </li>
              <li>
                <a href="" class="text-grey"
                  ><font-awesome-icon :icon="['fab', 'youtube']" class="icon"
                /></a>
              </li>
            </ul>
            <div class="insider-con">
              <div class="insider-flex flex-1">
                <img
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/nav-logos-insider.png"
                  alt="marvel insider logo"
                />
                <div class="insider-text">
                  <p class="text-small text-bold">MARVEL INSIDER</p>
                  <p class="text-grey text-small">
                    Get Rewarded for Being a Marvel Fan
                  </p>
                </div>
              </div>
              <div class="insider-flex flex-2">
                <img
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mastercard-crop_0-footer-v3.png"
                  alt="Captain America logo"
                />
                <div class="insider-text">
                  <p class="text-small text-bold">MARVEL MASTERCARD®</p>
                  <p class="text-grey tetxt-small">
                    6 Card Designs—Unlimited Cashback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    };
  },
  methods: {
    toggleNav(state) {
      this.showNav = state;
			const body = document.querySelector("body");
			const bg = document.querySelector('.body')
      if (this.showNav) {
				console.log("show");
				body.style.height = "800px";
				console.log(body.style.height);
				bg.style.height ="0px"
				bg.style.overflowY ="hidden"
      } else {
				body.style.height = "100%";
				bg.style.height ="100%"
				bg.style.overflowY ="scroll"
			}
		},
		switchRoute(){
			this.toggleNav(false);
			this.$router.push('/comics')
		}
  },
  mounted() {
    if (screen.width >= 768) {
      this.showNav = true;
    }
  }
};
</script>

<style scoped lang="scss">
header {
  background-color: #202020;
  color: #fff;
}
.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
}
.master-card {
  display: flex;
  font-size: 12px;
  align-items: center;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  padding-left: 30px;
  &-text {
    margin-left: 10px;
    padding-right: 30px;
  }
}
.icon {
  width: 25px;
}
.name-title {
  padding: 15px 30px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  height: 100%;
  font-weight: bold;
  font-size: 12px;
  .icon {
    display: none;
  }
}
.search {
  padding: 15px 20px;
  border-left: 1px solid #393939;
  .icon {
    width: 20px;
  }
}
.below-nav {
  display: flex;
  justify-content: center;
  border-top: 1px solid #393939;
  a {
    font-size: 12px;
    font-weight: bold;
    margin: 15px 25px;
    color: #fff;
    text-decoration: none;
  }
  .icon,
  .mobile-mastercard {
    display: none;
  }
  .mobile-nav {
    &-extra {
      display: none;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media screen and (max-width: 767px) {
  .main-nav {
    padding: 0 20px;
  }
  .name-title p,
  .credit-card,
  .master-card-text {
    display: none;
  }
  .name-title .icon {
    display: block;
  }
  .master-card {
    border-left: none;
  }
  .nav-profile {
    border-top: 1px solid #393939;
    border-bottom: 1px solid #393939;
    margin: 20px 0;
    padding: 40px 0;
    .text-yellow {
      margin-bottom: 40px;
    }
  }
  .mobile-nav {
    background-color: #202020;
    position: absolute;
    top: 0;
    min-height: 800px;
    z-index: 30;
    &-extra {
      display: block !important;
    }
    ul {
      display: flex;
      justify-content: space-between;
      padding: 0 30px;
      list-style: none;
      .icon {
        color: #999;
        width: 15px;
      }
    }
    .tumblr {
      width: 10px !important;
    }
  }
  .below-nav {
    /* position: absolute; */
    padding: 20px;
    flex-direction: column;
    .icon,
    .mobile-mastercard {
      display: block;
    }
    a {
      margin-left: 0;
      font-size: 15px;
    }
  }
  .insider-con {
    background-color: #fff;
    margin: 0 -20px;
  }
  .insider-flex {
    display: flex;
    padding: 20px;
    img {
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      width: 100px;
    }
    .text-bold {
      color: #000;
    }
  }
}
</style>
