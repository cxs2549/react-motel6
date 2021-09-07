import { useState } from 'react'
import styled from 'styled-components'
import Accordion from './Accordion/Accordion'
import RegLink from './RegLink/RegLink'

const StyledMenu = styled.div`
	top: 69px;
	right: ${(props) => (props.open ? '0' : '-100%')};
	width: 100%;
	height: calc(100vh - 66px);
	overflow-y: scroll;
	background-color: #fff;
	transition: right 500ms;
	max-width: 70%;
	z-index: 10;
    @media (min-width: 768px) {
        max-width: 40%;
    }
`
const Menu = ({ open }) => {
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
	const langLinks = [ 'english', 'spanish', 'korean' ]
	const featLinks = [ 'military discount', 'AARP benefits', 'senior rate' ]
	const salesLinks = [ 'corporate plus', 'group reservations' ]
	return (
		<StyledMenu open={open} className="absolute p-4 text-black shadow xl:hidden">
			<div className="flex flex-col justify-between capitalize">
				<RegLink title="find reservation" />
				<Accordion title="Language (EN)" links={langLinks} open={isOpen1} click={() => setIsOpen1(!isOpen1)} />
				<Accordion title="Features & Deals" links={salesLinks} open={isOpen2} click={() => setIsOpen2(!isOpen2)}  />
				<RegLink title="motels in canada" />
				<Accordion title="Sales" links={featLinks} open={isOpen3} click={() => setIsOpen3(!isOpen3)}  />
				<RegLink title="new locations" />
				<RegLink title="extended stay" />
				<RegLink title="Call to Book" />
			</div>
		</StyledMenu>
	)
}
export default Menu
