import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();

  const handleNavigateToManager = () => {
    history.push('/manager'); 
  };

  return (
    <div>
      <h2>Página Principal</h2>
      <button onClick={handleNavigateToManager}>Ir a la Vista de Manager</button>
    </div>
  );
}

export default HomePage;