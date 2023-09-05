import React from 'react';

const ProfessionalView = () => {
  const handleSubirCurriculum = () => {
    alert('Curriculum enviado');
  };

  return (
    <div>
      <h1>Vista de profesional</h1>
      <button onClick={handleSubirCurriculum}>Subir curriculum</button>
    </div>
  );
};

export default ProfessionalView;