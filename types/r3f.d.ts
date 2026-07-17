/**
 * Augment JSX IntrinsicElements with @react-three/fiber's Three.js elements.
 * This is needed because tsconfig excludes node_modules but @react-three/fiber
 * declares these elements as global JSX augmentations in its types.
 */
import "three";
import { type ThreeElements } from "@react-three/fiber";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements extends ThreeElements {}
  }
}
