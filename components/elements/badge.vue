<template>
	<div>
		<div>
			<UBadge>バッジ</UBadge>
			<UBadge label="バッジ" />
		</div>
		<div>
			color:
			<UBadge color="yellow" variant="solid" label="badge" />
			<UBadge color="gray" variant="solid" label="badge" />
			<UBadge color="black" variant="solid" label="badge" />
			<UBadge color="black" variant="outline" label="badge" />
		</div>
		<div>
			<UBadge size="lg">badge</UBadge>
		</div>
		<div>
			<UBadge :ui="{ rounded: 'rounded-full' }">badge</UBadge>
		</div>
	</div>
</template>
