import { useStore } from '../store'
import { motion, AnimatePresence } from 'framer-motion'

const Section = (props) => {
    const { children, title, onClose } = props

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-auto bg-black/50 backdrop-blur-sm"
        >
            <div className="bg-white/10 p-8 rounded-2xl max-w-2xl w-full mx-4 border border-white/20 shadow-2xl text-white relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                >
                    ✕
                </button>
                <h2 className="text-3xl font-bold mb-6 font-serif">{title}</h2>
                <div className="space-y-4 text-lg text-white/80 leading-relaxed">
                    {children}
                </div>
            </div>
        </motion.div>
    )
}

export const Interface = () => {
    const currentSection = useStore((state) => state.currentSection)
    const setSection = useStore((state) => state.setSection)

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col justify-between p-8">
            {/* Header / Logo */}
            <div className="pointer-events-auto">
                <h1 className="text-white text-2xl font-bold tracking-widest">EMMANUEL</h1>
                <p className="text-white/50 text-sm tracking-widest">INTERACTIVE PORTFOLIO</p>
            </div>

            {/* Instructions */}
            {!currentSection && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm"
                >
                    Click on objects to explore
                </motion.div>
            )}

            <AnimatePresence>
                {currentSection === 'shield' && (
                    <Section title="Background & Heritage" onClose={() => setSection(null)}>
                        <p>
                            Born and raised in Kenya, I bring a unique perspective to technology.
                            My journey is rooted in a rich cultural heritage that values community, resilience, and innovation.
                        </p>
                        <p>
                            This shield represents protection and strength—values I carry into my work as I tackle complex problems.
                        </p>
                    </Section>
                )}

                {currentSection === 'education' && (
                    <Section title="Education" onClose={() => setSection(null)}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white/5 p-4 rounded-lg">
                                <h3 className="font-bold text-white">University</h3>
                                <p className="text-sm text-white/60">Computer Science & Data Science</p>
                                <p className="text-xs text-white/40 mt-2">Expected 2026</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg">
                                <h3 className="font-bold text-white">High School</h3>
                                <p className="text-sm text-white/60">Advanced Level Certificate</p>
                                <p className="text-xs text-white/40 mt-2">2018 - 2022</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg">
                                <h3 className="font-bold text-white">Certifications</h3>
                                <p className="text-sm text-white/60">Full Stack Development</p>
                                <p className="text-xs text-white/40 mt-2">2023</p>
                            </div>
                        </div>
                    </Section>
                )}

                {currentSection === 'desk' && (
                    <Section title="Resume" onClose={() => setSection(null)}>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-gray-700 rounded-full mb-4 overflow-hidden">
                                {/* Placeholder for photo */}
                                <div className="w-full h-full flex items-center justify-center text-2xl">👨🏾‍💻</div>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Emmanuel</h3>
                            <p className="text-white/60 mb-6">Computer Science & Data Science Student</p>

                            <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                                Download Full Resume (PDF)
                            </button>
                        </div>
                    </Section>
                )}

                {currentSection === 'projects' && (
                    <Section title="Projects" onClose={() => setSection(null)}>
                        <div className="space-y-4">
                            <a href="#" className="block bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors group">
                                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">Interactive 3D Portfolio</h3>
                                <p className="text-sm text-white/60">React Three Fiber, Tailwind, Zustand</p>
                            </a>
                            <a href="#" className="block bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors group">
                                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">Data Science Analysis</h3>
                                <p className="text-sm text-white/60">Python, Pandas, Scikit-Learn</p>
                            </a>
                            <a href="#" className="block bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors group">
                                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">Mobile App Prototype</h3>
                                <p className="text-sm text-white/60">React Native, Firebase</p>
                            </a>
                        </div>
                    </Section>
                )}
            </AnimatePresence>
        </div>
    )
}
