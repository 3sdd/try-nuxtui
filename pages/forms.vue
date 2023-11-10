<template>
	<main>
		<UDivider label="toggle" />

		<div>
			<div>
				<UToggle v-model="toggle1" color="primary" />
			</div>
			<div>
				<UToggle
					v-model="toggle2"
					on-icon="i-heroicons-check-20-solid"
					off-icon="i-heroicons-x-mark-20-solid"
				/>
			</div>
			<div>
				<UToggle v-model="toggle3" color="primary" disabled />
			</div>
		</div>

		<UDivider label="range" />
		<div>
			<div>
				<label for="range1" class="sr-only" />
				<URange id="range1" v-model="range1" name="range1" />
			</div>

			<div>
				<URange v-model="range1" color="purple" />
			</div>

			<div>
				<URange v-model="range1" color="blue" size="sm" />
			</div>

			<div>
				<URange disabled />
			</div>

			<div>
				<URange v-model="range2" :min="0" :max="100" />
				{{ range2 }}
			</div>

			<div>
				<URange v-model="range3" :min="0" :max="100" :step="2" />
				{{ range3 }}
			</div>
		</div>

		<UDivider label="checkbox" />
		<div>
			<UCheckbox
				v-model="checkbox1"
				name="notification"
				label="Notifications"
			/>
		</div>
		<div>
			<UCheckbox
				v-model="checkbox1"
				name="notification"
				label="Notifications"
				color="purple"
				required
			/>
		</div>
		<div>
			<UCheckbox v-model="checkbox1" label="ラベル" help="ヘルプ文章" />
		</div>
		<div>
			<UCheckbox v-model="checkbox1" label="ラベル" disabled />
		</div>
		<div>
			<UCheckbox>
				<template #label>
					<span class="italic">Label</span>
				</template>
			</UCheckbox>
		</div>
	</main>
</template>

<script setup lang="ts">
const toggle1 = ref(false);
const toggle2 = ref(false);
const toggle3 = ref(false);

const range1 = ref(50);
const range2 = ref(0);
const range3 = ref(0);

const checkbox1 = ref(false);
</script>
