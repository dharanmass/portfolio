import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen bg-primary text-text selection:bg-accent selection:text-primary">
            <Navbar />
            <main className="pt-20">
                {children}
            </main>
            <footer className="py-8 text-center text-text-muted text-sm glass mt-20">
                <p>© {new Date().getFullYear()} Dharanidharan. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
