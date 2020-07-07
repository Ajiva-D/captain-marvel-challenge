<template>
  <footer class="bg-black container">
    <div class="top-footer">
      <div>
        <svg viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg">
          <rect fill="#EC1D24" width="100%" height="100%"></rect>
          <path
            fill="#FEFEFE"
            d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"
          ></path>
        </svg>
      </div>
      <div class="lists-footer">
        <ul>
          <li>
            <a href="" class="text-white text-small text-bold">ABOUT MARVEL</a>
          </li>
          <li>
            <a href="" class="text-white text-small text-bold">HELP/FAQS</a>
          </li>
          <li>
            <a href="" class="text-white text-small text-bold">CAREERS</a>
          </li>
          <li>
            <a href="" class="text-white text-small text-bold">INTERNSHIPS</a>
          </li>
        </ul>
        <ul>
          <li><a href="" class="text-white text-small">ADVERTISING</a></li>
          <li><a href="" class="text-white text-small">MARVELHQ.COM</a></li>
          <li>
            <a href="" class="text-white text-small"
              >REDEEMDIGITAL <br />
              COMICS</a
            >
          </li>
        </ul>
      </div>
      <div>
        <div class="insider-flex flex-1">
          <img
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png"
            alt="marvel insider logo"
          />
          <div class="insider-text">
            <p class="text-white text-small text-bold">MARVEL INSIDER</p>
            <p class="text-grey tetxt-small">
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
            <p class="text-white text-small text-bold">MARVEL MASTERCARD®</p>
            <p class="text-grey tetxt-small">
              6 Card Designs—Unlimited Cashback
            </p>
          </div>
        </div>
      </div>
      <div class="follow-marvel">
        <p class="text-white text-small text-bold">FOLLOW MARVEL</p>
        <div class="social-con">
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
          </ul>
          <ul class="social-links">
            <li>
              <a href="" class="text-grey"
                ><font-awesome-icon :icon="['fab', 'youtube']" class="icon"
              /></a>
            </li>

            <li>
              <a href="" class="text-grey"
                ><font-awesome-icon
                  :icon="['fab', 'snapchat-ghost']"
                  class="icon"
              /></a>
            </li>

            <li>
              <a href="" class="text-grey"
                ><font-awesome-icon :icon="['fab', 'pinterest']" class="icon"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom-footer">
      <ul>
        <li><a href="" class="text-tiny text-grey">Terms of Use</a></li>
        <li><a href="" class="text-tiny text-grey">Privacy Policy</a></li>
        <li>
          <a href="" class="text-tiny text-grey"
            >Your California Policy Rights</a
          >
        </li>
        <li><a href="" class="text-tiny text-grey">Do not Sell My Info</a></li>
        <li>
          <a href="" class="text-tiny text-grey"
            >Children's Online Privacy Policy</a
          >
        </li>
        <li><a href="" class="text-tiny text-grey">License Agreement</a></li>
        <li><a href="" class="text-tiny text-grey">Interested-Based Ads</a></li>
        <li><a href="" class="text-tiny text-grey">Marvel Insider Terms</a></li>
      </ul>
      <p class="text-tiny text-grey">©2020 MARVEL</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  padding-top: 70px;
  padding-bottom: 30px;
}
.top-footer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.lists-footer {
  display: flex;
  ul {
    margin: 0 40px;
  }
}
.bottom-footer {
  margin-top: 80px;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
  }
  p {
    text-align: center;
  }
}
svg {
  width: 80px;
}
.insider {
  &-flex {
    display: flex;
    img {
      width: 50px;
      object-fit: contain;
      align-self: flex-start;
    }
  }
  &-text {
    margin-left: 20px;
    margin-bottom: 10px;
  }
}
ul {
  list-style: none;
  padding-left: 0;
}
li {
  margin-bottom: 5px;
}
.social-links {
  display: flex;
  .tumblr {
    width: 13px;
  }
}
.top {
  margin-top: 20px;
}
.icon {
  width: 20px;
  margin-right: 30px;
}
@media screen and (max-width: 999px) {
    .top-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .lists-footer {
    margin: 20px 0;
    li {
      margin-bottom: 20px;
    }
  }
  .flex-1 {
    border-top: 1px solid #999;
    padding-top: 50px;
  }
  .flex-2 {
    border-bottom: 1px solid #999;
    padding-bottom: 50px;
  }
  .follow-marvel {
    padding-top: 20px;
  }
  .social-con {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  .top {
    margin-top: 0px;
  }
  .bottom-footer {
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0 30px;
      li {
        margin: 0 10px;
      }
    }
  }
}
</style>
