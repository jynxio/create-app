import style from "./App.module.css";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<button
			className={style.button}
			onClick={() => setCount((prev) => prev + 1)}
			type="button"
		>
			{count}
		</button>
	);
}

export default App;
