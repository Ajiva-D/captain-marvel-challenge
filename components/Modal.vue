<template>
  <div class="modal-con">
    <div class="modal">
      <img
        :src="`${selected.images[0].path}.${selected.images[0].extension}`"
        alt=""
      />
      <div class="modal-content">
        <h1>{{selected.title}}</h1>
        <h3 class="text-red">Release Date:</h3>
        <p class="text-small text-grey">{{selected.dates[0].date | luxon}}</p>
        <div class="mid-flex">
          <div v-for="(creator,index) in selected.creators.items" :key="index">
            <h3 class="text-red">{{creator.role.toUpperCase()}}:</h3>
            <p class="text-small text-grey">{{creator.name}}</p>
          </div>
        </div>
				 <!-- <h3 class="text-red">Penciler:</h3>
            <p class="text-small text-grey">John Wickahm</p> -->
        <p class="text-small modal-text">
         {{selected.description || 'No Description'}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props:[
		"selected"
	]
};
</script>

<style lang="scss" scoped>
.modal-con {
  height: 100vh;
   position: fixed;
    top: 0;
    left: 0;
    right:0;
    bottom:0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  /* overflow-y: hidden; */
}
.modal {
  background: #fff;
  border-radius: 6px;
  margin: 100px;
  padding: 40px 60px;
  display: flex;
	overflow-y: scroll;
  &-content {
    margin-left: 30px;
		h1{
			text-align: center;
		}
  }
	&-text{
		width:600px;
		margin-top:20px;
		font-size:15px;
		padding-bottom:30px
	}
}
img {
  width: 400px;
  height: 500px;
  object-fit: cover;
}
.mid-flex{
	display: flex;
	margin:20px 0;
	flex-wrap:wrap;
	div{
			margin:10px 60px 10px 0;
	}
}
h1{
	margin-bottom:30px;
}
@media screen and (max-width:767px){
	.modal {
  margin: 20px;
  padding: 40px 20px;
  display: flex;
	flex-direction: column;
	overflow-y: scroll;
  &-content {
    margin-left: 0px;
  }
	&-text{
		width:100%;
		margin-top:20px;
		font-size:15px;
		padding-bottom:30px
	}
}
img {
  width: 100%;
  height: 300px;
  object-fit: contain;
}
}
</style>
