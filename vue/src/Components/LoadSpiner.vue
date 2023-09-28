<template>
	<div class="load-spiner"></div>
</template>

<style scoped>
.load-spiner {
	width: 2.5rem;
	height: 2.5rem;
	background-color: hsla(0,0%,81.6%,.5);
	border-radius: 100%;
	animation: nf-scaleout 1s ease-in-out infinite;
}
@keyframes nf-scaleout {
	0% {
		transform: scale(0);
	} 100% {
		transform: scale(1.0);
		opacity: 0;
	}
}
</style>