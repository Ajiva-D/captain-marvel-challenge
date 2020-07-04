<template>
	<div>
		<div class="hero-bg">
		<div class="container">
				<h6>CAROL DANVERS</h6>
			<h1>CAPTAIN MARVEL</h1>
			<p class="hero-description">Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.</p>
		</div>
		<div class="bg-black tabs">
			<div class="active-tab">
				<p class="text-tiny">OVERVIEW</p>
			</div>
			<div class="middle-tab">
				<p class="text-tiny">IN COMICS</p> 
				<p class="text-tiny">PROFILE</p>
			</div>
			<div>
				<p class="text-tiny">IN COMICS FULL</p>
				<p class="text-tiny">REPORT</p>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
	.hero{
		&-bg{
		background-image: url('../assets/008cmv_ons_mas_dsk_02.jpg');
		height:450px;
		background-size: cover;
		color:#fff;
		display: flex;
		align-items: center;
		position: relative;
		}
		&-description{
			width:600px;
		}
	}
		h1{
			margin:8px 0;
		}
	.tabs{
		display: flex;
		position: absolute;
		left:100px;
		bottom:-30px;
		div{
			padding:20px;
			color:#999;
		}
	}
	.active-tab{
		color:#fff!important;
		border-top:5px solid #e62429;
	}
	.middle-tab{
		border-left:1px solid #393939;
	border-right:1px solid #393939;
	}
</style>