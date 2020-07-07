<template>
	<div class="comics-section container">
		<h3>{{title}}</h3>
		<div class="comics-con">
			<div class="comics-card" v-for="(comic, index) in comics" :key="index" @click="openModal(index)">
				<img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" loading="lazy" width=170 alt="">
				<p class="text-small text-bold">
{{comic.title}}</p>
<p class="text-tiny test-grey">{{comic.dates[0].date | luxon:format('yyyy')}}</p>
			</div>
		</div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props:[
		"title","comics"
	],
	data(){
		return{
		}
	},
	methods:{
		openModal(i){
			this.$emit('openModal',this.comics[i])
		}
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
	flex-wrap: wrap;
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
	@media screen and (max-width:767px){
		.comics{
			&-con{
	display:flex;
	justify-content: center;
	/* flex-wrap: wrap; */
}
&-card{
	margin:0 10px;
}
		}
	}
</style>