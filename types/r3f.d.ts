/**
 * Manual JSX type declarations for @react-three/fiber elements.
 * These are needed because tsconfig excludes node_modules where
 * @react-three/fiber declares these augmentations.
 */
import * as THREE from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        ref?: React.Ref<THREE.Group>;
        position?: THREE.Vector3 | [number, number, number];
        rotation?: THREE.Euler | [number, number, number];
        scale?: THREE.Vector3 | [number, number, number];
      };
      mesh: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        ref?: React.Ref<THREE.Mesh>;
        geometry?: THREE.BufferGeometry;
        material?: THREE.Material | THREE.Material[];
        position?: THREE.Vector3 | [number, number, number];
        rotation?: THREE.Euler | [number, number, number];
        scale?: THREE.Vector3 | [number, number, number];
      };
      points: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        ref?: React.Ref<THREE.Points>;
        geometry?: THREE.BufferGeometry;
        material?: THREE.Material | THREE.Material[];
        position?: THREE.Vector3 | [number, number, number];
      };
      lineSegments: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        ref?: React.Ref<THREE.LineSegments>;
        geometry?: THREE.BufferGeometry;
        material?: THREE.Material | THREE.Material[];
        position?: THREE.Vector3 | [number, number, number];
      };
      ambientLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        intensity?: number;
        color?: THREE.ColorRepresentation;
      };
      directionalLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        intensity?: number;
        color?: THREE.ColorRepresentation;
        position?: THREE.Vector3 | [number, number, number];
      };
      pointLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        intensity?: number;
        color?: THREE.ColorRepresentation;
        position?: THREE.Vector3 | [number, number, number];
      };
      bufferGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        attach?: string;
      };
      bufferAttribute: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        attach?: string;
        count?: number;
        array?: ArrayLike<number>;
        itemSize?: number;
      };
      pointsMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        attach?: string;
        size?: number;
        color?: THREE.ColorRepresentation;
        vertexColors?: boolean;
        transparent?: boolean;
        opacity?: number;
        blending?: THREE.Blending;
        depthWrite?: boolean;
        sizeAttenuation?: boolean;
      };
      lineBasicMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        attach?: string;
        color?: THREE.ColorRepresentation;
        vertexColors?: boolean;
        transparent?: boolean;
        opacity?: number;
        blending?: THREE.Blending;
        linewidth?: number;
        depthWrite?: boolean;
      };
      meshBasicMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        attach?: string;
        color?: THREE.ColorRepresentation;
        transparent?: boolean;
        opacity?: number;
        blending?: THREE.Blending;
        depthWrite?: boolean;
        side?: THREE.Side;
      };
      meshPhysicalMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        attach?: string;
        ref?: React.Ref<THREE.MeshPhysicalMaterial>;
        color?: THREE.ColorRepresentation;
        emissive?: THREE.ColorRepresentation;
        emissiveIntensity?: number;
        metalness?: number;
        roughness?: number;
        transparent?: boolean;
        opacity?: number;
        wireframe?: boolean;
        envMapIntensity?: number;
      };
      sphereGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        args?: [number, number, number];
      };
      icosahedronGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        args?: [number, number];
      };
      ringGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        args?: [number, number, number];
      };
      octahedronGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        args?: [number];
      };
      torusGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        args?: [number, number, number, number];
      };
      dodecahedronGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        args?: [number];
      };
    }
  }
}
