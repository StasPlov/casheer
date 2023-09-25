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

const title = computed<string>(() => 'Required Documents Checklist');
const description = computed<string>(() => 'Onboard your business in real time. <br>Simply view the simple checklist below and sign up. <br>Get started now.');
const list = computed<Array<DocumentInterface>>(() => [
	{
        title: 'KYC Documents',
        description: '',
        list: [
            {
                is_active: true,
                description: 'Commercial Registration Certificate'
            },
            {
                is_active: true,
                description: 'Identification documents for the owner: Passport or National ID and Residence Permit or VISA copy (for non-KSA nationals only)'
            },
            {
                is_active: true,
                description: 'Identification documents for the authorised signatories/managers if different from the owner: Passport or National ID and Residence Permit or VISA copy (for non-KSA nationals only)'
            },
            {
                is_active: true,
                description: 'Proof of address for owner and authorised signatories/managers if different from the owner: National address certificate, utility bill, etc.'
            },
			{
                is_active: true,
                description: 'Account Details: bank account statement, Bank issued letter or online banking record or any other document displaying the IBAN, Business name, Account Number and Bank Name'
            },
        ]
    },
	{
        title: 'Website Requirements',
        description: 'Explore a quick overview of what you need to accept payments in no time!',
        list: [
            {
                is_active: true,
                description: 'Commercial Registration Certificate'
            },
            {
                is_active: true,
                description: 'Identification documents for the owner: Passport or National ID and Residence Permit or VISA copy (for non-KSA nationals only)'
            },
            {
                is_active: true,
                description: 'Identification documents for the authorised signatories/managers if different from the owner: Passport or National ID and Residence Permit or VISA copy (for non-KSA nationals only)'
            },
            {
                is_active: true,
                description: 'Proof of address for owner and authorised signatories/managers if different from the owner: National address certificate, utility bill, etc.'
            },
			{
                is_active: true,
                description: 'Account Details: bank account statement, Bank issued letter or online banking record or any other document displaying the IBAN, Business name, Account Number and Bank Name'
            },
        ]
    }
]);
</script>
