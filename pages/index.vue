<template>
  <div>
   <Hero/>
	 <About/>
	 <News/>
	 <latest-videos/>
	 <comics-section title="RECENT COMICS" :comics="comics"/>
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
		this.comics = res.data.results.splice(0,6);
	}
},
mounted(){
	this.getCharacter()
}
}
</script>

<style>
</style>
