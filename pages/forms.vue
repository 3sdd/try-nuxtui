<template>
	<main>
		<UDivider label="input" />
		<div>
			<div>
				<UInput v-model="input1" />
			</div>
			<div>
				<UInput
					v-model="input1"
					color="indigo"
					variant="outline"
					placeholder="placeholder"
				/>
			</div>
			<div>
				lg
				<UInput size="lg" />
			</div>
			<div>
				date:<UInput type="date" /> number:<UInput type="number" />
				password: <UInput type="password" />
			</div>
			<div>
				<UInput
					icon="i-heroicons-magnifying-glass-20-solid"
					:trailing="false"
				/>

				<UInput icon="i-heroicons-magnifying-glass-20-solid" trailing />
			</div>
			<div>
				disabled
				<UInput disabled />
			</div>

			<div>
				loading
				<UInput loading />
			</div>
			<div>
				<UInput>
					<template #leading>
						<UAvatar size="3xs" />
					</template>
				</UInput>
				<UInput>
					<template #trailing>
						<span class="text-gray-500 dark:text-gray-400 text-xs"
							>EUR</span
						>
					</template>
				</UInput>
			</div>
			<div>
				<UInput
					v-model="input2"
					icon="i-heroicons-magnifying-glass-20-solid"
					:ui="{ icon: { trailing: { pointer: '' } } }"
				>
					<template #trailing>
						<UButton
							v-show="input2 !== ''"
							icon="i-heroicons-x-mark-20-solid"
							color="gray"
							variant="link"
							:padded="false"
							@click="input2 = ''"
						/>
					</template>
				</UInput>
			</div>
		</div>

		<UDivider label="textarea" />
		<div>
			<div>
				<UTextarea v-model="textarea1" />
			</div>
			<div>
				<UTextarea
					v-model="textarea1"
					color="indigo"
					placeholder="placeholder"
				/>
			</div>
			<div>
				<UTextarea v-model="textarea1" variant="none" />
			</div>
			<div>
				<UTextarea v-model="textarea1" variant="none" />
			</div>
			<div>
				<UTextarea color="blue" />
				<UTextarea color="white" />
				<UTextarea color="gray" />
			</div>
			<div>
				lg
				<UTextarea size="lg" />
			</div>
			<div>
				<UTextarea disabled />
			</div>
			<div>
				<UTextarea :rows="1" />
			</div>
			<div>
				<UTextarea
					autoresize
					:rows="1"
					placeholder="Search..."
					value="Here is an autoresize Textarea, write new lines to make the Textarea grow up..."
				/>
			</div>
			<div>
				resize

				<UTextarea resize />
			</div>
		</div>

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

const textarea1 = ref("");

const input1 = ref("");
const input2 = ref("");
</script>
