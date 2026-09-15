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
