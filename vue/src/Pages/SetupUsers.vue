<template>
   <div class="flex flex-col gap-10">
		<!--  тут потом будут фильтры -->
		<div class="flex flex-row gap-5">
			<Panel :useInfo="false">
				<template #icon>
					<i class="fa-solid fa-sliders text-2xl text-[#68676E]"></i>
				</template>
			</Panel>

			<Panel
				:title="deleteCount"
				:description="'Удаленные модули'"
				:iconClass="'bg-[var(--color-red1)] text-white'"
			>
				<template #icon>
					<i class="fa-solid fa-trash-can"></i>
				</template>
			</Panel>

			<Panel
				:title="hidenCount"
				:description="'Скрытые модули'"
				:iconClass="'bg-[var(--color-white1)] text-white'"
			>
				<template #icon>
					<i class="fa-regular fa-eye-slash"></i>
				</template>
			</Panel>

			<Panel
				:title="cantDelete"
				:description="'Нельзя удалить'"
				:iconClass="'bg-[var(--color-blue1)] text-white'"
			>
				<template #icon>
					<i class="fa-solid fa-lock"></i>
				</template>
			</Panel>

			<Panel
				:title="main"
				:description="'Главные модули'"
				:iconClass="'bg-[var(--color-green1)] text-white'"
			>
				<template #icon>
					<i class="fa-solid fa-house"></i>
				</template>
			</Panel>
		</div>

		<UserList></UserList>
	</div>
</template>

<script setup lang="ts">
import Panel from "@/Ui/Panel.vue";
import UserList from "@/Widgets/AdminPanel/UserList/UserList.vue";
</script>