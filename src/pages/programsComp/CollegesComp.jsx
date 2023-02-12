import React, { useState, useEffect } from 'react';
import Departments from './Departments';

function CollegesComp(props) {
	const data = props.data;

	return (
		<div className={`college ${data.color}`}>
			<h2>{data.desc}</h2>
			<div className="separator small"></div>
			<div className="content">
				<div className="collegeLogo">
					<img src={data.logo} alt={data.desc} />
				</div>
				<div className="departments">
					{data.departments.map((val, key) => {
						return <Departments key={key} data={val} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default CollegesComp;
