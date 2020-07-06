<template>
	<main>
		<div class="sort-con container">
			<h3>Sort by Year</h3>
			<select name="year" id="year" v-model="year">
				<option value="" hidden>Select Year</option>
				<option value="All">All</option>
				<option v-for="(i, index) in 51" :key="index" :value="i+1969">{{i+1969}}</option>
			</select>
		</div>
 	<comics-section title="ALL COMICS" :comics="comics"/>
	 <infinite-loading 
   spinner="spiral"
   @infinite="infiniteScroll"
></infinite-loading>
	</main>
</template>

<script>
export default {
	data(){
		return{
			comics:[],
			offset:0,
			apikey:'6740ae373da1c47cbdc80ee83dfc9158',
			year:''
		}
	},
	computed:{
		url(){
			return `characters/1010338/comics?limit=50&offset=${this.offset}&apikey=${this.apikey}`
		}
	},
	methods:{
	async getCharacter(){
		let res = await this.$axios.$get(this.url)
		this.comics = res.data.results;
	},
	infiniteScroll($state) {
      setTimeout(() => {
        this.offset+=50
        this.$axios
          .$get(this.url)
          .then((res) => {
            if (res.data.results.length > 1) {
              res.data.results.forEach((item) => this.comics.push(item))
              $state.loaded()
            } else {
              $state.complete()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }, 500)
    }
},
mounted(){
	this.getCharacter()
},
watch:{
	year(){
		if(this.year){
		if(	this.year === "All"){
			this.offset = 0;
		this.getCharacter()
		}else{
				this.$axios.get(`characters/1010338/comics?startYear=${this.year}&apikey=${this.apikey}`)
			.then(res=>{
				this.comics = res.data.data.results;
				
			})  .catch((err) => {
            console.log(err)
          })
		}
		}
	}
}
}
</script>

<style lang="scss">
.sort-con{
	padding-top:40px;
	padding-bottom: 20px;
	display:flex;
	justify-content: flex-end;
	select{
		margin-left:10px;
	}
}
</style>