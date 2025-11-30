export const DeskSetup = (props) => {
    return (
        <group {...props}>
            {/* Desk Top */}
            <mesh position={[0, 0.75, 0]}>
                <boxGeometry args={[2, 0.1, 1]} />
                <meshStandardMaterial color="#5C4033" />
            </mesh>
            {/* Legs */}
            <mesh position={[-0.9, 0.375, 0.4]}>
                <boxGeometry args={[0.1, 0.75, 0.1]} />
                <meshStandardMaterial color="#111" />
            </mesh>
            <mesh position={[0.9, 0.375, 0.4]}>
                <boxGeometry args={[0.1, 0.75, 0.1]} />
                <meshStandardMaterial color="#111" />
            </mesh>
            <mesh position={[-0.9, 0.375, -0.4]}>
                <boxGeometry args={[0.1, 0.75, 0.1]} />
                <meshStandardMaterial color="#111" />
            </mesh>
            <mesh position={[0.9, 0.375, -0.4]}>
                <boxGeometry args={[0.1, 0.75, 0.1]} />
                <meshStandardMaterial color="#111" />
            </mesh>

            {/* Laptop */}
            <group position={[0, 0.8, 0]}>
                {/* Base */}
                <mesh position={[0, 0, 0.15]}>
                    <boxGeometry args={[0.6, 0.02, 0.4]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
                {/* Screen */}
                <mesh position={[0, 0.2, -0.05]} rotation-x={-0.2}>
                    <boxGeometry args={[0.6, 0.4, 0.02]} />
                    <meshStandardMaterial color="#111" />
                </mesh>
                {/* Display Glow */}
                <mesh position={[0, 0.2, -0.04]} rotation-x={-0.2}>
                    <planeGeometry args={[0.55, 0.35]} />
                    <meshBasicMaterial color="#334455" />
                </mesh>
            </group>
        </group>
    )
}
