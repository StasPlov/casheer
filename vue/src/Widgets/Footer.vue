<template>
	<footer class="flex flex-col bg-[var(--color-black1)]">
		<div class="px-[7vw] py-[10vh] border-t-[3px] border-white flex flex-col gap-5 items-center">
			<div class="flex flex-col gap-7">
				<h2 class="text-white text-3xl font-bold font-mont text-center">Contact us</h2>
			
				<Button class="gap-5">
					<img :src="iconCollIcon" alt="" class="h-5">
					<span class="text-base text-white font-semibold font-[Arial] tracking-wide">+965 22598808</span>
				</Button>
			</div>
			

			<div class="flex flex-col gap-7 items-center w-full">
				<h3 class="text-xl text-white font-normal font-[Arial]">Subscribe for newsletter</h3>

				<Input class="border-[0.1875rem] border-white !rounded-[6.25rem] !bg-transparent max-w-[48.125rem] py-2 pl-8 text-[var(--color-silver1)] text-xl font-[Arial]" placeholder="Your email address">
					<template #content-after>
						<Button class="!rounded-full h-10 w-10 p-2">
							<img :src="sendIcon" alt="" class="h-5">
						</Button>
					</template>
				</Input>
			</div>
		</div>

		<div class="px-[7vw] py-[10vh] border-t-[3px] border-white w-full">
			
		</div>
	</footer>
</template>

<script setup lang="ts">
import Button from "@/Ui/Button.vue";
import Input from "@/Ui/Input.vue";
import iconCollIcon from "@/Assets/Icons/icon_coll.svg";
import sendIcon from "@/Assets/Icons/send.svg";
</script>
