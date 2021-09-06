import styled from 'styled-components'
import logo from '../../assets/logo-reverse.png'
import Wrap from '../utilities/Wrap/Wrap'
import { CgFacebook, CgInstagram, CgYoutube, CgTwitter } from 'react-icons/cg'
import { FaGooglePlay, FaApple } from 'react-icons/fa'
const StyledFooter = styled.footer`
	background-color: var(--brandBlue);
	color: white;
	svg {
		font-size: 2rem;
	}
`
const Footer = () => {
	const links = [
		'web accessibility',
		'careers',
		'franchising',
		'contact',
		'about us',
		'terms of use',
		'site map',
		'new locations',
		'extended stay',
		'vulnerability disclosure'
	]
	return (
		<StyledFooter className="pb-6">
			<Wrap>
				<img src={logo} className="w-20 md:w-24 xl:w-32 mb-6 xl:mb-12 transform -translate-x-5 xl:translate-x-0" alt="" />
				<h1 className="text-4xl xl:text-5xl font-semibold mb-8 ">
					Save more for <br /> what you travel for
				</h1>
				<div className="border-b py-3">
					<span>Download the App:</span>
					<div className="flex gap-12 py-4">
						<div className="flex items-center gap-2">
							<FaApple />
							<span>App Store</span>
						</div>
						<div className="flex items-center gap-2">
							<FaGooglePlay />
							<span>Play Store</span>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4 capitalize py-8 border-b">
					{links.map((link, i) => <div key={i}>{link}</div>)}
				</div>
				<div className="flex items-center justify-between py-8 md:max-w-md">
					<CgFacebook />
					<CgInstagram />
					<CgTwitter />
					<CgYoutube />
				</div>
				<p className="text-xs">
					&copy; 2021 Phobia Webworks for G6 Hospitality LLC. <br /> All rights reserved.
				</p>
			</Wrap>
		</StyledFooter>
	)
}
export default Footer
