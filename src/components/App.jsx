import Counter from './Counter.jsx';

export default function App() {
  console.log('Rendering App component');

  return (
    <>
      <h1>A Simple Counter</h1>
      <p>
        The button below displays the number
        of times it has been clicked.
      </p>
      <Counter />
    </>
  );
}
