import { OrbitControls } from '@react-three/drei'
import { LoftRoom } from './LoftRoom'
import { CameraHandler } from './CameraHandler'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'

export const Experience = () => {
    return (
        <>
            <OrbitControls
                makeDefault
                enablePan={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 4}
                maxAzimuthAngle={Math.PI / 4}
            />
            <CameraHandler />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} castShadow />

            <LoftRoom />

            <EffectComposer disableNormalPass>
                <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.4} />
                <Noise opacity={0.05} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
        </>
    )
}
