import React from 'react';
import styled from 'styled-components';
import { RiMovie2Fill } from 'react-icons/ri';
import { BsSearch, BsFillTvFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
const Nav = () => {
	return (
		<>
			<NavBar>
				<AppLogo>N</AppLogo>
				<MenuHolder>
					<li>
						<NavLinks to='/1243' activeClassName='active' name='Search'>
							<BsSearch />
						</NavLinks>
					</li>
					<li>
						<NavLinks to='/movie' activeClassName='active'  name='Movies'>
							<RiMovie2Fill />
						</NavLinks>
					</li>
					<li>
						<NavLinks to='/tv' activeClassName='active' name='Movies'>
							<BsFillTvFill />
						</NavLinks>
					</li>
				</MenuHolder>
			</NavBar>
		</>
	);
};
const NavBar = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 50px 10px 30px;
	z-index: 1000;
	color: #e62e2d;
	background: #000000ca;

	font-family: 'Noto Sans HK', sans-serif;
	@media (max-width: 600px) {
		text-align: center;
		padding: 10px 50px 10px 10px;
		background: none;
	}
`;
const AppLogo = styled.h1`
	font-size: 2.5rem;
	@media (max-width: 600px) {
		font-size: 1.5rem;
		text-align: center;
		display: none;
	}
`;
const MenuHolder = styled.ul`
	width: 200px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& li {
		text-decoration: none;
		list-style: none;
	}
	

	@media (max-width: 600px) {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100vw;
		background: black;
		padding: 10px;
		justify-content: space-around;
	}
`;
const NavLinks = styled(NavLink)`
	font-size: 1.8rem;
	font-weight: 800;
	text-decoration: none;
	color: #6e6e6ee6;
	position: relative;
	cursor: pointer;
	&.active {
		color: #ffffff;
		&::after {
			content: '${(prop) => prop.name}';
			position: absolute;
			font-size: 0.6rem;
			bottom: -12px;
			left: 50%;
			color: #e62d2def;
			transform: translate(-50%, -50%);
		}
	}
`;

export default Nav;
