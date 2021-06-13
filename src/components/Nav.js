import React from 'react';
import styled from 'styled-components';
import { RiMovie2Fill } from 'react-icons/ri';
import { BsSearch, BsFillTvFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
const Nav = () => {
	return (
		<>
			<NavBar>
				<AppLogo>NETFLIX</AppLogo>
				<MenuHolder>
					<li>
						<NavLinks to='/1243' activeClassName='active'>
							<BsSearch />
						</NavLinks>
					</li>
					<li>
						<NavLinks to='/home'>
							<RiMovie2Fill />
						</NavLinks>
					</li>
					<li>
						<NavLinks to='/tv'>
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
	font-family: 'Noto Sans HK', sans-serif;
	@media (max-width: 600px) {
		text-align: center;
		padding: 10px 50px 10px 10px;
	}
`;
const AppLogo = styled.h1`
	font-size: 2.5rem;
	@media (max-width: 600px) {
		font-size: 1.5rem;
		text-align: center;
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
	color: #ffffff;
	cursor: pointer;
	&.active {
		color: #8a8a8a;
	}
`;

export default Nav;
