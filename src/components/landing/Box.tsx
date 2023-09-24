import { useRef, useState, useMemo, MutableRefObject, Ref } from "react";
import { useFrame } from "@react-three/fiber";
import {
  BufferGeometry,
  Color,
  Group,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  NormalBufferAttributes,
  Object3DEventMap,
} from "three";
import { Text } from "@react-three/drei";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useGLTF } from "@react-three/drei";

interface BoxProps {
  text: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export default function Box({ text, ...props }: BoxProps) {
  //   const ref = useRef<Mesh<BufferGeometry<NormalBufferAttributes>>>(null);
  const ref = useRef<Group<Object3DEventMap>>(null);
  const black = useMemo(() => new Color("black"), []);
  const lime = useMemo(() => new Color("lime"), []);
  const [hovered, setHovered] = useState(false);
  const { open } = useWeb3Modal();

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 2.5;
    const y = (mouse.y * viewport.height) / 2.5;
    ref.current?.children.forEach((el) => {
      el.lookAt(x, y, 1);
    });
  });

  const handleClick = async () => {
    await open();
  };

  const GLTF = useGLTF("eyeball.glb");
  const { nodes, materials } = GLTF;

  return (
    <group
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <mesh
        {...props}
        geometry={nodes.eyeball_1_1.geometry}
        material={materials.Eye_white}
        scale={0.32}
      />
      <mesh
        {...props}
        geometry={nodes.eyeball_1001_1.geometry}
        material={materials.EyeBlack}
        scale={0.32}
      />
      <mesh
        {...props}
        geometry={nodes.eyeball_1003_1.geometry}
        material={materials["Eye_Tranz.001"]}
        scale={0.32}
      />

      <mesh
        {...props}
        geometry={nodes.eyeball_1002_1.geometry}
        onClick={handleClick}
        material={materials.Eye_Iris}
        scale={0.32}
      />
    </group>
  );
}
