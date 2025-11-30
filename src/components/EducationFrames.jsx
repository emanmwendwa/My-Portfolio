export const EducationFrames = (props) => {
    return (
        <group {...props}>
            {/* Frame 1 */}
            <mesh position={[-1.2, 0, 0]}>
                <boxGeometry args={[1, 1.4, 0.05]} />
                <meshStandardMaterial color="#FFF" />
            </mesh>
            {/* Frame 2 */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1, 1.4, 0.05]} />
                <meshStandardMaterial color="#FFF" />
            </mesh>
            {/* Frame 3 */}
            <mesh position={[1.2, 0, 0]}>
                <boxGeometry args={[1, 1.4, 0.05]} />
                <meshStandardMaterial color="#FFF" />
            </mesh>
        </group>
    )
}
