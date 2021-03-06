import styled from 'styled-components'
const StyledWrapper = styled.div``
const Wrapper = ({ children }) => {
	return (
		<StyledWrapper className="relative px-4 md:px-5 xl:px-0 xl:mx-auto xl:max-w-6xl flex items-center justify-between xl:rounded">
			{children}
		</StyledWrapper>
	)
}
export default Wrapper
