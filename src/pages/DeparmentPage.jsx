import React, { useState, useEffect } from 'react';

function DepartmentPage(props) {
	const data = props.data;
	return <div>{data.title}</div>;
}

export default DepartmentPage;
