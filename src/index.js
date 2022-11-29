import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './Welcome';

export default function Naija(){
	return (
		<Welcome/>
		);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Naija/>);	