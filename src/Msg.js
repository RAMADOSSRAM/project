import { Counter } from './Counter';

export function Msg({ name, pic }) {
  return (
    <div>
      <img className='cold' src={pic}
        alt={name} />
      <h1>Welcome,{name}</h1>
      <Counter />

    </div>
  );
}
