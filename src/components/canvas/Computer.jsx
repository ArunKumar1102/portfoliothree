import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Computer = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
   <mesh>
    <hemisphereLight intensity={0.15} groundColor="black" />
    <pointLight intensity={1}/>
    <primitive object={computer.scene} scale={0.75} position={[0, -3.25, -1.5]} />
   </mesh>
  )
}

const ComputerCanvas =() =>{
  return(
    <Canvas frameloop="demand" shadows camera={{position: [20,3,5], fov:25}} gl={{preserveDrawingBuffer: true}} >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={ true} maxPolarAngle={Math.PI / 2}  minPolarAngle={Math.PI/2}/>
        <Computer />
      </Suspense>
      <Preload/>
    </Canvas> 
  )
}

export default ComputerCanvas;
