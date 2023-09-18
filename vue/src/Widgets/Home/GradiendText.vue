<template>
	<div class="flex flex-col w-full max-md:min-h-0 bg-[var(--color-black1)] relative justify-center items-start">
		<div class="px-[7vw] py-[7vw]">
			<span class="text-6xl font-bold font-mont leading-tight text-transparent bg-clip-text bg-gradient-casheer-to-b anim-bg">
				We support small, medium, and large-sized businesses with the most powerful financial tools, 
				payment solutions, vendor applications, and consumer products designed to 
				facilitate transactions.
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.anim-bg {
	background-size: 200% auto;
	animation: shine 8s linear infinite;
}

@keyframes shine {
    to {
      background-position: -200% center;
    }
}
</style>
