import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { Interface } from './components/Interface'
import { Suspense } from 'react'

function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{
          position: [3, 3, 3],
          fov: 45,
          near: 0.1,
          far: 200
        }}
      >
        <color attach="background" args={['#111']} />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <Interface />
    </>
  )
}

export default App
