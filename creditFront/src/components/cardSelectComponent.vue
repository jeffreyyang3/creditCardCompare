<template>
	<div class="cardSelectComponent">
		<img :src="getFile()">	
		<div class="cardDesc">
			<h3>good bonus</h3>	
			<h3>bad card</h3>

		</div>
	</div>
	

</template>
<style scoped type="text/css">
img {
	width: 300px;
	height: 189px;
transition: opacity .25s ease-in-out;
   -moz-transition: opacity .25s ease-in-out;
   -webkit-transition: opacity .25s ease-in-out;

}
img:hover, img.permanentFade {
	opacity: .15;
	transition: opacity .25s ease-in-out;
   -moz-transition: opacity .25s ease-in-out;
   -webkit-transition: opacity .25s ease-in-out;
}
.cardDesc {
	background-color: red;
	width: 300px;
	text-align: center;

}
.cardSelectComponent {
}

</style>
<script type="text/javascript">
export default{
	name: "cardSelectComponent",
	data: function(){
		return {
			cardName: 'cap1venture'
		}

	},
	methods: {
		getFile(){
			return require(`@/assets/cardImages/${this.cardName}.png`)
		},
	}
}








</script>