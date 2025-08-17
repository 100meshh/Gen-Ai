import React from 'react';


const Card = ({ title, description, link, image }) => {
  // Handler to open the link in a new tab
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div
      className="max-w-sm w-full rounded-2xl p-6 transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0c3fc 100%)',
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(255,255,255,0.7)',
        zIndex: 0,
        borderRadius: '1rem',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
  <h2 className="text-3xl font-bold text-purple-700">{title}</h2>
  <p className="text-gray-700 mt-2">{description}</p>
      <div className="mt-4">
        {image && (
          <img
            src={image}
            alt="AI Sample"
            className="rounded-xl shadow-md w-full h-40 object-cover"
            style={{ maxHeight: '160px', minHeight: '160px', border: '3px solid #e0c3fc' }}
          />
        )}
      </div>
      <button
        onClick={handleClick}
        className="mt-6 w-full rounded-xl py-2 px-4 font-semibold transition-colors duration-300 bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:from-purple-500 hover:to-pink-500 shadow"
        style={{
          cursor: link ? 'pointer' : 'default',
        }}
      >
        Open App
      </button>
      </div>
    </div>
  );
};

export default Card;
