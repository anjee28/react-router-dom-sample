import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	BrowserRouter,
} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import logo from './res/logo.png';
import Colleges from './Colleges';

/** Pages **/
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Programs from './pages/Programs';
import DepartmentPage from './pages/DeparmentPage';

function App() {
	const [colleges, setColleges] = useState(Colleges);

	return (
		<React.Fragment>
			<HashRouter>
				<nav>
					<div className="logo">
						<a href="../">
							<img className="logoImg" src={logo} alt="" />
						</a>
					</div>
					<div className="navs">
						<div className="navLinks">
							<div
								className="navLink"
								onClick={(event) =>
									(window.location.href = './')
								}
							>
								<span>HOME</span>
							</div>
							<div
								className="navLink"
								onClick={(event) =>
									(window.location.href = './#/programs')
								}
							>
								<span>PROGRAMS</span>
							</div>
							<div
								className="navLink"
								onClick={(event) =>
									(window.location.href = './#/about')
								}
							>
								<span>ABOUT PEACI</span>
							</div>
						</div>
					</div>
				</nav>
				<div className="mainBody">
					<Routes>
						<Route path="/" element={<Home />} title="PEACI" />
						<Route
							path="/programs"
							element={<Programs colleges={colleges} />}
						/>
						<Route path="/about" element={<About />} />

						{colleges.map((data) => {
							return data.departments.map((val) => (
								<Route
									key={data.id}
									path={val.url}
									element={<DepartmentPage data={val} />}
								/>
							));
						})}

						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</div>
				<footer>
					<div className="footTop">
						<div className="left">
							Copyright © 2023 <br />
							Philippine Engineering and Agro-Industrial College,
							Inc. <br />
							All Rights Reserved.
						</div>
						<div className="mid">fb</div>
						<div className="right">
							Developed by Mellhabib M. Angni
						</div>
					</div>
					<div className="footBot">
						<a href="../#/programs">PROGRAMS</a>
						<a href="../#/about">ABOUT PEACI</a>
					</div>
				</footer>
			</HashRouter>
		</React.Fragment>
	);
}

export default App;
