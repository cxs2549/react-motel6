import styled from 'styled-components'
import { AiOutlineDown } from 'react-icons/ai'

const StyledAccordion = styled.div``
const Accordion = ({ title, links, open, click }) => {
	return (
		<StyledAccordion
			open={open}
            onClick={click}
			className=" cursor-pointer flex flex-col  py-3 border-b px-3 justify-center"
		>
			<div className="flex items-center justify-between">
				<span>{title}</span>
				<AiOutlineDown />
			</div>
			{open && (
				<div className="p-2 border mt-2 rounded flex flex-col gap-2">
					{links.map((link, i) => <div>{link}</div>)}
				</div>
			)}
		</StyledAccordion>
	)
}
export default Accordion
