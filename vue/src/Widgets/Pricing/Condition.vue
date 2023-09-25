<template>
	<div class="bg-[var(--color-black1)]">
        <div class="px-[7vw] flex flex-col gap-14">
            <div>
                <h2 class="text-transparent text-4xl font-mont font-semibold bg-clip-text bg-gradient-casheer-title-to-b" v-html="title"></h2>
				<span v-html="description"></span>
            </div>

			<!-- <ul class="flex flex-col gap-16">
				<li v-for="item in list" :key="item" class="z-10">
					<Document
						:item="item"
					></Document>
				</li>
			</ul> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import CheckNoneIcon from './Components/Plan/Assets/CheckNoneIcon.vue';
import CheckTryIcon from './Components/Plan/Assets/CheckTryIcon.vue';
import { computed, ref } from "vue";
import DocumentInterface from './Components/Document/Type/DocumentInterface';
import Document from './Components/Document/Document.vue';
import ConditionInterface from "./Type/ConditionInterface";
import DisclaimerInterface from "./Type/DisclaimerInterface";

const condition = computed<ConditionInterface>(() => {
	return {
		title: 'Web Store Terms & Conditions (Sample Template)',
		description: 'Copy or download this sample template for your e-commerce business and modify it to suit your website. You will be able to copy the template once you have agreed to the disclaimer below.'
	}
});

const disclaimer = computed<DisclaimerInterface>(() => {
	return {
		title: 'Disclaimer',
		description: 'The document is a sample document sourced and collated from various sources available in or derived from the public domain and covers various terms and conditions/service terms used by e-commerce businesses/entities on their websites. This document is not a property of Casheer and is being made available to the recipient as a sample document for reference purpose only. Casheer has not reviewed or checked this document or its terms and conditions or content for its adequacy, accuracy or validity vis-a-vis applicable standards, regulations or rules and does not warrant or represent as such. By accessing this document, the recipient does so at their own risk and volition and with due advice of their legal counsel. In this context the recipient acknowledges that in no event shall Casheer be liable for any damages, claims, liabilities, disputes, infringements or any related/resulting costs or expenses, howsoever arising, including without limitation damages for loss or profit.',
		agree_title: 'I Agree to the above disclaimer',
		is_agree: false
	}
});

//const documtensList = computed() // принимаем список документов, и вывводим их с кнопками в столбюиг грид колум 2, а на мобилказ все в 1 колонку
</script>
