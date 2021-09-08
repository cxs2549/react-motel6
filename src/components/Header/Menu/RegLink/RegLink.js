import styled from 'styled-components'
const StyledRegLink = styled.div``
const RegLink = ({title}) => {
	return (
		<StyledRegLink className="cursor-pointer  py-3 border-b">
			{title}
		</StyledRegLink>
	)
}
export default RegLink
