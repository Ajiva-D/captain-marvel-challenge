<template>
	<div class="comics-section container">
		<h3>RECENT COMICS</h3>
		<div class="comics-con">
			<div class="comics-card" v-for="(i, index) in 6" :key="index">
				<img src="https://i.annihil.us/u/prod/marvel/i/mg/f/70/5b2a9bf8acd74/portrait_uncanny.jpg" alt="">
				<p class="text-small text-bold">
Ms. Marvel (1977) #1</p>
<p class="text-tiny test-grey">1977</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
methods:{
	async getCharacter(){
		let res = await this.$axios.$get('character/1009261')
		console.log(res.data);
		
	}
},
mounted(){
	this.getCharacter()
}
}
</script>

<style scoped lang="scss">
.comics{
	&-section{
	margin:30px 0;
}
&-con{
	display:flex;
	justify-content: space-between;
}
&-card{
	img{
		width:170px;
	}
}
}
h3{
	margin-bottom:40px;
}

</style>