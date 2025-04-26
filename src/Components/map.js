import React from 'react';
import './css/map.css';

const MapView = () => {
    return (
        <section className="venue-container" data-section-name="s-three" id="Venue">
            <h1>The Venue</h1>
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9776449181595!2d77.56436641476995!3d12.909158290896853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x71be53da4480fbbe!2sDayananda%20Sagara%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1659715330690!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </section>
    );
}

export default MapView;
