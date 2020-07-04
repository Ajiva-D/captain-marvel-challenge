<template>
	<div class="about">
		<div>
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

</style>