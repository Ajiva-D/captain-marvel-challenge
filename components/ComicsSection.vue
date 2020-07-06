<template>
	<div class="comics-section container">
		<h3>RECENT COMICS</h3>
		<div class="comics-con">
			<div class="comics-card" v-for="(comic, index) in comics" :key="index">
				<img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" alt="">
				<p class="text-small text-bold">
{{comic.title}}</p>
<p class="text-tiny test-grey">{{comic.dates[0].date | luxon:format('yyyy')}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			comics:[]
		}
	},
methods:{
	async getCharacter(){
		
		let res = await this.$axios.$get('characters/1010338/comics?apikey=6740ae373da1c47cbdc80ee83dfc9158')
		console.log(res.data.results);
		this.comics = res.data.results.splice(0,6);
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
	p{
		width:170px;
	}
}
}
h3{
	margin-bottom:40px;
}

</style>