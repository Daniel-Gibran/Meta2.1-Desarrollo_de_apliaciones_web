<template>
  <v-footer class="mt-8" color="primary">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">Nombre: Daniel Gibran Alvarez Armienta</v-col>
        <v-col cols="12" md="3">Matrícula: 1183092</v-col>
        <v-col cols="12" md="3">Fecha: {{ date }}</v-col>
        <v-col cols="12" md="3">Contacto: daniel.alvarez26@uacb.edu.mx</v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
  const date = new Date().toLocaleDateString('es-MX')
</script>
