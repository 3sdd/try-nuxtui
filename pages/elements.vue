<template>
	<main>
		<!-- <div>
			<h2>accordion</h2>
		</div> -->
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
