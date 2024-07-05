import "@/reset.css";
import "@/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");

root &&
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
