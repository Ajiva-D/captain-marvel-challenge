<template>
	<div class="news bg-black container">
		<h3 class="text-white">LATEST NEWS</h3>
	<div class="news-body">
			<div v-for="(article, index) in articles" :key="index" class="news-card">
			<img :src="article.img" alt="">
			<p class="text-small text-grey text-bold">{{article.title}}</p>
			<p class="text-small text-white">{{article.excerpt}}</p>
		</div>
	</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			articles:[
				{
					img:'https://terrigen-cdn-dev.marvel.com/content/prod/1x/capmarv2019018006_col_card.jpg',
					title:"COMICS",
					excerpt:`Artist Cory Smith Joins 'Captain Marvel' As Carol Danvers Enters as the Accuser`
				},
					{
					img:'https://terrigen-cdn-dev.marvel.com/content/prod/1x/captain-marvel-18_card.jpg',
					title:"COMICS",
					excerpt:`Accusers and Captain Marvel's New Role`
				},
					{
					img:'https://terrigen-cdn-dev.marvel.com/content/prod/1x/flerken.jpg',
					title:"CULTURE & LIFESTYLE",
					excerpt:`Peek Inside the Pages of ‘Beware the Flerken!’ With Writer Calliope Glass and Illustrator Rob McClurkan`
				},
					{
					img:'https://terrigen-cdn-dev.marvel.com/content/prod/1x/storytrailer.jpg',
					title:"GAMES",
					excerpt:`Marvel Games Comic Connection: MODOK`
				},
			]
		}
	}
}
</script>

<style scoped lang="scss">
.news{
	padding-top:20px;
	padding-bottom: 40px;
	&-body{
		display: flex;
		flex-wrap: wrap;
		padding-top:10px;
	}
	&-card{
		margin-right:10px;
	}
}
	img{
		width:300px;
	}
	p{
		width:300px;
		margin:8px 0 10px 0;
	}

	@media screen and (max-width:767px){
		img{
			width:100%;
		}
	}
		@media screen and (min-width:768px) and (max-width:999px)  {
			.news-body{
				justify-content: center;
			}
		}
</style>