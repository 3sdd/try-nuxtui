<template>
	<main>
		<UTable :rows="people" />

		<UTable :rows="peopleEmpty" :columns="columns">
			<template #empty-state>
				<div class="flex items-center justify-center">
					<span class="text-sm p-4"> 誰もいません</span>
				</div>
			</template>
		</UTable>
	</main>
</template>

<script setup lang="ts">
type People = {
	id: number;
	name: string;
	title: string;
	email: string;
	role: "Member" | "Admin" | "Owner";
};
const people: People[] = [
	{
		id: 1,
		name: "Lindsay Walton",
		title: "Front-end Developer",
		email: "lindsay.walton@example.com",
		role: "Member",
	},
	{
		id: 2,
		name: "Courtney Henry",
		title: "Designer",
		email: "courtney.henry@example.com",
		role: "Admin",
	},
	{
		id: 3,
		name: "Tom Cook",
		title: "Director of Product",
		email: "tom.cook@example.com",
		role: "Member",
	},
	{
		id: 4,
		name: "Whitney Francis",
		title: "Copywriter",
		email: "whitney.francis@example.com",
		role: "Admin",
	},
	{
		id: 5,
		name: "Leonard Krasner",
		title: "Senior Designer",
		email: "leonard.krasner@example.com",
		role: "Owner",
	},
	{
		id: 6,
		name: "Floyd Miles",
		title: "Principal Designer",
		email: "floyd.miles@example.com",
		role: "Member",
	},
];

const columns = [
	{
		key: "name",
		label: "Name",
	},
	{
		key: "title",
		label: "Title",
	},
	{
		key: "email",
		label: "Email",
	},
	{
		key: "role",
		label: "Role",
	},
	{
		key: "actions",
	},
];

const peopleEmpty: People[] = [];
</script>
