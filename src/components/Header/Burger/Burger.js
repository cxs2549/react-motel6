import styled from 'styled-components'
import './burger.css'

const StyledBurger = styled.div`
	transform: translate(8px, -2px);
	cursor: pointer;
	@media (min-width: 768px) {
		transform: translate(16px, -2px);
	}
`
const Burger = ({click}) => {
	
	return (
		<StyledBurger onClick={click} className=" mt-0.5 xl:hidden">
			<div id="nav-icon1">
				<span />
				<span />
				<span />
			</div>
		</StyledBurger>
	)
}
export default Burger
