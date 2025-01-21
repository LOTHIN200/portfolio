<template>
  <div ref="canvasContainer" class="three-scene"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvasContainer = ref(null);

// Scene setup
let scene, camera, renderer, cube;

onMounted(() => {
  if (!process.client) return; // Ensure this only runs on the client side

  // Initialize Three.js components
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    90, // Increased FOV
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
  renderer.setClearColor(0x000000, 0); // Set background to transparent
  renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8); // Adjust renderer size

  // Append the renderer to the container
  canvasContainer.value.appendChild(renderer.domElement);

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("/images/cirtificate.jpg");
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  renderer.setPixelRatio(window.devicePixelRatio); // Ensure sharp rendering
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

  // Add a cube with the texture
  const geometry = new THREE.BoxGeometry(4, 4, 4); // Larger cube
  const material = new THREE.MeshBasicMaterial({ map: texture });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Position the camera
  camera.position.z = 10; // Move the camera further back

  // Add OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = true;
  controls.minDistance = 5; // Adjust minimum zoom distance
  controls.maxDistance = 20; // Adjust maximum zoom distance
  controls.enableRotate = true; // Allow user-controlled rotation

  // Handle window resize
  const onResize = () => {
    const width = window.innerWidth * 0.8; // Adjust renderer size on resize
    const height = window.innerHeight * 0.8;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };
  window.addEventListener("resize", onResize);

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);

    // Update controls
    controls.update();

    // Render the scene
    renderer.render(scene, camera);
  };

  animate();

  // Cleanup on unmount
  onUnmounted(() => {
    if (!process.client) return; // Ensure cleanup only runs on the client side
    window.removeEventListener("resize", onResize);
    canvasContainer.value?.removeChild(renderer.domElement);
    scene.remove(cube);
    cube.geometry.dispose();
    cube.material.dispose();
    texture.dispose();
    renderer.dispose();
  });
});
</script>

<style scoped>
.three-scene {
  width: 100%;
  height: 100%;
}
</style>
