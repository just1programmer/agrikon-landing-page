import React from 'react'
import './TopBanner.scss'
import facebook from '../assets/facebook.png';
import twitter from '../assets/mdi_twitter.png';
import pinterest from '../assets/ph_pinterest-logo-bold.png';
import linkedin from '../assets/mdi_linkedin.png';
import mailIcon from '../assets/material-symbols_mail-rounded.png'
import timeIcon from '../assets/mdi_clock-time-five.png';


const TopBanner = () => {
  return (
		<div className="top-banner">
			<div className="left-contents">
				<a href="#">
					<img src={facebook} alt="facebook" />
				</a>
				<a href="#">
					<img src={twitter} alt="twitter" />
				</a>
				<a href="#">
					<img src={pinterest} alt="pinterest" />
				</a>
				<a href="#">
					<img src={linkedin} alt="linkedin" />
				</a>
				<span>Welcome to Agriculture Farm</span>
			</div>
			<div className="right-contents">
				<div className="email">
					<img src={mailIcon} alt="mail" />
					<span>
						<a href="mailto:agriculture.999@gmail.com">
							agriculture.999@gmail.com
						</a>
					</span>
				</div>
				<div className="schedule">
					<img src={timeIcon} alt="" />
					<span>Mon - Sat 8:00 - 6:30, Sunday - CLOSED</span>
				</div>
			</div>
		</div>
	);
}

export default TopBanner