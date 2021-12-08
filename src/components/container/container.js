import React from 'react';

export default function Container(props) {
	const param = props;
	return (
		<div className="container">
			{param.children}
		</div>
	);
}
