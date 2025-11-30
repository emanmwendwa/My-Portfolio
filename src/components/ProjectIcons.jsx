export const ProjectIcons = (props) => {
    return (
        <group {...props}>
            {/* GitHub Cube */}
            <mesh position={[0, 0, 0]} rotation={[0.5, 0.5, 0]}>
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial color="#333" emissive="#333" emissiveIntensity={0.5} />
            </mesh>
            {/* Project Folder 1 */}
            <mesh position={[0.5, 0, 0]} rotation={[0, 0.2, 0]}>
                <boxGeometry args={[0.05, 0.4, 0.3]} />
                <meshStandardMaterial color="#FFD700" />
            </mesh>
            {/* Project Folder 2 */}
            <mesh position={[0.6, 0, 0]} rotation={[0, -0.1, 0]}>
                <boxGeometry args={[0.05, 0.4, 0.3]} />
                <meshStandardMaterial color="#FFD700" />
            </mesh>
        </group>
    )
}
