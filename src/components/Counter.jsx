import { useState } from 'react';

export default function Counter() {
  console.log('Rendering Counter component');

  const [count, setCount] = useState(0);

  return (
    <button onClick={ () => setCount(count + 1) }>
      { count }
    </button>
  );
}
