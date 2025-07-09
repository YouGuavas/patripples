'use client';
import Image from 'next/image';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import FacebookIcon from '../../public/icons/facebook_icon.svg';
import TwitterIcon from '../../public/icons/twitter_icon.svg';
import { useContext } from 'react';
import { UrlContext } from '../context/UrlContext';
type propsType = {
	url: string;
};
const FbButton = (props: propsType) => {
	const url = useContext(UrlContext);

	return (
		<FacebookShareButton className={`center darken`} url={url}>
			<div className={`icon-container`}>
				<Image fill src={FacebookIcon.src} alt="Facebook Icon" />
			</div>
		</FacebookShareButton>
	);
};
const TweetButton = (props: propsType) => {
	const url = useContext(UrlContext);

	return (
		<TwitterShareButton className={`center darken`} url={url}>
			<div className={`icon-container`}>
				<Image fill src={TwitterIcon.src} alt="Facebook Icon" />
			</div>{' '}
		</TwitterShareButton>
	);
};
const ShareButtonsGroup = () => {
	const url = useContext(UrlContext);

	return (
		<div className={`flex gap-medium width-full center`}>
			<h3 className="thin spaced style-1">Share</h3>
			<TweetButton url={url} />
			<FbButton url={url} />
		</div>
	);
};

export { ShareButtonsGroup };
