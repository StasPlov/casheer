<template>
	<h1 class="text-[#263238] text-2xl font-semibold" v-if="route">{{ route.title }}</h1>
</template>

<script setup lang="ts">
import { RouteInterface } from "@/router";
import { computed } from "vue";
import { RouteRecordName, useRouter } from "vue-router";

const router = useRouter();
const routeName = computed(() => router.currentRoute.value.name as keyof RouteRecordName);
const route = computed(() => router.options.routes.find(i => i.name === routeName.value) as RouteInterface);
</script>