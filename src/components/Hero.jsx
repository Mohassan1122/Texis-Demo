import React, { useEffect, useState } from 'react';
import logoNew from '../assets/logo-new.png';
import logo from '../assets/logo.png'; // FAB Icon
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebookF, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    // Generate random stars on mount
    const [stars, setStars] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const starCount = 100;
        const newStars = [];
        for (let i = 0; i < starCount; i++) {
            newStars.push({
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                size: `${Math.random() * 3 + 1}px`,
                opacity: Math.random(),
                animationDelay: `${Math.random() * 5}s`
            });
        }
        setStars(newStars);

        // Mouse movement handler
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);

    }, []);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email && email.includes('@')) {
            setSubmitted(true);
            // Reset after 3 seconds if you want them to be able to submit again, or keep it true.
            // setTimeout(() => setSubmitted(false), 3000); 
        }
    };

    return (
        <div className="hero-section">
            <div
                className="stars-container"
                style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
            >
                {stars.map(star => (
                    <div
                        key={star.id}
                        className="star"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.size,
                            height: star.size,
                            animationDelay: star.animationDelay
                        }}
                    />
                ))}
            </div>

            <div
                className="hero-bg-glow"
                style={{ transform: `translate(-50%, -50%) translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
            ></div>

            <div className="container position-relative z-1">
                <div
                    className="hero-content"
                    style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
                >

                    {/* Main Brand Logo */}
                    <img src={logoNew} alt="Texis Limited" className="brand-logo-large" />

                    <p className="tagline">Excellence Powered by Innovation</p>

                    {/* Email Signup Form */}
                    <div className="email-signup-container mt-4 mb-5">
                        {!submitted ? (
                            <form onSubmit={handleSubscribe} className="input-group">
                                <input
                                    type="email"
                                    className="form-control custom-input"
                                    placeholder="Enter your email for updates"
                                    aria-label="Recipient's email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button className="btn btn-custom-submit" type="submit">
                                    <FaArrowRight />
                                </button>
                            </form>
                        ) : (
                            <div className="success-message">
                                <p className="mb-0 text-white" style={{ fontFamily: 'Orbitron', letterSpacing: '1px' }}>
                                    <span className="me-2" style={{ color: '#00ffff' }}>✓</span>
                                    You have been added to the waiting list!
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="coming-soon-pill">
                        <span className="pulsing-dot"></span>
                        Our new digital experience is launching soon.
                    </div>

                    {/* Social Links */}
                    <div className="social-links mt-4">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
                    </div>

                </div>
            </div>

            <div className="footer">
                <p className="mb-0">&copy; 2026 Texis Global Limited. All rights reserved.</p>
            </div>

            <div className="fab-icon">
                <img src={logo} alt="Help" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            </div>
        </div>
    );
};

export default Hero;
