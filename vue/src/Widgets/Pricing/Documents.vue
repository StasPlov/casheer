<template>
	<div class="bg-[var(--color-black1)]">
        <div class="px-[7vw] pb-[11vw] flex flex-col gap-14">
            <div>
				<!-- image place -->
                <h2 class="text-transparent text-4xl font-mont font-semibold bg-clip-text bg-gradient-casheer-title-to-b" v-html="title"></h2>
            </div>

			<ul class="flex flex-col gap-16">
				<li v-for="item in list" :key="item" class="z-10">
					<Document
						:item="item"
					></Document>
				</li>
			</ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import CheckNoneIcon from './Components/Plan/Assets/CheckNoneIcon.vue';
import CheckTryIcon from './Components/Plan/Assets/CheckTryIcon.vue';
import { computed, ref } from "vue";
import DocumentInterface from './Components/Document/Type/DocumentInterface';
import Document from './Components/Document/Document.vue';
import { RootStateInterface } from '../../Store';
import { useStore } from 'vuex';
import PageDataStateInterface from '../../Store/Modules/PageData/StateInterface';

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);

const document = computed(() => pageData.value.data?.documents);
const title = computed<string>(() => document.value?.title);
const description = computed<string>(() => document.value?.description);
const list = computed<Array<DocumentInterface>>(() => document.value?.list);
</script>
