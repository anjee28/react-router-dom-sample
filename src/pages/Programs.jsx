import React, { useState, useEffect } from 'react';
import CollegesComp from './programsComp/CollegesComp';

function Programs(props) {
	const colleges = props.colleges;

	useEffect(() => {
		document.title = 'PEACI - Programs';
	}, []);
	return (
		<div className="programs">
			<h1>PROGRAMS</h1>
			<div className="separator small"></div>
			<div className="cover"></div>
			<div className="description">
				PEACI offers the quality education needed by the students to
				meet the competitive global standards. The university has 8
				programs which they could choose to suit their individual
				talents and passion.{' '}
			</div>
			{colleges.map((val, key) => {
				return <CollegesComp key={key} data={val} />;
			})}
		</div>
	);
}

export default Programs;
