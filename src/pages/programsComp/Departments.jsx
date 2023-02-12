import React, { useState, useEffect } from 'react';

function Departments(props) {
	const data = props.data;

	const renderLink = () => {
		if (data.url != '') {
			return <a href={`../#/${data.url}`}>FIND OUT MORE</a>;
		}
	};

	return (
		<div>
			<h3>{data.title}</h3>
			<div className="deptDesc">{data.desc}</div>
			<div className="deptLink">{renderLink()}</div>
		</div>
	);
}

export default Departments;
