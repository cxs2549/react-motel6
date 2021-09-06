import styled from 'styled-components'
const StyledLogo = styled.div`
	max-width: 100px;
	h1 {
		color: var(--brandRed);
	}
`
const Logo = () => {
	return (
		<StyledLogo className="flex items-center transform translate-x-4">
			<span className="transform -rotate-90 -translate-x-4 inline-block text-sm">my</span>
			<h1 className="text-4xl font-bold transform mt-1 -translate-x-5 ">6</h1>
		</StyledLogo>
	)
}
export default Logo
