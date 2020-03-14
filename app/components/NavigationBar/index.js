/**
 *
 * NavigationBar
 *
 */

import React, { useState, useEffect } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from 'reactstrap';
import styled from 'styled-components';

function NavigationBar() {
	const CSS = {
		BrandLogo: 'brand-logo',
	};
	const [isOpen, setIsOpen] = useState(false);

	const [scrollHeight, setScrollHeight] = useState(0);

	const toggle = () => setIsOpen(!isOpen);

	useEffect(() => {
		setScrollHeight(window.scrollY);
	}, [scrollHeight]);

	return (
		<NavBarWrapper>
			<Navbar
				color={scrollHeight > 490 ? 'light' : 'dark'}
				light={scrollHeight > 490}
				dark={scrollHeight < 490}
				expand="md"
				fixed="top"
			>
				<NavbarBrand href="/" className={CSS.BrandLogo}>
					<span>Fly</span>Events
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit"
						>
							Search
						</button>
					</form>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/components/">Events</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Create Event</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</NavBarWrapper>
	);
}

NavigationBar.propTypes = {};

export default NavigationBar;

const NavBarWrapper = styled.div`
	.brand-logo {
		font-weight: 700;
		span {
			color: #7848f4;
		}
	}
`;
