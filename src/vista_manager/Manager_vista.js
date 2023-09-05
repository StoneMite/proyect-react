import React from 'react';

const ManagerView = () => {
  const handleSolicitudReemplazo = () => {
    alert('Solicitud de reemplazo enviada')
  };

  return (
    <div>
      <h1>Vista de Manager</h1>
      <button onClick={handleSolicitudReemplazo}>Solicitar Reemplazo</button>
    </div>
  );
};

export default ManagerView;