<template>
	<div class="bg-[var(--color-black1)]" v-if="condition">
		<div class="bg-white w-full rounded-[2.25rem]">
			<div class="px-[8.375rem] py-12 flex flex-col gap-24 max-phoneX:px-[1.125rem]">
				<div class="flex flex-col gap-14">
					<div class="flex flex-col gap-7">
						<h2 class="text-transparent text-4xl font-mont font-semibold bg-clip-text bg-gradient-casheer-title-to-b leading-tight" v-html="condition.title"></h2>
						<span class="text-[var(--color-black1)] text-2xl font-[Arial] font-normal" v-html="condition.description"></span>
					</div>

					<div class="flex flex-col gap-7">
						<div class="flex flex-col gap-7">
							<h2 class="text-transparent text-3xl font-mont font-semibold bg-clip-text bg-gradient-casheer-title-to-b leading-tight" v-html="disclaimer.title"></h2>
							<span class="text-[var(--color-black1)] text-base font-[Arial] font-normal leading-snug" v-html="disclaimer.description"></span>
						</div>

						<div class="flex gap-4 self-center">
							<Checkbox v-model="disclaimerIsAgree"></Checkbox>
							<span class="text-[var(--color-violet1)] text-base font-[Arial] font-normal" v-html="disclaimer.agree_title"></span>
						</div>
					</div>
				</div>
				

				<ul class="grid grid-cols-2 grid-flow-row gap-8 max-phoneX:grid-cols-1">
					<li v-for="item in documtensList" :key="item" class="z-10">
						<ConditionDocument
							:item="item"
							:is-agree="disclaimerIsAgree"
						></ConditionDocument>
					</li>
				</ul>
			</div>
		</div>
    </div>
</template>

<script setup lang="ts">
import Checkbox from "@/Ui/Checkbox.vue";
import CheckNoneIcon from './Components/Plan/Assets/CheckNoneIcon.vue';
import CheckTryIcon from './Components/Plan/Assets/CheckTryIcon.vue';
import { computed, ref } from "vue";
import ConditionDocumentInterface from './Components/ConditionDocument/Type/ConditionDocumentInterface';
import ConditionInterface from "./Type/ConditionInterface";
import DisclaimerInterface from "./Type/DisclaimerInterface";
import ConditionDocument from "./Components/ConditionDocument/ConditionDocument.vue";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);

const condition = computed(() => pageData.value.data?.condition);

const title = computed<string>(() => condition.value?.title);
const description = computed<string>(() => condition.value?.description);
const disclaimer = computed<DisclaimerInterface>(() => condition.value?.disclaimer);
const documtensList = computed<Array<ConditionDocumentInterface>>(() => condition.value?.documtens_list);

const disclaimerIsAgree = ref(disclaimer?.value?.is_agree ?? false);

/* const condition = computed<ConditionInterface>(() => {
	return {
		title: 'Web Store Terms & Conditions <br>(Sample Template)',
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

const disclaimerIsAgree = ref(disclaimer.value.is_agree ?? false);

const documtensList = computed<Array<ConditionDocumentInterface>>(() => [
	{
		document: '<p><span style="font-size:20px">terms and conditions</span></p>  <p><span style="font-size:16px">use of this website is subject to the following conditions:</span></p>  <p><br /> <span style="font-size:16px">the content of the pages of this website is for your general information and use only as it is subject to change without notice.<br /> this website uses cookies to monitor your browsing preferences. if you allow the use of cookies, personal information may be stored by us for use by third parties.<br /> neither we nor any third party provide any warranty as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.</span></p>  <p><br /> <span style="font-size:16px">we acknowledge that such information and materials may contain inaccuracies or errors, and we shall not be liable for any such errors to the fullest extent permitted by law.</span></p>  <p><br /> <span style="font-size:16px">your use of any information or materials on this website is entirely at your own risk, for which we will not be liable. it is your responsibility to ensure that any products, services or information available through this website meet its specific requirements.</span></p>  <p><br /> <span style="font-size:16px">this website contains material that is owned by or licensed to us. this material includes, but is not limited to, the design, layout, look, feel and graphics. reproduction is prohibited except in accordance with the terms of copyright, which forms part of these terms and conditions.</span></p>',
		button: {
			is_active: true,
			text: 'Download',
			link: '/'
		}
	},
	{
		document: '<p style="text-align:right"><span style="font-size:20px">الشروط والاحكام</span></p>  <p style="text-align:right"><span style="font-size:20px">يخضع استخدام هذا الموقع للشروط التالية:</span></p>  <p style="text-align:right"><br /> <span style="font-size:20px">محتوى صفحات هذا الموقع هو لمعلوماتك العامة واستخدامها فقط حيث أنه يخضع للتغيير دون إشعار.</span></p>  <p style="text-align:right"><br /> <span style="font-size:20px">هذا الموقع يستخدم ملفات التعريف لمراقبة تفضيلات التصفح. إذا سمحت باستخدام ملفات تعريف الارتباط، فقد يتم تخزين المعلومات الشخصية من قبلنا لاستخدامها من قبل أطراف ثالثة.<br /> لا نقدم نحن ولا أي طرف ثالث أي ضمان فيما يتعلق بدقة و توقيت، أو أداء أو اكتمال أو ملاءمة المعلومات والمواد الموجودة أو المعروضة على هذا الموقع لأي غرض معين.<br /> نقر بأن مثل هذه المعلومات والمواد قد تحتوي على معلومات غير دقيقة أو أخطاء، ونحن لا نتحمل المسؤولية عن أي من هذه الأخطاء إلى أقصى حد يسمح به القانون.</span></p>  <p style="text-align:right"><br /> <span style="font-size:20px">إن استخدامك لأي معلومات أو مواد على هذا الموقع يكون على مسؤوليتك الخاصة بالكامل، ولن نتحمل المسؤولية تجاهه. تقع على عاتقك مسؤولية التأكد من أن أي منتجات أو خدمات أو معلومات متاحة من خلال هذا الموقع تفي بمتطلباته المحددة.</span></p>  <p style="text-align:right"><br /> <span style="font-size:20px">يحتوي هذا الموقع على مواد مملوكة أو مرخصة لنا. تشمل هذه المواد، على سبيل المثال لا الحصر، على التصميم والتخطيط، والشكل والمظهر والرسومات. يحظر النسخ إلا وفقًا لأحكام حقوق الطبع والنشر، والذي يشكل جزءًا من هذه الشروط والأحكام.</span></p>  <p style="text-align:right"><br /> <span style="font-size:20px">يتم الاعتراف بجميع العلامات التجارية المستخدمة في هذا الموقع والتي ليست مملوكة أو مرخصة.<br /> الاستخدام غير المصرح به لهذا الموقع قد يؤدي إلى مطالبة بالتعويض عن الأضرار و / أو يكون جريمة جنائية.</span></p>  <p style="text-align:right"><br /> <span style="font-size:20px">قد يشتمل هذا الموقع أيضًا على روابط لمواقع أخرى. يتم توفير هذه الروابط &nbsp;</span></p>',
		button: {
			is_active: true,
			text: 'Download',
			link: '/'
		}
	}
]); */
</script>
