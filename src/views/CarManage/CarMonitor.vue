<template>
<!-- 车辆监控 -->
    <div class="monitor">
        <h1>车辆监控 </h1>
    </div>
</template>
<script setup >
import { onMounted } from "vue";
// 引入three
import * as THREE from 'three'
// 使用three
/**
 * 建立场景 scene
 * 相机：camera
 * 渲染器：renderer
 * PerspectiveCamera:透视摄像机（视野角度，长宽比，近截面near，远截面far）
 * 
 */
const scene = new THREE.Scene() ;
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.
innerHeight,.1,1000);
const renderer = new THREE.WebGLRenderer();
//渲染器的尺寸
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild( renderer.domElement);
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const animate =()=> {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

onMounted(()=>{
    animate()
})
</script>