import React, { useState, useEffect } from 'react';

function Home() {
	useEffect(() => {
		document.title =
			'Philippine Engineering and Agro-Industrial College, Inc.';
	}, []);
	return (
		<div>
			<h1>Home</h1>
		</div>
	);
}

export default Home;
