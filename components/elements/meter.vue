<template>
	<div>
		<div>
			<UMeter :value="25" />
		</div>
		<div>
			<UMeter :min="-50" :max="20" :value="15" />
		</div>
		<div>
			indicator
			<UMeter :value="25" indicator />
		</div>
		<div>
			label
			<UMeter :value="25" label="ラベル" />
		</div>
		<div>
			<UMeter icon="i-heroicons-server" label="label" :value="25" />
		</div>
		<div>
			size,color
			<UMeter size="lg" :value="25" color="purple" />
		</div>
		<div>
			<UMeterGroup :min="0" :max="128" indicator icon="i-heroicons-minus">
				<UMeter :value="24" label="system" color="gray" />
				<UMeter :value="8" label="app" color="red" />
			</UMeterGroup>
		</div>
		<div>
			<UMeterGroup :max="128">
				<template #indicator>
					<div class="flex gap-1.5 justify-between text-sm">
						<p>86GB used</p>
						<p>42GB remaining</p>
					</div>
				</template>

				<UMeter
					:value="24"
					color="gray"
					label="system"
					icon="i-heroicons-document"
				/>
				<UMeter
					:value="8"
					color="red"
					label="apps"
					icon="i-heroicons-window"
				/>
			</UMeterGroup>
		</div>
		<div>
			<UMeter :value="used" :max="total">
				<template #indicator="{ percent }">
					<div>{{ used }} GB used ({{ Math.round(percent) }}%)</div>
				</template>
			</UMeter>
		</div>

		<div>
			<UMeter :value="used" :max="total">
				<template #label="{ percent }">
					<p class="text-sm">
						You are using {{ Math.round(used) }} GB ({{
							Math.round(100 - percent)
						}}%)
					</p>
				</template>
			</UMeter>
		</div>
	</div>
</template>

<script setup lang="ts">
const used = ref(84.2);
const total = 230;
</script>
