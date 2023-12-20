<template>
	<button :class="$style.button" @click="count++">{{ count }}</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<style module>
.button {
	position: fixed;
	inset: 0;
	block-size: 2rem;
	inline-size: 5rem;
	margin: auto;
	cursor: pointer;
	user-select: none;
}
</style>
