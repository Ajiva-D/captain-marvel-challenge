<template>
	<div class="latest-videos container">
		<h3>LATEST VIDEOS</h3>
		<div class="videos-con">
			<video id="video-tag-video-257bfcfe0f15e900b181656c4b4afc3c_html5_api" class="vjs-tech" data-account="5359769168001" data-embed="default" playsinline="playsinline" data-player="rkg9u15t7b" tabindex="-1" preload="auto" poster="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/4cb4ae25-afab-4c63-94a9-9a836d7093e9/0398c747-ec1c-400c-bb13-5d559225235f/1280x720/match/image.jpg" src="blob:https://www.marvel.com/17cd503a-a987-4531-a231-eb6d1bc55ae7"></video>
			<div class="thumbnail-con">
				<img src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/4cb4ae25-afab-4c63-94a9-9a836d7093e9/0398c747-ec1c-400c-bb13-5d559225235f/1280x720/match/image.jpg" alt="" class="thumbnail-img" v-for="(i, index) in 3" :key="index">
			</div>
		</div>
		<div>
			<p class="text-tiny text-red text-bold">MARVEL CULTURE AND LIFESTYLE</p>
			<h3 class="video-title">DIY Captain Marvel's Star of Hala!</h3>
			<p class="video-description">Your Marvel Mission was to create Captain Marvel's Star of Hala using only safe household items! Lorraine Cink highlights a few of her favorites while making her own Star of Hala!</p>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.latest-videos{
	padding-top:20px;
	padding-bottom: 20px;
	h3{
		margin:10px 0;
	}
}
video{
width:75%;
align-self: flex-start;
box-shadow: 0 35px 54px -25px rgba(0,0,0,.4);
}
.videos-con{
	display: flex;
	justify-content: space-between;
}
.thumbnail{
	&-img{
	width:280px;
	border:1px solid #e62429;
	margin:0px 0px 20px 20px;
	}
}
.video{
	&-description{
		width:600px;
	}
	&-title{
		margin:10px 0;
	}
}

	@media screen and (max-width:767px){
		video{
			width:100%;
		}
		.video{
	&-description{
		width:100%;
	}
	}
		.thumbnail-con{
			display: none;
		}
	}
		@media screen and (min-width:768px) and (max-width:999px)  {
			.thumbnail-con{
			display: none;
		}
		}
	</style>