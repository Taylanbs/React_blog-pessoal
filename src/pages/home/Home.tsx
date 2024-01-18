import React, { useState, useEffect } from 'react';

function Home() {
  const [completed, setCompleted] = useState(false);
  const [exercicio, setExercicio] = useState('');

  useEffect(() => {
    if (completed) {
      setExercicio('Parabéns! Você concluiu o exercício!');
    }
  }, [completed]);

  return (
    <div>
      <h1>Exercício</h1>
      <h3>{exercicio}</h3>
      <p>Conclua a o exercício</p>
      <button onClick={() => setCompleted(true)}>Concluir Exercício</button>
    </div>
  );
}

export default Home;