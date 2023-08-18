<template>
	<LoginForm>
	</LoginForm>
</template>

<script setup lang="ts">
import { RootStateInterface } from "@/Store";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import LoginForm from "@/Widgets/AdminPanel/LoginForm/LoginForm.vue"
import StateInterface from "@/Store/Modules/Authorization/StateInterface";
import { computed, onMounted, watch } from "vue";

const store = useStore<RootStateInterface>();
const router = useRouter();
const isLoggedIn = computed(() => !!(store.state.authorization as StateInterface).token);

onMounted(() => {
	if(isLoggedIn.value) {
		console.log(isLoggedIn.value);
		
		router.replace({ name: 'home' });
	}
});

</script>