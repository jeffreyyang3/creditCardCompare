<template>
	<nav class="topNavbar">
		<div class="navItems">
			<div>yo</div>
			<div class="btn btn-primary"> cool</div>
		</div>
		
	</nav>





</template>	

<style type="text/css">
	
.topNavbar {
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

}
</script>
