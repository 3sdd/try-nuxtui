<template>
	<main>
		<!-- <div>
			<h2>accordion</h2>
		</div> -->

		<UDivider label="badge" />
		<ElementsBadge />

		<UDivider label="meter" />
		<ElementsMeter />

		<UDivider label="alert" />
		<div>
			<h2>alert</h2>

			<div>
				<UAlert title="アラート" color="red" />
			</div>
			<div>
				<UAlert title="アラート" description="説明ですですですです" />
			</div>
			<div>
				<UAlert
					title="アラート"
					description="説明ですですですです"
					icon="i-heroicons-command-line"
				/>
			</div>
			<div>
				<UAlert
					title="アラート"
					description="説明ですですですです"
					:avatar="{ src: '' }"
				/>
			</div>
			<div>
				<UAlert
					:close-button="{
						icon: 'i-heroicons-x-mark-20-solid',
						color: 'gray',
						variant: 'link',
						padded: false,
					}"
					title="アラート"
				/>
			</div>

			<div>
				<UAlert
					:actions="[
						{ label: 'Action 1' },
						{ variant: 'ghost', color: 'gray', label: 'action 2' },
					]"
					title="アラート"
				/>
				<UAlert
					:actions="[
						{ label: 'Action 1' },
						{ variant: 'ghost', color: 'gray', label: 'action 2' },
					]"
					title="アラート"
					description="説明付き"
				/>
			</div>
			<div>
				<UAlert title="タイトル <i>italic </i>">
					<template #title="{ title }">
						<!-- eslint-disable-next-line vue/no-v-html -->
						<span v-html="title" />
					</template>

					<template #description>
						you can add <b>components</b> to your app using the
						<u>cli</u>
					</template>
				</UAlert>
			</div>
		</div>

		<UDivider label="Icon" />
		<div>
			<h2>icon</h2>

			<div>
				<UIcon name="i-heroicons-light-bulb" />
			</div>
		</div>

		<UDivider label="kbd" />
		<div>
			<h2>keyboard key</h2>

			<div>
				<UKbd>K</UKbd>
				<UKbd value="K" />
			</div>

			<div>
				<UKbd size="xs">K</UKbd>
			</div>

			<div>
				<UKbd>{{ metaSymbol }}</UKbd>
			</div>
		</div>

		<UDivider label="Button" />

		<div>
			<h2>button</h2>

			<div>
				<UButton>Button</UButton>
			</div>

			<div>
				<UButton label="button" color="indigo" variant="solid" />
				<UButton label="button" color="indigo" variant="outline" />
			</div>

			<div>
				<UButton size="sm">small button</UButton>
				<UButton size="lg">large button</UButton>
			</div>
			<div>
				<UButton :ui="{ rounded: 'rounded-full' }"
					>rounded button</UButton
				>
			</div>

			<div>
				<UButton
					icon="i-heroicons-pencil-square"
					size="sm"
					color="primary"
					label="Button"
					:trailing="false"
				/>
				<UButton
					icon="i-heroicons-pencil-square"
					size="sm"
					color="primary"
					label="Button"
					:trailing="true"
				/>
			</div>

			<div>
				<UButton icon="i-heroicons-pencil-square" size="sm" square />
			</div>

			<div>
				<UButton label="disable button" disabled />
			</div>

			<div>
				<UButton loading> loading button </UButton>
			</div>

			<div>
				<UButton block>block button</UButton>
			</div>

			<div>
				<UButton to="https://example.com" target="_blank">
					link button</UButton
				>
			</div>

			<div>
				<UButton
					:padded="false"
					icon="i-heroicons-pencil-square"
				></UButton>
			</div>

			<div>
				<UButton square>button</UButton>
			</div>

			<div>
				<UButton
					truncate
					class="w-20"
					label="長いテキスト文のボタンです＝～＝～＝"
				/>

				slotで文章を書くと省略されなかった。labelに設定した文章が省略される。
			</div>

			<div>
				<UButtonGroup orientation="horizontal">
					<UInput />
					<UButton
						icon="i-heroicons-clipboard-document"
						color="blue"
					/>
				</UButtonGroup>
			</div>

			<div>
				<UButton label="button" color="gray">
					<template #leading>
						<UAvatar icon="i-heroicons-photo" size="sm" />
					</template>
				</UButton>
			</div>
			<div>
				<UButton label="button" color="gray">
					<template #trailing>
						<UAvatar icon="i-heroicons-photo" size="sm" />
					</template>
				</UButton>
			</div>
		</div>
		<UDivider />
	</main>
</template>

<script setup lang="ts">
const { metaSymbol } = useShortcuts();
</script>
