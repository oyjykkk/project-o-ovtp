<template>
  <d-map class="mapContainer"></d-map>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.mapContainer {
    width: 100%;
    height: 400px;
}
.map :deep(.leaflet-bottom.leaflet-right) {
  display: none;
}
</style>
