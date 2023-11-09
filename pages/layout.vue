<template>
	<main>
		<UDivider label="ラベル" />

		<UDivider label="ラベル" type="dashed" />

		<UDivider
			label="ラベル"
			:ui="{ border: { size: { horizontal: 'border-t-2' } } }"
		/>

		<UDivider>
			<div class="w-4 h-4 bg-blue-200"></div>
		</UDivider>

		<UCard>
			<template #header>
				<div class="h-8 bg-blue-200">header</div>
			</template>

			<div class="h-16 bg-green-400">main</div>

			<template #footer>
				<div class="h-8 bg-red-200">footer</div>
			</template>
		</UCard>

		<UContainer>
			<div class="h-8">content</div>
		</UContainer>

		<div class="flex items-center space-x-4">
			<USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
			<div class="space-y-2">
				<USkeleton class="h-4 w-[250px]" />
				<USkeleton class="h-4 w-[200px]" />
			</div>
		</div>
	</main>
</template>
