import React, { useState } from "react";
import { ConnectButton } from "./ConnectButton";
import Image from "next/image";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
///Fiber
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { Stats, useGLTF } from "@react-three/drei";
import { Vector3 } from "three";
import Box from "./Box";
function Rig() {
  const { camera, mouse } = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    // camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

export const LandingPage = () => {
  const { isConnected, address } = useAccount();
  const router = useRouter();

  if (isConnected) {
    console.log(address);
    router.push("/dashboard");
  }

  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <directionalLight position={[0, 0, 1]} />
      {[...Array(7).keys()].map((i) => (
        <group key={i * 9}>
          <Box position={[-11, -4.5 + i * 1.5, 0]} text={"S"} />
          <Box position={[-9, -4.5 + i * 1.5, 0]} text={"S"} />
          <Box position={[-7, -4.5 + i * 1.5, 0]} text={"S"} />
          <Box position={[-5, -4.5 + i * 1.5, 0]} text={"S"} />
          <Box position={[-3, -4.5 + i * 1.5, 0]} text={"B"} />
          <Box position={[-1, -4.5 + i * 1.5, 0]} text={"C"} />
          <Box position={[1, -4.5 + i * 1.5, 0]} text={"O"} />
          <Box position={[3, -4.5 + i * 1.5, 0]} text={"D"} />
          <Box position={[5, -4.5 + i * 1.5, 0]} text={"E"} />
          <Box position={[7, -4.5 + i * 1.5, 0]} text={"E"} />
          <Box position={[9, -4.5 + i * 1.5, 0]} text={"E"} />
        </group>
      ))}
      <Rig />
    </Canvas>
  );
};

useGLTF.preload("/eyeball.glb");
{
  /* <group {...props}>
<mesh castShadow receiveShadow geometry={nodes.body001.geometry} material={materials.Body} />
<group ref={head}>
  <mesh castShadow receiveShadow geometry={nodes.head001.geometry} material={materials.Head} />
  <mesh castShadow receiveShadow geometry={nodes.stripe001.geometry}>
    <meshBasicMaterial ref={stripe} toneMapped={false} />
    <pointLight ref={light} intensity={1} color={[10, 2, 5]} distance={2.5} />
  </mesh>
</group>
</group> */
}
