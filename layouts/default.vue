<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");
html {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
a {
  text-decoration: none;
}
.container {
  padding-left: 100px;
  padding-right: 100px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
}
h1 {
  font-size: 44px;
}
h2 {
  font-size: 34px;
}
h3{
	font-size:26px
}
h6 {
  font-size: 15px;
}
.text {
  &-tiny {
    font-size: 12px;
  }
  &-small {
    font-size: 15px;
  }
	&-bold{
		font-weight: bold;
	}
	/* Text color */
	&-white{
		color:#fff;
	}
	&-grey{
			color:#999;
	}
	&-red{
		color:#e62429;
	}
}

/* backgrounds */
.bg {
  &-black {
    background-color: #202020;
  }
}

/* Custom button */
.cta-btn .innerFill {
  font: 800 14px/1 Roboto Bold, Trebuchet MS, Helvetica, Arial, sans-serif;
  text-transform: uppercase;
}
.cta-btn {
  background-color: transparent;
  border-radius: 0;
  border: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  margin: 15px auto;
  overflow: hidden;
  padding: 0;
  position: relative;
  letter-spacing: 0;
  width: auto;
  z-index: 10;
}
.cta-btn .innerFill {
  padding: 0 35px;
  text-align: center;
}
.cta-btn .innerFill:before {
  left: 0;
  top: 0;
}
.cta-btn .innerFill:after {
  bottom: 0;
  right: 0;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.cta-btn .innerFill:after,
.cta-btn .innerFill:before {
  border-color: transparent;
  border-style: solid;
  border-width: 0 0 16px 16px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  content: "";
  display: block;
  position: absolute;
}
.cta-btn .innerFill.hasLogo {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
.cta-btn .innerFill.hasLogo,
.cta-btn .innerFill.hasLogo .btn-img-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.cta-btn .innerFill.hasLogo .btn-img-wrapper {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  max-height: 36px;
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
  margin-left: 10px;
}
.cta-btn .innerFill.hasLogo .btn-img-wrapper .img__wrapper {
  position: absolute;
  height: 36px;
  top: -18px;
}
.cta-btn:after,
.cta-btn:before {
  border-style: solid;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  content: "";
  display: block;
  height: 16px;
}
.cta-btn:before {
  border-width: 0 0 16px 16px;
  margin-left: 16px;
  top: 0;
}
.cta-btn:after {
  border-width: 16px 16px 0 0;
  bottom: 0;
  margin-right: 16px;
}
.cta-btn:focus {
  outline: 2px solid #c6a972;
}
.cta-btn.cta-btn--outline.cta-btn--red:after,
.cta-btn.cta-btn--outline.cta-btn--red:before {
  border-color: #e62429;
  -webkit-transition: none;
  transition: none;
  max-width: calc(100% - 15px);
}
.cta-btn.cta-btn--outline.cta-btn--red:before {
  border-width: 1px 1px 0 0;
  right: 0;
}
.cta-btn.cta-btn--outline.cta-btn--red:after {
  border-width: 0 0 1px 1px;
  left: 0;
}
.cta-btn.cta-btn--outline.cta-btn--red .innerFill {
  background-color: transparent;
  border-left: 1px solid #e62429;
  border-right: 1px solid #e62429;
  color: #e62429;
  opacity: 1;
  -webkit-transition: none;
  transition: none;
  text-align: center;
  line-height: 16px;
}
.cta-btn.cta-btn--outline.cta-btn--red .innerFill:after,
.cta-btn.cta-btn--outline.cta-btn--red .innerFill:before {
  background-size: 16px 24px;
  background-image: repeating-linear-gradient(
    -45deg,
    #e62429,
    #e62429 1px,
    transparent 0,
    transparent 16px
  );
  -webkit-transition: none;
  transition: none;
}
.cta-btn.cta-btn--outline.cta-btn--red .innerFill a {
  display: block;
}
.cta-btn.cta-btn--outline.cta-btn--red:hover:after,
.cta-btn.cta-btn--outline.cta-btn--red:hover:before {
  opacity: 0.4;
  -webkit-transform: translate3d(0);
  transform: translate3d(0);
}
.cta-btn.cta-btn--outline.cta-btn--red:hover .innerFill {
  border-color: rgba(235, 35, 40, 0.4);
}
.cta-btn.cta-btn--outline.cta-btn--red:hover .innerFill:after,
.cta-btn.cta-btn--outline.cta-btn--red:hover .innerFill:before {
  opacity: 0.4;
}
.cta-btn.cta-btn--outline.cta-btn--light:after,
.cta-btn.cta-btn--outline.cta-btn--light:before {
  border-color: #fff;
  -webkit-transition: none;
  transition: none;
  max-width: calc(100% - 15px);
}
.cta-btn.cta-btn--outline.cta-btn--light:before {
  border-width: 1px 1px 0 0;
  right: 0;
}
.cta-btn.cta-btn--outline.cta-btn--light:after {
  border-width: 0 0 1px 1px;
  left: 0;
}
.cta-btn.cta-btn--outline.cta-btn--light .innerFill {
  background-color: transparent;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  color: #fff;
  opacity: 1;
  -webkit-transition: none;
  transition: none;
  text-align: center;
  line-height: 16px;
}
.cta-btn.cta-btn--outline.cta-btn--light .innerFill:after,
.cta-btn.cta-btn--outline.cta-btn--light .innerFill:before {
  background-size: 16px 24px;
  background-image: repeating-linear-gradient(
    -45deg,
    #fff,
    #fff 1px,
    transparent 0,
    transparent 16px
  );
  -webkit-transition: none;
  transition: none;
}
.cta-btn.cta-btn--outline.cta-btn--light .innerFill a {
  display: block;
}
.cta-btn.cta-btn--outline.cta-btn--light:hover:after,
.cta-btn.cta-btn--outline.cta-btn--light:hover:before {
  opacity: 0.4;
  -webkit-transform: translate3d(0);
  transform: translate3d(0);
}
.cta-btn.cta-btn--outline.cta-btn--light:hover .innerFill {
  border-color: hsla(0, 0%, 100%, 0.4);
}
.cta-btn.cta-btn--outline.cta-btn--light:hover .innerFill:after,
.cta-btn.cta-btn--outline.cta-btn--light:hover .innerFill:before {
  opacity: 0.4;
}
.cta-btn.cta-btn--outline.cta-btn--dark:after,
.cta-btn.cta-btn--outline.cta-btn--dark:before {
  border-color: #151515;
  -webkit-transition: none;
  transition: none;
  max-width: calc(100% - 15px);
}
.cta-btn.cta-btn--outline.cta-btn--dark:before {
  border-width: 1px 1px 0 0;
  right: 0;
}
.cta-btn.cta-btn--outline.cta-btn--dark:after {
  border-width: 0 0 1px 1px;
  left: 0;
}
.cta-btn.cta-btn--outline.cta-btn--dark .innerFill {
  background-color: transparent;
  border-left: 1px solid #151515;
  border-right: 1px solid #151515;
  color: #151515;
  opacity: 1;
  -webkit-transition: none;
  transition: none;
  text-align: center;
  line-height: 16px;
}
.cta-btn.cta-btn--outline.cta-btn--dark .innerFill:after,
.cta-btn.cta-btn--outline.cta-btn--dark .innerFill:before {
  background-size: 16px 24px;
  background-image: repeating-linear-gradient(
    -45deg,
    #151515,
    #151515 1px,
    transparent 0,
    transparent 16px
  );
  -webkit-transition: none;
  transition: none;
}
.cta-btn.cta-btn--outline.cta-btn--dark .innerFill a {
  display: block;
}
.cta-btn.cta-btn--outline.cta-btn--dark:hover:after,
.cta-btn.cta-btn--outline.cta-btn--dark:hover:before {
  opacity: 0.4;
  -webkit-transform: translate3d(0);
  transform: translate3d(0);
}
.cta-btn.cta-btn--outline.cta-btn--dark:hover .innerFill {
  border-color: rgba(32, 32, 32, 0.4);
}
.cta-btn.cta-btn--outline.cta-btn--dark:hover .innerFill:after,
.cta-btn.cta-btn--outline.cta-btn--dark:hover .innerFill:before {
  opacity: 0.4;
}
.cta-btn.cta-btn--solid.cta-btn--red:after,
.cta-btn.cta-btn--solid.cta-btn--red:before {
  background-color: #e62429;
  border-color: #e62429;
  -webkit-transition: none;
  transition: none;
}
.cta-btn.cta-btn--solid.cta-btn--red:before {
  margin-left: 16px;
}
.cta-btn.cta-btn--solid.cta-btn--red:after {
  margin-right: 16px;
}
.cta-btn.cta-btn--solid.cta-btn--red .innerFill {
  color: #fff;
  background-color: #e62429;
  -webkit-transition: none;
  transition: none;
  text-align: center;
}
.cta-btn.cta-btn--solid.cta-btn--red .innerFill:after,
.cta-btn.cta-btn--solid.cta-btn--red .innerFill:before {
  border-color: #e62429 transparent;
  -webkit-transition: none;
  transition: none;
}
.cta-btn.cta-btn--solid.cta-btn--red .innerFill img {
  max-height: 36px;
  width: auto;
  text-align: center;
  margin: 0 auto !important;
}
.cta-btn.cta-btn--solid.cta-btn--red:hover:after,
.cta-btn.cta-btn--solid.cta-btn--red:hover:before {
  background-color: #9f0013;
  border-color: #9f0013;
  opacity: 1;
}
.cta-btn.cta-btn--solid.cta-btn--red:hover .innerFill {
  background-color: #9f0013;
  border-color: #9f0013;
  color: #fff;
}
.cta-btn.cta-btn--solid.cta-btn--red:hover .innerFill:after,
.cta-btn.cta-btn--solid.cta-btn--red:hover .innerFill:before {
  border-color: #9f0013 transparent;
  opacity: 1;
}
.cta-btn.cta-btn--solid.cta-btn--red:hover div {
  background-color: transparent;
}
.cta-btn.cta-btn--solid.cta-btn--red:hover div:after,
.cta-btn.cta-btn--solid.cta-btn--red:hover div:before {
  border-color: transparent;
}
.cta-btn.cta-btn--solid.cta-btn--blue:after,
.cta-btn.cta-btn--solid.cta-btn--blue:before {
  background-color: #3a67d2;
  border-color: #3a67d2;
  -webkit-transition: none;
  transition: none;
}
.cta-btn.cta-btn--solid.cta-btn--blue:before {
  margin-left: 16px;
}
.cta-btn.cta-btn--solid.cta-btn--blue:after {
  margin-right: 16px;
}
.cta-btn.cta-btn--solid.cta-btn--blue .innerFill {
  color: #fff;
  background-color: #3a67d2;
  -webkit-transition: none;
  transition: none;
  text-align: center;
}
.cta-btn.cta-btn--solid.cta-btn--blue .innerFill:after,
.cta-btn.cta-btn--solid.cta-btn--blue .innerFill:before {
  border-color: #3a67d2 transparent;
  -webkit-transition: none;
  transition: none;
}
.cta-btn.cta-btn--solid.cta-btn--blue .innerFill img {
  max-height: 36px;
  width: auto;
  text-align: center;
  margin: 0 auto !important;
}
.cta-btn.cta-btn--solid.cta-btn--blue:hover:after,
.cta-btn.cta-btn--solid.cta-btn--blue:hover:before {
  background-color: #5888f9;
  border-color: #5888f9;
  opacity: 1;
}
.cta-btn.cta-btn--solid.cta-btn--blue:hover .innerFill {
  background-color: #5888f9;
  border-color: #5888f9;
  color: #fff;
}
.cta-btn.cta-btn--solid.cta-btn--blue:hover .innerFill:after,
.cta-btn.cta-btn--solid.cta-btn--blue:hover .innerFill:before {
  border-color: #5888f9 transparent;
  opacity: 1;
}
.cta-btn.cta-btn--solid.cta-btn--blue:hover div {
  background-color: transparent;
}
.cta-btn.cta-btn--solid.cta-btn--blue:hover div:after,
.cta-btn.cta-btn--solid.cta-btn--blue:hover div:before {
  border-color: transparent;
}
.cta-btn.cta-btn--solid.cta-btn--light:after,
.cta-btn.cta-btn--solid.cta-btn--light:before {
  background-color: #fff;
  border-color: #fff;
  -webkit-transition: none;
  transition: none;
}
.cta-btn.cta-btn--solid.cta-btn--light:before {
  margin-left: 16px;
}
.cta-btn.cta-btn--solid.cta-btn--light:after {
  margin-right: 16px;
}
.cta-btn.cta-btn--solid.cta-btn--light .innerFill {
  color: #151515;
  background-color: #fff;
  -webkit-transition: none;
  transition: none;
  text-align: center;
}
.cta-btn.cta-btn--solid.cta-btn--light .innerFill:after,
.cta-btn.cta-btn--solid.cta-btn--light .innerFill:before {
  border-color: #fff transparent;
  -webkit-transition: none;
  transition: none;
}
.cta-btn.cta-btn--solid.cta-btn--light .innerFill img {
  max-height: 36px;
  width: auto;
  text-align: center;
  margin: 0 auto !important;
}
.cta-btn.cta-btn--solid.cta-btn--light:hover:after,
.cta-btn.cta-btn--solid.cta-btn--light:hover:before {
  background-color: #bbb;
  border-color: #bbb;
  opacity: 1;
}
.cta-btn.cta-btn--solid.cta-btn--light:hover .innerFill {
  background-color: #bbb;
  border-color: #bbb;
  color: #151515;
}
.cta-btn.cta-btn--solid.cta-btn--light:hover .innerFill:after,
.cta-btn.cta-btn--solid.cta-btn--light:hover .innerFill:before {
  border-color: #bbb transparent;
  opacity: 1;
}
.cta-btn.cta-btn--solid.cta-btn--light:hover div {
  background-color: transparent;
}
.cta-btn.cta-btn--solid.cta-btn--light:hover div:after,
.cta-btn.cta-btn--solid.cta-btn--light:hover div:before {
  border-color: transparent;
}
figure.img__wrapper {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
