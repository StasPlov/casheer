<template>
	<div class="w-full bg-[var(--color-black1)]">
        <div class="px-[25vw] py-[4vw] z-10  flex flex-col gap-12">

            <div class=" flex flex-col gap-12">
				<div class="flex flex-col gap-4">
					<h2 class="text-white text-5xl font-mont font-bold" v-html="post.post.post_title"></h2>
					<span class="text-white text-2xl text-[Arial] z-10" v-html="post.post.post_content"></span>
				</div>
                
                <Author></Author>
            </div>

			<a href="/news" v-if="button.is_active" class="self-center">
				<Button class="bg-transparent">
					<span class="text-white text-3xl font-bold font-mont underline text-center">{{ button.text }}</span>
				</Button>
			</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/Ui/Button.vue'
import Author from './Author.vue'
import NewsPageDataInterface from "../../Entity/NewsPageDataInterface";
import ButtonInterface from '../../Entity/ButtonInterface';

const props = defineProps<{
	post: NewsPageDataInterface
	button: ButtonInterface
}>();
</script>