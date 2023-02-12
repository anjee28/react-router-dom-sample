import React, { useState, useEffect } from 'react';

function About(props) {
	useEffect(() => {
		document.title = 'About PEACI';
	}, []);

	return (
		<div>
			<div>About</div>
		</div>
	);
}

export default About;
