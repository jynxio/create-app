import style from './App.module.css';
import { createSignal } from 'solid-js';

function App() {
	const [getCount, setCount] = createSignal(0);

	return (
		<button class={style.button} onClick={() => setCount(prev => prev + 1)}>
			{getCount()}
		</button>
	);
}

export default App;
