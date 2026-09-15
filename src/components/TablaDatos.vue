<template>
	<v-table>
		<thead>
			<tr>
				<th>Habilidad</th>
				<th>Nivel</th>
				<th>Años de experiencia</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="row in rows" :key="row.skill">
				<td>{{ row.skill }}</td>
				<td>{{ row.level }}</td>
				<td>{{ row.years }}</td>
			</tr>
		</tbody>
	</v-table>
</template>

<script setup lang="ts">
const rows = [
	{ skill: 'HTML y CSS', level: 'Avanzado', years: 2 },
	{ skill: 'JavaScript', level: 'Intermedio', years: 2 },
	{ skill: 'Vue', level: 'Intermedio', years: 1 },
	{ skill: 'Vuetify', level: 'Intermedio', years: 1 },
]
</script>

<style scoped>
.data-card {
	background: #fffdf9;
	border: 1px solid rgba(35, 49, 52, 0.12);
	border-radius: 18px;
	overflow: hidden;
}

.section-label {
	color: #a64b2a;
	font-size: 0.7rem;
	font-weight: 700;
	letter-spacing: 0.1em;
	text-transform: uppercase;
}

.section-title {
	color: #233134;
	font-family: Georgia, 'Times New Roman', serif;
	font-size: 1.45rem;
	white-space: normal;
}

.data-table :deep(th) {
	background: #eef3ef;
	color: #536668;
	font-size: 0.7rem;
	letter-spacing: 0.08em;
	text-transform: uppercase;
}

.data-table :deep(td),
.data-table :deep(th) {
	height: 3.5rem;
}
</style>
