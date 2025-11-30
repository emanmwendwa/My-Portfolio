import { KenyanShield } from './KenyanShield'
import { EducationFrames } from './EducationFrames'
import { DeskSetup } from './DeskSetup'
import { ProjectIcons } from './ProjectIcons'

import { useStore } from '../store'

export const LoftRoom = () => {
    const setSection = useStore((state) => state.setSection)

    return (
        <group>
            {/* Floor */}
            <mesh rotation-x={-Math.PI / 2} position={[0, -0.1, 0]} receiveShadow>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#3d3d3d" roughness={0.4} metalness={0.5} />
            </mesh>

            {/* Back Wall */}
            <mesh position={[0, 2.5, 5]} receiveShadow>
                <boxGeometry args={[10, 5, 0.2]} />
                <meshStandardMaterial color="#888" />
            </mesh>

            {/* Left Wall */}
            <mesh position={[-5, 2.5, 0]} rotation-y={Math.PI / 2} receiveShadow>
                <boxGeometry args={[10, 5, 0.2]} />
                <meshStandardMaterial color="#888" />
            </mesh>

            {/* Right Wall */}
            <mesh position={[5, 2.5, 0]} rotation-y={Math.PI / 2} receiveShadow>
                <boxGeometry args={[10, 5, 0.2]} />
                <meshStandardMaterial color="#888" />
            </mesh>

            {/* Glass Wall (Front) */}
            <group position={[0, 2.5, -5]}>
                {/* Window Frame Top */}
                <mesh position={[0, 2.4, 0]}>
                    <boxGeometry args={[10, 0.2, 0.2]} />
                    <meshStandardMaterial color="#111" />
                </mesh>
                {/* Window Frame Bottom */}
                <mesh position={[0, -2.4, 0]}>
                    <boxGeometry args={[10, 0.2, 0.2]} />
                    <meshStandardMaterial color="#111" />
                </mesh>
                {/* Window Frame Sides */}
                <mesh position={[-4.9, 0, 0]}>
                    <boxGeometry args={[0.2, 5, 0.2]} />
                    <meshStandardMaterial color="#111" />
                </mesh>
                <mesh position={[4.9, 0, 0]}>
                    <boxGeometry args={[0.2, 5, 0.2]} />
                    <meshStandardMaterial color="#111" />
                </mesh>
                {/* Glass */}
                <mesh>
                    <planeGeometry args={[9.8, 4.8]} />
                    <meshPhysicalMaterial
                        color="#88ccff"
                        transmission={0.9}
                        opacity={0.5}
                        transparent
                        roughness={0}
                        metalness={0.1}
                    />
                </mesh>
            </group>

            {/* City Skyline Background */}
            <mesh position={[0, 2.5, -15]} rotation-y={0}>
                <planeGeometry args={[30, 15]} />
                <meshBasicMaterial color="#050510" />
            </mesh>
            {/* Simple City Silhouette (Procedural Placeholder) */}
            <group position={[0, 0, -14]}>
                {Array.from({ length: 20 }).map((_, i) => (
                    <mesh key={i} position={[(i - 10) * 1.5, 2 + Math.random() * 3, 0]}>
                        <boxGeometry args={[1, 4 + Math.random() * 6, 0.1]} />
                        <meshBasicMaterial color="#0a0a20" />
                    </mesh>
                ))}
            </group>

            {/* Interactive Objects */}
            <group onClick={(e) => { e.stopPropagation(); setSection('shield') }} onPointerOver={() => document.body.style.cursor = 'pointer'} onPointerOut={() => document.body.style.cursor = 'auto'}>
                <KenyanShield position={[-4.8, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} />
            </group>

            <group onClick={(e) => { e.stopPropagation(); setSection('education') }} onPointerOver={() => document.body.style.cursor = 'pointer'} onPointerOut={() => document.body.style.cursor = 'auto'}>
                <EducationFrames position={[4.8, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]} />
            </group>

            <group onClick={(e) => { e.stopPropagation(); setSection('desk') }} onPointerOver={() => document.body.style.cursor = 'pointer'} onPointerOut={() => document.body.style.cursor = 'auto'}>
                <DeskSetup position={[0, 0, -2]} rotation={[0, Math.PI, 0]} />
            </group>

            <group onClick={(e) => { e.stopPropagation(); setSection('projects') }} onPointerOver={() => document.body.style.cursor = 'pointer'} onPointerOut={() => document.body.style.cursor = 'auto'}>
                <ProjectIcons position={[1.5, 0.8, -2]} rotation={[0, -0.5, 0]} />
            </group>

        </group>
    )
}
