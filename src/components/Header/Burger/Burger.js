import { useRef } from 'react'
import styled from 'styled-components'
import './burger.css'

const StyledBurger = styled.div`
	transform: translate(8px, -2px);
	@media (min-width: 768px) {
		transform: translate(16px, -2px);
	}
	#menu {
		top: 60px;
	}
`
const Burger = ({click}) => {
	const burgerRef = useRef()
	const handleClick = () => {
		click()
		burgerRef.current.classList.toggle('open')
	}
	return (
		<StyledBurger className=" mt-0.5 xl:hidden">
			<div id="nav-icon1" onClick={handleClick} ref={burgerRef}>
				<span />
				<span />
				<span />
			</div>
		</StyledBurger>
	)
}
export default Burger
