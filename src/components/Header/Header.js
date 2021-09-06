import { useRef, useState } from 'react'
import styled from 'styled-components'
import Wrapper from '../utilities/Wrapper/Wrapper'
import Burger from './Burger/Burger'
import Icons from './Icons/Icons'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import useOnClickOutside from 'use-onclickoutside'
import Headroom from 'react-headroom'

const StyledHeader = styled.header`
	color: white;
	padding: .25rem 0;
	border-bottom: 1px solid lightgray;
	background-color: var(--brandBlue);
`
const Header = () => {
	const [ isOpen, setIsOpen ] = useState(false)

	const menuRef = useRef()

	useOnClickOutside(menuRef, () => setIsOpen(false))

	const links = [
		'find reservation',
		'features & deals',
		'sales',
		'new locations',
		'extended stay',
		'call to book'
	]
	return (
		<Headroom>
			<StyledHeader>
				<Wrapper>
					<Logo />
					<div className="hidden transform -translate-x-4 xl:flex capitalize justify-between w-full">
						{links.map((link, i) => (
							<a href="/" key={i}>
								{link}
							</a>
						))}
					</div>
					<div className="flex items-center">
						<Icons />
						<div ref={menuRef}>
							<Burger click={() => setIsOpen(!isOpen)} />
							<Menu open={isOpen} />
						</div>
					</div>
				</Wrapper>
			</StyledHeader>
		</Headroom>
	)
}
export default Header
