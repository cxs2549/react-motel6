import styled from 'styled-components'
const StyledRegLink = styled.div``
const RegLink = ({title}) => {
	return (
		<StyledRegLink className="cursor-pointer  py-3 border-b  px-3">
			{title}
		</StyledRegLink>
	)
}
export default RegLink
