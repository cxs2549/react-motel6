import styled from 'styled-components'
import Features from './Features/Features'
const StyledTravel = styled.div`
	background-color: #fff;
	@media (min-width: 768px) {
		/* height: 60vh; */
	}
	#travel-header {
		background-color: #262626;
		color: white;
	}
	span {
		font-size: 80%;
		color: rgb(117, 117, 117);
	}
	h3,
	svg {
		color: #333333;
	}
`
const Travel = () => {
	return (
		<StyledTravel className="md:py-3 relative ">
			<div id="bigWrap" className="grid md:grid-cols-2 mx-auto max-w-6xl gap-4">
                <div id="wrapper" className="  xl:shadow md:rounded bg-white md:order-2">
                    <div id="travel-header" className="py-2 xl:rounded-t px-8 capitalize flex">
                        travel information:{' '}
                        <a href="/" className="underline ml-2">
                            COVID-19 Update
                        </a>
                    </div>
                    <div className="p-4 flex flex-col gap-2 capitalize">
                        <div className="flex flex-col border-b-2 py-2">
                            <span>destination</span>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Anywhere"
                                    className="focus:outline-none pt-2"
                                />
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                                    <i className="fa fa-location-arrow" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border-b-2 py-2">
                            <span>dates (1 Night)</span>
                            <div className="cursor-pointer flex items-center justify-between pt-2">
                                <h3>Mon, Sep 6 - Tue, Sep 7</h3>
                                <i className="fa fa-calendar" aria-hidden="true" />
                            </div>
                        </div>
                        <div className="flex flex-col border-b-2 py-2">
                            <span>guests</span>
                            <div className="cursor-pointer flex items-center justify-between pt-2">
                                <h3>1 Adult • 0 Children</h3>
                                <i className="fa fa-chevron-down" aria-hidden="true" />
                            </div>
                        </div>
                        <div className="flex flex-col border-b-2 py-2">
                            <span>special rates</span>
                            <div className="cursor-pointer flex items-center justify-between pt-2">
                                <h3>Best Available Rate</h3>
                                <i className="fa fa-chevron-down" aria-hidden="true" />
                            </div>
                        </div>
                        <button className="bg-green-600 text-white font-bold capitalize mt-4 py-2 rounded hover:opacity-90">
                            continue
                        </button>
                    </div>
                </div>
                <Features />
            </div>
		</StyledTravel>
	)
}
export default Travel
