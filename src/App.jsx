/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import "./App.css";
import "./Components/Resume/Resume.css";

import React, { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";

const App = () => {
	//name change
	const [name, setName] = useState({
		firstName: "Varad",
		middleName: "Vidyanand",
		lastName: "Tote",
	});
	const { firstName, middleName, lastName } = name;

	const handleNameChange = (field, value) => {
		setName((prevName) => ({ ...prevName, [field]: value }));
	};

	// contact change
	const [contactDetails, setcontactDetails] = useState({
		contactNumber: 7720881651,
		mail: "varadtote1111@gmail.com",
		github: "github.com/varadtote",
		location: "Pune",
	});
	const { contactNumber, mail, github, location } = contactDetails;

	const handleContactChange = (field, value) => {
		setcontactDetails((prevName) => ({ ...prevName, [field]: value }));
	};

	return (
		<div>
			<div className="container">
				{/* Sidebar  */}
				<Sidebar />

				{/* Input Form  */}
				<div className="resumeInput">
					<div className="accordian">
						<form>
							<input
								type="text"
								placeholder="name"
								onChange={(e) =>
									handleNameChange(
										"firstName",
										e.target.value,
									)
								}
							/>
							<input
								type="text"
								placeholder="Contact"
								onChange={(e) =>
									handleContactChange(
										"contactNumber",
										e.target.value,
									)
								}
							/>
						</form>
					</div>
				</div>

				{/* Resume Print  */}
				<div className="resume">
					<div className="resumePrint" id="printResume">
						{/* Name  */}
						<div className="name">
							<h1 className="fullName resume-heading">{`${firstName} ${middleName} ${lastName}`}</h1>
							<h3 className="presentDesignation gray">
								Lead Business Analyst
							</h3>
							<ul className="contactDetails">
								<li>{`${contactNumber}`}</li> |
								<li>
									<a href="mailto:${mail}">{`${mail}`}</a>
								</li>{" "}
								|
								<li>
									<a href="https://${github}">{`${github}`}</a>
								</li>{" "}
								|<li>{`${location}`}</li>
							</ul>
						</div>
						{/* Summary  */}
						<div className="summary ">
							<h3 className="resume-heading textCenter thickLine">
								Summary
							</h3>
							<p className="summaryText contentPadding">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Accusantium perspiciatis
								maiores doloremque sequi accusamus perferendis,
								esse nemo incidunt officia culpa quisquam ullam,
								consectetur quaerat, itaque nihil modi aperiam
								deleniti beatae dolores reprehenderit commodi
								laudantium? Dolor nobis porro sequi incidunt.
								Expedita.
							</p>
						</div>
						{/* Skills  */}
						<div className="skills">
							<h3 className="resume-heading textCenter thickLine">
								Skills
							</h3>

							<div className="skillDomain flex contentPadding">
								<p className="h5 gray flex">Business</p>
								<ul className="flex skillNames">
									<li className="skill ">Budgeting</li>
									<li className="skill ">
										Financial Analysis
									</li>
									<li className="skill ">
										Project Management
									</li>
									<li className="skill ">
										Stakeholder Management
									</li>
									<li className="skill ">
										Business Strategy
									</li>
								</ul>
							</div>
							<div className="skillDomain flex contentPadding">
								<p className="h5 gray flex">Technology</p>
								<div className="skill">Excel</div>
								<div className="skill">VBA</div>
								<div className="skill">SQL</div>
								<div className="skill">QucikBooks</div>
								<div className="skill">Power BI</div>
								<div className="skill">Tableau</div>
								<div className="skill">Python</div>
							</div>
						</div>

						{/* Experience   */}
						<div className="experience">
							<h3 className="resume-heading textCenter thickLine">
								Experience
							</h3>
							<div className="experienceGrid contentPadding">
								<div className="experienceTitle">
									<h3 className="companyName gray">
										Network Solutions LLC
									</h3>
									<div className="locationDateInfo flex">
										<div className="flex">
											<p className="from">2019</p> -{" "}
											<p className="to">Ongoing</p>
										</div>
										<p className="location">Dallas, TX</p>
									</div>
								</div>
								<div className="designationInfo">
									<h5 className="designation">
										Lead Busines Analyst & Project Manager
									</h5>

									<ul className="experienceList">
										<li>
											<span>
												Created new strategies to manage
												$2 million of accounts at risk,
												resulting in an increase of 4%
												in revenue in 6 months.
											</span>
										</li>
										<li>
											<span>
												Led the effort to deploy an
												automated time & expense
												reporting system for more than
												90 onsite and offsite personnel
												across 3 locations.
											</span>
										</li>
										<li>
											<span>
												Oversaw the budget and schedule
												of a project to recruit, hire,
												and train 150 new employees at
												five new locations.
											</span>
										</li>
									</ul>
								</div>
								<div className="designationInfo">
									<div className="experienceTitle">
										<h5 className="designation">
											Senior Busines Analyst
										</h5>
										<div className="locationDateInfo flex">
											<p className="from">2017</p>-
											<p className="to">2019</p>
										</div>
									</div>
									<ul className="experienceList">
										<li>
											<span>
												{" "}
												Through an improved pricing
												model. increased gross revenue
												of 15% in 2018 compared to 2017
												with no change to fixed costs.
											</span>
										</li>
										<li>
											<span>
												{" "}
												Achieved project milestones and
												deliverables with an internal
												and external team of 10+
												analysts..
											</span>
										</li>
										<li>
											<span>
												{" "}
												Reduced warehouse processing
												time by 30% in just 3 months
												while industry norm is 10
												months.
											</span>
										</li>
									</ul>
								</div>
							</div>

							<div className="experienceGrid">
								<div className="experienceTitle">
									<h3 className="companyName gray">Lauzon</h3>
									<div className="locationDateInfo flex">
										<div className="flex">
											<p className="from">2013</p> -{" "}
											<p className="to">2016</p>
										</div>
										<p className="location">Dallas, TX</p>
									</div>
								</div>
								<div className="designationInfo">
									<h5 className="designation">
										Busines Analyst
									</h5>
									<p className="companyInfo">
										Lauzon is a 30-year-old limited company
										in the printing and packaging field with
										over 150 employees
									</p>

									<ul className="experienceList">
										<li>
											<span>
												{" "}
												Created new strategies to manage
												$2 million of accounts at risk,
												resulting in an increase of 4%
												in revenue in 6 months.
											</span>
										</li>
										<li>
											<span>
												{" "}
												Led the effort to deploy an
												automated time & expense
												reporting system for more than
												90 onsite and offsite personnel
												across 3 locations.
											</span>
										</li>
										<li>
											<span>
												{" "}
												Oversaw the budget and schedule
												of a project to recruit, hire,
												and train 150 new employees at
												five new locations.
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* Education  */}
						<div className="educationalDetails">
							<h3 className="resume-heading textCenter thickLine">
								Education
							</h3>

							<div className="educationGrid flex contentPadding">
								<div className="flex instutionalDetails">
									<h2 className="university gray">
										Pune University
									</h2>
									<h4 className="collegeName">
										Bachlor of Enginneering in Electronics
										and Telecommunication
									</h4>
									<p className="collegeSummary">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Ullam, placeat.
									</p>
								</div>
								<div className="flex locationDateInfo">
									<p className="from">2013</p>{" "}
									<p className="to">2016</p>
									<p className="location">Wisconsin</p>
								</div>
							</div>

							<div className="educationGrid flex contentPadding">
								<div className="flex instutionalDetails">
									<h2 className="university gray">
										University of Wisconsin{" "}
									</h2>
									<h4 className="collegeName">
										BBA Supply Chain Management
									</h4>
									<p className="collegeSummary">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Ullam, placeat.
									</p>
								</div>
								<div className="flex locationDateInfo">
									<p className="from">2008</p>-{" "}
									<p className="to">2012</p>,
									<p className="location">Wisconsin</p>
								</div>
							</div>
						</div>

						{/* Certifactes  */}
						<div className="certificates">
							<h3 className="resume-heading textCenter thickLine">
								Courses & Certificates
							</h3>
							<ul className="experienceList certificate contentPadding">
								<li>
									{" "}
									<p className="gray">
										PMI Propssional in Business Analysis
										(PBA) — PMI. 2019
									</p>
								</li>
								<li>
									{" "}
									<p className="gray">
										Certified Associate in Project
										Management (CAPM) — PHI, 2018
									</p>
								</li>
								<li>
									{" "}
									<p className="gray">
										High-Dimensional Data Analysis —
										Harvard, 2017
									</p>
								</li>
							</ul>
						</div>

						{/* Hobbies   */}
						<div className="hobbies">
							<h3 className="resume-heading textCenter thickLine">
								Intrests & Hobbies
							</h3>
							<div className="hobbies-grid">
								<div className="hobby">
									<h3 className="hobbyName">
										Giving back to community
									</h3>
									<p className="hobbyInfo">
										Spending time with my two kids, I spen
										at least one day each month
										volunteering.
									</p>
								</div>
								<div className="hobby">
									<h3 className="hobbyName">
										Horse-riding & spending time in nature
									</h3>
									<p className="hobbyInfo">
										Recharging during the weekend is vital
										for leading a high performing team.
									</p>
								</div>
								<div className="hobby">
									<h3 className="hobbyName">
										Developing my team into star analysts
									</h3>
									<p className="hobbyInfo">
										Not only is it very satisfying, but it
										is also the highest value-add of any
										leader.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
