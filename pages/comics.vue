<template>
	<main class="comics-page">
			<div @click="closeModal">
		<transition name="fade">
				<Modal v-if="showModal" :selected="selected" />
		</transition>
	</div>
		<div class="sort-con container">
			<h3>Sort by Year</h3>
			<select name="year" id="year" v-model="year">
				<option value="" hidden>Select Year</option>
				<option value="All">All</option>
				<option v-for="(i, index) in 51" :key="index" :value="i+1969">{{i+1969}}</option>
			</select>
		</div>

 	<comics-section title="ALL COMICS" :comics="comics" @openModal="openModal($event)"/>
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
			year:'',
			showModal:false,
			selected:{}
		}
	},
	computed:{
		url(){
			return `characters/1010338/comics?limit=50&offset=${this.offset}&apikey=${this.apikey}`
		}
	},
	methods:{
		closeModal(){
			this.showModal=false
		},
		async openModal(comic){
			this.showModal=true
			console.log(comic);
			
		this.selected = comic	
		},
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
	},
	showModal(){
		console.log("watch show");
		
		const page = document.querySelector('body');
		if(this.showModal){
			page.style.height = '100vh';
			page.style.overflow="hidden";	
		}
		else{
			page.style.height = '100%';
			page.style.overflow ="scroll";
		}
	}
}
}
</script>

<style lang="scss">
.comics-page{
	position: relative;
}
.sort-con{
	padding-top:40px;
	padding-bottom: 20px;
	display:flex;
	justify-content: flex-end;
	select{
		margin-left:10px;
	}
}
button{
	position: relative;
	z-index:20;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>