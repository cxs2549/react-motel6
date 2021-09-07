import styled from 'styled-components'
import Hero from './Hero/Hero'
import Travel from './Travel/Travel'
const StyledHome = styled.div``
const Home = () => {
	return (
		<StyledHome>
			<Hero />
			<Travel />
		</StyledHome>
	)
}
export default Home
