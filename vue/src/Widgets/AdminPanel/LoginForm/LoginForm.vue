<template>


	<div class="fixed w-full h-full top-0 left-0 bg-slate-500/80 z-50">
		<section class="form">
			<div class="form__headerWrapper">
				<h2 class="form__title">Вход в аккаунт</h2>
			</div>

			<div class="form__wrapper">
				<div class="form__formWrapper">
					<label class="form__label" for="form-username">Имя пользователя</label>
					<Input class="!bg-gray-100 !rounded-xl focus-within:!bg-gray-200" type="text" id="form-username" name="username" placeholder="" v-model="formData.username" required autofocus></Input>
				</div>

				<div class="form__formWrapper">
					<label class="form__label" for="form-password">Пароль</label>
					<Input class="!bg-gray-100 !rounded-xl focus-within:!bg-gray-200" type="password" id="form-password" name="password" placeholder="" v-model="formData.password" required></Input>
				</div>

				<div class="form__formWrapper">
					<div class="form__formSubWrapper">
                        <Button @click="login" :isActive="!isLoginLoading">
                            <span>Войти</span>
                        </Button>
					</div> 
				</div>				
			</div>
		</section>
		
	</div>
</template>

<script setup lang="ts">
import Button from '@/Ui/Button.vue';
import { useStore } from 'vuex';
import { RootStateInterface } from '@/Store';
import { computed } from 'vue';
import StateInterface from '@/Store/Modules/Authorization/StateInterface';
import { useRouter } from "vue-router";
import Input from "@/Ui/Input.vue"

const store = useStore<RootStateInterface>();
const router = useRouter();

let formData = {
	isSubmit: false,
	username: null,
	password: null,
};

const isLoggedIn = computed(() => !!(store.state.authorization as StateInterface).token);
const isLoginLoading = computed(() => (store.state.authorization as StateInterface).isLoginLoading);

async function login() {
	if(!formData.username || !formData.password) {
		return;
	}
	
	await store.dispatch('authorization/login', formData); // login Vuex

	if(isLoggedIn.value) {
		router.push('/'); // home page
	}
}
</script>

<style scoped>
.button {
	background: var(--color-blue1);
}
.button:hover {
	opacity: 1;
	background: var(--color-blue2);
}

.form {
    --formWidth: 25rem;
	position: fixed;
	width: var(--formWidth);
    top: 30%;
    left: calc(50% - (var(--formWidth)/2));
    background: white;
	padding: 1.875rem;
	padding-bottom: 1.5625rem;
    border-radius: 1.875rem;
    display: flex;
    flex-direction: column;
    z-index: 1;
}

.form__wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5625rem 0rem;
}


.form__title {
    margin: 0;
	margin-bottom: 1.875rem;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -webkit-linear-gradient(45deg,var(--color-blue1),#980094);
    padding-bottom: 0.1875rem;
}

.form__formWrapper {
    display: flex;
    flex-direction: column;
}

.form__formSubWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.form__formSubWrapper > div {
    display: flex;
}


.form__label {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    user-select: none;
    cursor: pointer;
}

.form__input {
	font-family: 'Nunito';
	font-size: 0.9375rem;
	color: #44444478;
    padding: 0.625rem;
    border: 0;
    border-radius: 1.875rem;
    background: var(--color_white5);
    transition-duration: var(--animationTime_400);
    height: 0.625rem;

}   .form__input:focus {
        background: #0000000d;
        height: 1.875rem;
        color: #444;
}

.form__checkbox {
    appearance: checkbox;
    transform: scale(1.3);
    filter: opacity(0.7);
}
</style>