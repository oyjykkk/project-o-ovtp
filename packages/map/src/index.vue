<template>
    <div ref="mapContainer" class="mapContainer"></div>
  </template>
  
  <script setup lang="ts" name="HiMap">
  // 使用适当的地图库，例如 Leaflet, Mapbox, 或者 Google Maps
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  import "leaflet.heat";
  import "leaflet.markercluster/dist/MarkerCluster.css";
  import "leaflet.markercluster/dist/MarkerCluster.Default.css";
  import "leaflet.markercluster";
  import { onMounted, ref } from "vue";
  
  const mapContainer = ref(null);
  const mapInstance = ref(null);
  
  
  onMounted(() => {     
    // 初始化地图
    mapInstance.value = L.map(mapContainer.value, {
      crs: L.CRS.EPSG3857,
      center: [30.249061, 122.330446], //中心坐标,
      attribution: "",
      zoom: 14,
      maxZoom: 18,
      minZoom: 14,
      zoomControl: false, //缩放组件
    });
    L.marker([30.249061, 122.330446]).addTo(mapInstance.value)
    L.circle([30.249061, 122.330446], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(mapInstance.value)
    L.polygon([[30.24, 122.32], [30.24, 122.33], [30.25, 122.33]]).addTo(mapInstance.value)
  });
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
  