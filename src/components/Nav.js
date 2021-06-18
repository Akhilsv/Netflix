import React, { useContext } from 'react';
import styled from 'styled-components';
import { RiMovie2Fill } from 'react-icons/ri';
import { BsSearch, BsFillTvFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { FetchContext } from '../FetchContext';
const Nav = () => {
	const { types } = useContext(FetchContext);
	const [type, setType] = types;

	return (
		<>
			<NavBar>
				<AppLogo>N</AppLogo>
				<MenuHolder>
					<li>
						<NavLinks to='/movie' activeClassName='active' name='Movies'>
							<RiMovie2Fill
								onClick={() => {
									setType('movie');
								}}
							/>
						</NavLinks>
					</li>
					<li>
						<NavLinks to='/tv' activeClassName='active' name='Tv-shows'>
							<BsFillTvFill
								onClick={() => {
									setType('tv');
								}}
							/>
						</NavLinks>
					</li>
					<li>
						<NavLinks to='/search' activeClassName='active' name='Search'>
							<BsSearch />
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
	width: 250px;
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
	color: #919191e6;
	position: relative;
	cursor: pointer;
	transition: color 0.5s ease;
	&::after {
		font-family: 'Raleway', sans-serif;
		width: max-content;
		font-weight: 500px;
		letter-spacing: 1px;
		content: '${(prop) => prop.name}';
		position: absolute;
		font-size: 0.6rem;
		bottom: -11px;
		left: 50%;

		transform: translate(-50%, -50%);
	}
	&.active {
		color: #ffffff;
	}
	&:hover {
		color: #f8f8f8e3;
	}
`;

export default Nav;
