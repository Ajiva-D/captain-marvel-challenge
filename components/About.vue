<template>
<div class="main-about">
	<div class="about">
		<div class="desktop-about">
			<h2>CAPTAIN MARVEL</h2>
			<p>Near death, Carol Danvers was transformed into a powerful warrior for the Kree. Now, returning to Earth years later, she must remember her past in order to to prevent a full invasion by shapeshifting aliens, the Skrulls.</p>
			<a target="_self" class="cta-btn cta-btn--solid cta-btn--red " href="https://www.marvel.com/movies/captain-marvel"><div class="innerFill "><span>Watch Now</span></div></a>
		</div>
	</div>
		<div class="mobile-about">
			<h2>CAPTAIN MARVEL</h2>
			<p>Near death, Carol Danvers was transformed into a powerful warrior for the Kree. Now, returning to Earth years later, she must remember her past in order to to prevent a full invasion by shapeshifting aliens, the Skrulls.</p>
			<a target="_self" class="cta-btn cta-btn--solid cta-btn--red " href="https://www.marvel.com/movies/captain-marvel"><div class="innerFill "><span>Watch Now</span></div></a>
		</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.about{
	background-image: url('../assets/008cmv_ons_cut_dsk_03.jpg');
	height:700px;
	background-position: 50% 0;
	background-size: cover;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right:200px;
	margin-top:100px;
	p{
		width:400px;
		margin:15px 0;
		line-height: 1.5;
		letter-spacing: .5px;
	}

}
	.mobile-about{
		display: none;
	}
	@media screen and (max-width:767px){
		.main-about{
			background-color: #fff;
		}
		.about{
			flex-direction:column;
			/* justify-content: flex-start; */
			padding-right:10px;
			background-position-x: 25%;
			height:300px;
		}
		.desktop-about{
			display: none;
		}
		.mobile-about{
			display: block;
			padding:40px 20px 20px;
			h2{
				margin-bottom: 20px;
			}
		}
	}
	@media screen and (min-width:768px) and (max-width:999px)  {
			.about{
			/* flex-direction:column; */
			padding-right:10px;
			background-position-x: 25%;
			height:300px;
		}
	}
</style>