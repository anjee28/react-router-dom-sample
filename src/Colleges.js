import Cite from './res/cite.png';
import Case from './res/logo.png';

const Colleges = [
	{
		id: 1,
		title: 'CITE',
		desc: 'College of Information Technology and Engineering',
		logo: Cite,
		color: 'c1',
		departments: [
			{
				name: 'BSCE',
				title: 'Bachelor of Science in Civil Engineering',
				desc: 'The Bachelor of Science in Civil Engineering is intended to provide graduates with the skills and knowledge needed to design, build, and operate engineered systems such as roads, foundations, buildings, bridges, dams, airports, and water supply and wastewater treatment systems.',
				url: 'bs-civil-engineering',
			},
			{
				name: 'BSEE',
				title: 'Bachelor of Science in Electrical Engineering',
				desc: 'The Bachelor of Science in Electrical Engineering program concentrates on developing skills in electrical power generation, transmission and distribution, electrical wiring and equipment design, as well as lighting systems of residential, commercial and industrial establishments.',
				url: 'bs-electrical-engineering',
			},
			{
				name: 'BSIT',
				title: 'Bachelor of Science in Information Technology',
				desc: 'The Bachelor of Science in Information Technology is a degree program that equips students with the basic ability to conceptualize, design and implement software applications. It prepares students to be IT professionals who are able to perform installation, operation, development, maintenance, and administration of computer applications.',
				url: 'bs-information-technology',
			},
		],
	},
	{
		id: 2,
		title: 'CASE',
		desc: 'College of Arts, Sciences and Education',
		logo: Case,
		color: 'c2',
		departments: [
			{
				name: 'BEEDGENED',
				title: 'Bachelor of Elementary Education Major in General Education',
				desc: 'The Bachelor of Elementary Education with a major in General Education is a program that prepares students to teach in elementary schools. It provides a well-balanced understanding of learning theories and concepts on both qualitative and quantitative levels.',
				url: 'beed-general-education',
			},
			{
				name: 'BSEDMATH',
				title: 'Bachelor of Secondary Education Major in Mathematics',
				desc: 'The Bachelor of Secondary Education with a major in Mathematics is a program that prepares  prepares Teacher  Education students in teaching the different branches of Mathematics such as Algebra, Geometry, Trigonometry, Calculus and Statistics to Secondary school students.',
				url: 'bsed-mathematics',
			},
			{
				name: 'BSACC',
				title: 'Bachelor of Science in Information Technology',
				desc: 'The Bachelor of Science in Information Technology is a degree program that equips students with the basic ability to conceptualize, design and implement software applications. It prepares students to be IT professionals who are able to perform installation, operation, development, maintenance, and administration of computer applications.',
				url: 'bs-information-technology',
			},
		],
	},
	{
		id: 3,
		title: 'SHS',
		desc: 'Senior High School Department',
		logo: Case,
		color: 'c3',
		departments: [
			{
				name: 'BSCE',
				title: 'Bachelor of Science in Civil Engineering',
				desc: 'The Bachelor of Science in Civil Engineering is intended to provide graduates with the skills and knowledge needed to design, build, and operate engineered systems such as roads, foundations, buildings, bridges, dams, airports, and water supply and wastewater treatment systems.',
				url: '',
			},
			{
				name: 'BSEE',
				title: 'Bachelor of Science in Electrical Engineering',
				desc: 'The Bachelor of Science in Electrical Engineering program concentrates on developing skills in electrical power generation, transmission and distribution, electrical wiring and equipment design, as well as lighting systems of residential, commercial and industrial establishments.',
				url: 'bs-electrical-engineering',
			},
			{
				name: 'BSIT',
				title: 'Bachelor of Science in Information Technology',
				desc: 'The Bachelor of Science in Information Technology is a degree program that equips students with the basic ability to conceptualize, design and implement software applications. It prepares students to be IT professionals who are able to perform installation, operation, development, maintenance, and administration of computer applications.',
				url: 'bs-information-technology',
			},
		],
	},
];

export default Colleges;
