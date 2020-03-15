/**
 *
 * NavigationBar
 *
 */

import React, { useState } from 'react';
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
import { useScrollPosition } from '../../utils/hooks';

function NavigationBar({ home = false }) {
	const CSS = {
		BrandLogo: 'brand-logo',
	};
	const [isOpen, setIsOpen] = useState(false);

	const [scrollHeight, setScrollHeight] = useState(491);

	const toggle = () => setIsOpen(!isOpen);

	// use custom hook to listen to scroll events and set viewport scroll position
	useScrollPosition(
		({ prevPos, currPos }) => {
			setScrollHeight(currPos.y);
		},
		[scrollHeight],
		null,
		true,
		300,
	);

	return (
		<NavBarWrapper>
			<Navbar
				color={!home ? 'light' : scrollHeight > 211 ? 'light' : 'dark'}
				light={!home ? true : scrollHeight > 211}
				dark={!home ? false : scrollHeight < 211}
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
	.bg-dark {
		background-color: transparent !important;
		box-shadow: none;
	}
	.brand-logo {
		font-weight: 700;
		span {
			color: #7848f4;
		}
	}
	.navbar-light {
		-webkit-box-shadow: 0 8px 6px -6px #999;
		-moz-box-shadow: 0 8px 6px -6px #999;
		box-shadow: 0 8px 6px -6px #999;
	}
`;
