import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import GolfBall from "./components/GolfBall";

const App = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 1],
        near: 0.01,
        far: 1000
      }}
    ></Canvas>
  );
};

export default App;
