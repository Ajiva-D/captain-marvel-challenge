<template>
  <div>
		<Header/>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
html {
  font-family: 'Roboto', sans-serif;
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
.container{
	padding-left: 100px;
	padding-right: 100px;
}
h1,h2,h3,h4,h5,h6{
	font-weight: bold;
}
h1{
	font-size: 44px;
}
h6{
	font-size:15px
}
.text{
	&-tiny{
		font-size: 12px;
	}
	&-small{
		font-size: 15px;
	}
}

/* backgrounds */
.bg{
	&-black{
		background-color: #202020;
	}
}
</style>
