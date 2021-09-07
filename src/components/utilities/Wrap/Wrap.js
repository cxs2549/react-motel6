import styled from 'styled-components'
const StyledWrap = styled.div``
const Wrap = ({ children }) => {
	return (
		<StyledWrap className="relative px-4 md:px-5 xl:px-3 xl:mx-auto xl:max-w-6xl flex flex-col md:grid md:grid-cols-2 justify-between">
			{children}
		</StyledWrap>
	)
}
export default Wrap
