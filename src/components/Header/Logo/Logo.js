import styled from 'styled-components'
const StyledLogo = styled.div`
	max-width: 100px;
	h1 {
		color: var(--brandRed);
		text-shadow: -1px 2px 3px #ffffff;
	}
`
const Logo = () => {
	return (
		<StyledLogo className="flex items-center">
			<span className="transform -rotate-90 -translate-x-4 inline-block">motel</span>
			<h1 className="text-6xl font-bold transform mt-1 -translate-x-8 -translate-y-1">6</h1>
		</StyledLogo>
	)
}
export default Logo
