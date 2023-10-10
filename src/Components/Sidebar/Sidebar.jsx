// Sidebar.js
import "./Sidebar.css";
import React, { useState } from "react";

const Sidebar = () => {
	const [hamburger, setHamburger] = useState(true);

	const toggleHamburger = () => {
		setHamburger(!hamburger);
	};

	return (
		<div className={`sidebar ${hamburger ? "" : "sidebarToggled"}`}>
			{hamburger ? (
				<svg
					onClick={toggleHamburger}
					className="menuSidebar"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24">
					<title>Menu</title>
					<path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
				</svg>
			) : (
				<>
					<svg
						onClick={toggleHamburger}
						className="menuSidebar"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<title>Menu</title>
						<path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
					</svg>
					<svg
						className="downLoadSideBar"
						onClick={toggleHamburger}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<title>Download Resume</title>
						<path d="M13,5V11H14.17L12,13.17L9.83,11H11V5H13M15,3H9V9H5L12,16L19,9H15V3M19,18H5V20H19V18Z" />
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<title>Settings</title>
						<path d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z" />
					</svg>
				</>
			)}
		</div>
	);
};

export default Sidebar;
