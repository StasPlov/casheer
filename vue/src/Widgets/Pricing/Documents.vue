<template>
	<div class="bg-[var(--color-black1)]">
        <div class="px-[7vw] flex flex-col gap-14">
            <div>
                <h2 class="text-transparent text-4xl font-mont font-semibold bg-clip-text bg-gradient-casheer-title-to-b" v-html="title"></h2>
            </div>

            <div class="bg-white">
                <div class="px-8">
                    <h3 class="text-transparent text-[2.5rem] font-medium font-mont">KYC Documents</h3>

                    <ul>
                        <li for>
                            <div>
                                <CheckTryIcon v-if="item_.is_active"></CheckTryIcon>
                                <CheckNoneIcon v-else></CheckNoneIcon>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CheckNoneIcon from './Components/Plan/Assets/CheckNoneIcon.vue';
import CheckTryIcon from './Components/Plan/Assets/CheckTryIcon.vue';
import DocumentInterface from './Type/DocumentInterface';
import { computed, ref } from "vue";

const title = ref('Required Documents Checklist');
const description = ref('Onboard your business in real time. <br>Simply view the simple checklist below and sign up. <br>Get started now.')
const document = computed<DocumentInterface>(() => {
    return {
        title: 'asd',
        description: '123',
        list: [
            {
                is_active: true,
                description: 'Commercial Registration Certificate'
            },
            {
                is_active: true,
                description: 'Proof of address for owner and authorised signatories/managers if different from the owner: National address certificate, utility bill, etc.'
            },
            {
                is_active: true,
                description: 'Identification documents for the owner: Passport or National ID and Residence Permit or VISA copy (for non-KSA nationals only)'
            },
            {
                is_active: true,
                description: 'Identification documents for the owner: Passport or National ID and Residence Permit or VISA copy (for non-KSA nationals only)'
            },/* Доедлать */
        ]
    }
});
</script>
