import React from 'react';

export default function Title({ text, className }) {
	return (
		<div className={className}>
			<h2>{text}</h2>
		</div>
	);
}
