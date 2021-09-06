import { useRef, useState } from 'react'
import styled from 'styled-components'
import Wrapper from '../utilities/Wrapper/Wrapper'
import Burger from './Burger/Burger'
import Icons from './Icons/Icons'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import useOnClickOutside from 'use-onclickoutside'

const StyledHeader = styled.header`
	color: white;
	padding: .25rem 0;
	border-bottom: 1px solid lightgray;
`
const Header = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const menuRef = useRef()
	useOnClickOutside(menuRef, () => setIsOpen(false))
	return (
		<StyledHeader>
			<Wrapper className="bg-brandBlue">
				<Logo />
				<div className="flex items-center">
					<Icons />
					<div ref={menuRef}>
						<Burger click={() => setIsOpen(!isOpen)} />
						<Menu open={isOpen} />
					</div>
				</div>
			</Wrapper>
		</StyledHeader>
	)
}
export default Header
