import styled from 'styled-components'
import Logo from './Logo/Logo'
const StyledIcons = styled.div`
	button {
		border-radius: 6px;
		font-size: 14px;
		line-height: 32px;
		padding: 0 16px;
        border: 2px solid white;
        height: 36px;
        display: flex;
        align-content: center;
        justify-content: center;
		white-space: nowrap;
        @media (min-width: 768px) {
            font-size: 16px;
        }
	}
`
const Icons = () => {
	return (
		<StyledIcons className="flex items-center">
			<Logo />
			<div className="flex items-center gap-2 md:gap-3">
				<button className="bg-white text-brandBlue" >Log In</button>
				<button >Sign Up</button>
			</div>
		</StyledIcons>
	)
}
export default Icons
