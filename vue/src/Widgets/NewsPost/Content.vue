<template>
	<div class="w-full bg-[var(--color-black1)]">
        <div class="px-[25vw] py-[4vw] z-10  flex flex-col gap-12">

            <div class=" flex flex-col gap-12">
                <span class="text-white text-2xl text-[Arial] z-10">
                    <p>
                        <big><strong>Lorem ipsum dolor sit amet</strong></big>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum pharetra odio, quis efficitur diam rhoncus at.
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Cras vestibulum pharetra odio, quis efficitur diam rhoncus at. Nam semper, 
                        nulla vel commodo fermentum, velit nulla lacinia tortor, ac tincidunt ligula dolor ut nisi. Vestibulum eget quam elit. 
                        Nullam tempor viverra massa vitae porttitor.
                    </p>
                    
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Cras vestibulum pharetra odio, quis efficitur diam rhoncus at. Nam semper, nulla vel commodo fermentum, velit nulla lacinia tortor, ac tincidunt ligula dolor ut nisi. Vestibulum eget quam elit. Nullam tempor viverra massa vitae porttitor. 
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum pharetra odio, quis efficitur diam rhoncus at. Nam semper, nulla vel commodo fermentum, velit nulla lacinia tortor, ac tincidunt ligula dolor ut nisi. Vestibulum eget quam elit. Nullam tempor viverra massa vitae porttitor.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Cras vestibulum pharetra odio, quis efficitur diam rhoncus at. Nam semper, nulla vel commodo fermentum, velit nulla lacinia tortor, ac tincidunt ligula dolor ut nisi. Vestibulum eget quam elit. Nullam tempor viverra massa vitae porttitor. 
                    </p>
                    
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum pharetra odio, quis efficitur diam rhoncus at. Nam semper, nulla vel commodo fermentum, velit nulla lacinia tortor, ac tincidunt ligula dolor ut nisi. Vestibulum eget quam elit. Nullam tempor viverra massa vitae porttitor.
                        Lorem Ipsum 
                        Lorem Ipsum 
                    </p>
                </span>

                <Author></Author>
            </div>

            <Button class="bg-transparent self-center">
                <span class="text-white text-3xl font-bold font-mont underline text-center">More news</span>
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/Ui/Button.vue'
import Author from './Author.vue'
</script>