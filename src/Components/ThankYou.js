import React from 'react';
import './css/thankyou.css';

const ThankYou = () => {
  return React.createElement(
    'div',
    { className: 'thank-you-section' },
    React.createElement(
      'div',
      { className: 'thank-you-content' },
      [
        React.createElement('h2', null, 'Thank You!'),

        React.createElement(
          'div',
          { className: 'thank-you-text' },
          [
            React.createElement('p', null, 'We extend our heartfelt gratitude to all the incredible participants of Aventus 3.0!'),

            React.createElement('p', null, 'With over 600+ submissions, the response was nothing short of phenomenal. Your enthusiasm, creativity, and competitive spirit made this hackathon a truly inspiring event. Each submission reflected the passion and dedication that drives innovation forward.'),

            React.createElement('p', null, 'Out of this overwhelming participation, the top 62 teams were selected for the final round — a testament to the high caliber of talent we witnessed.'),

            React.createElement('p', null, 'Thank you for being a part of this journey and pushing the boundaries of what\'s possible. We hope this experience sparked new ideas, collaborations, and opportunities.'),

            React.createElement('p', null, 'Keep building. Keep innovating. See you in the next edition!'),

            React.createElement('p', { className: 'thank-you-team' }, '— Team Aventus 3.0')
          ]
        ),

        // Floating particles
        React.createElement('div', { className: 'particle particle-1' }),
        React.createElement('div', { className: 'particle particle-2' }),
        React.createElement('div', { className: 'particle particle-3' }),
        React.createElement('div', { className: 'particle particle-4' }),
        React.createElement('div', { className: 'particle particle-5' }),
        React.createElement('div', { className: 'particle particle-6' })
      ]
    )
  );
};

export default ThankYou;
