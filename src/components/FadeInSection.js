import React, { useState, useRef, useEffect } from 'react';

export default function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);

    const domRef = React.useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });

        observer.observe(domRef.current);

        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div ref={domRef} className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
            {props.children}
        </div>
    )
}