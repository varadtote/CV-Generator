// Accordion.jsx
import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ children, Title }) {
	const [accordion, setAccordion] = useState(false);

	const toggleAccordion = () => {
		setAccordion(!accordion);
	};

	return (
		<div className="accordianGrid">
			{accordion ? (
				<div id="accordion">
					<div className="titleDiv" onClick={toggleAccordion}>
						<h3 className="title">{Title}</h3>
						{/* up svg  */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<title>chevron-up</title>
							<path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
						</svg>
					</div>
					<div className="accordionForm">{children}</div>
				</div>
			) : (
				<div id="accordion">
					<div className="titleDiv" onClick={toggleAccordion}>
						<h3 className="title">{Title}</h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<title>chevron-down</title>
							<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
						</svg>
					</div>
				</div>
			)}
		</div>
	);
}

export default Accordion;
