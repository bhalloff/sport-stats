import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';

function App() {
	return (
		<Home />
	);
}

try {
	ReactDOM.render(<Home />, global.document.getElementById('root'));
} catch (e) {
	console.error('Cannot render component to document:', e);
}

export default App;
