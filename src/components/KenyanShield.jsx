export const KenyanShield = (props) => {
    return (
        <group {...props}>
            {/* Shield Shape */}
            <mesh scale={[1, 1.5, 0.1]}>
                <capsuleGeometry args={[0.5, 1, 4, 8]} />
                <meshStandardMaterial color="#8B0000" />
            </mesh>
            {/* Patterns (Placeholder) */}
            <mesh position={[0, 0, 0.06]} scale={[0.1, 1.2, 0.01]}>
                <boxGeometry />
                <meshStandardMaterial color="#FFFFFF" />
            </mesh>
            <mesh position={[0.2, 0, 0.06]} scale={[0.1, 1, 0.01]}>
                <boxGeometry />
                <meshStandardMaterial color="#000000" />
            </mesh>
            <mesh position={[-0.2, 0, 0.06]} scale={[0.1, 1, 0.01]}>
                <boxGeometry />
                <meshStandardMaterial color="#000000" />
            </mesh>
        </group>
    )
}
