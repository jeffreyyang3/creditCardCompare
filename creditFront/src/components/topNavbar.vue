<template>
	<nav class="topNavbar">
		<div class="navItems">
			<div>yo</div>
			<router-link to="/">Home</router-link> 
     		 <router-link to="/about">About</router-link>
			<div class="btn btn-primary" @click="pop"> cool</div>
			<cardsModal/>
		</div>
	</nav>






</template>	

<style type="text/css">
	
.topNavbar {
	z-index: 123456789;
	width: 100%;
	position: fixed;
	top: 0;
	height: 46px;
	background-color: white;
	box-shadow: 0 2px 2px -2px grey;
}
.navItems {
	width: 100%;	
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 3px;
	margin-bottom: 3px
}


</style>

<script>
import cardsModal from '@/components/cardsModal'

export default {
	name: 'topNavbar',
	components: {
		cardsModal
	},
	methods: {
		pop: function() {
			this.$store.commit('removeOne')
		}
	}

}
</script>
