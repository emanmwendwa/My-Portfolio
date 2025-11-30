import { useThree, useFrame } from '@react-three/fiber'
import { useStore } from '../store'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const CameraHandler = () => {
    const { camera, controls } = useThree()
    const currentSection = useStore((state) => state.currentSection)

    useEffect(() => {
        if (!controls) return

        // Default position
        let targetPosition = { x: 3, y: 3, z: 3 }
        let targetLookAt = { x: 0, y: 0, z: 0 }

        switch (currentSection) {
            case 'shield':
                targetPosition = { x: -2, y: 2.5, z: 2 }
                targetLookAt = { x: -4.8, y: 2.5, z: 0 }
                break
            case 'education':
                targetPosition = { x: 2, y: 2.5, z: 2 }
                targetLookAt = { x: 4.8, y: 2.5, z: 0 }
                break
            case 'desk':
                targetPosition = { x: 0, y: 1.5, z: 0 }
                targetLookAt = { x: 0, y: 0.8, z: -2 }
                break
            case 'projects':
                targetPosition = { x: 1.5, y: 1.5, z: 0 }
                targetLookAt = { x: 1.5, y: 0.8, z: -2 }
                break
            default:
                targetPosition = { x: 0, y: 3, z: 8 }
                targetLookAt = { x: 0, y: 1, z: 0 }
                break
        }

        // Animate Camera Position
        gsap.to(camera.position, {
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z,
            duration: 1.5,
            ease: "power2.inOut"
        })

        // Animate Controls Target (LookAt)
        gsap.to(controls.target, {
            x: targetLookAt.x,
            y: targetLookAt.y,
            z: targetLookAt.z,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: () => controls.update()
        })

    }, [currentSection, camera, controls])

    return null
}
