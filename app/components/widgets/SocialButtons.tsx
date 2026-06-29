'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import FacebookIcon from '@/public/icons/social/facebook_icon.svg';
import TwitterIcon from '@/public/icons/social/twitter_icon.svg';
import GoogleIcon from '@/public/icons/social/google_icon.svg';
import GithubIcon from '@/public/icons/social/github_icon.svg';
import LinkedInIcon from '@/public/icons/social/linkedin_icon.svg';
import { useContext } from 'react';

import { UrlContext } from '@/app/data/context/UrlContext';
type propsType = {
	url: string;
};
const FbButton = (props: propsType) => {
	const url = useContext(UrlContext);

	return (
		<FacebookShareButton className={`center darken`} url={url}>
			<div className={`icon-container`}>
				<Image
					loading="lazy"
					fetchPriority="low"
					fill
					src={FacebookIcon.src}
					alt="Facebook"
					quality={50}
				/>
			</div>
		</FacebookShareButton>
	);
};
const TweetButton = (props: propsType) => {
	const url = useContext(UrlContext);

	return (
		<TwitterShareButton className={`center darken`} url={url}>
			<div className={`icon-container`}>
				<Image
					loading="lazy"
					fetchPriority="low"
					fill
					src={TwitterIcon.src}
					alt="Twitter - X"
					quality={50}
				/>
			</div>{' '}
		</TwitterShareButton>
	);
};
const ShareButtonsGroup = () => {
	const url = useContext(UrlContext);

	return (
		<div className={`flex column left-align gap-medium`}>
			<h3 className="thin spaced style-1">Share</h3>
			<TweetButton url={url} />
			<FbButton url={url} />
		</div>
	);
};

const ReviewButtonsGroup = () => {
	const url = useContext(UrlContext);

	return (
		<div className={`flex column left-align gap-medium`}>
			<h3 className="thin spaced style-1">Review:</h3>
			<Link
				href="https://g.page/r/CSdrmPBmoIvNEAE/review"
				className={`darken no-deco thin spaced style-1`}
			>
				<Image
					loading="lazy"
					fetchPriority="low"
					height={50}
					width={50}
					src={GoogleIcon.src}
					alt="Google Icon"
					className={`icon-container`}
					style={{ maxHeight: '50px' }}
					quality={50}
				/>
			</Link>
		</div>
	);
};
const FollowButtonsGroup = () => {
	const url = useContext(UrlContext);

	return (
		<div className={`flex column right-align gap-large`}>
			<h3 className="thin spaced style-1">Follow:</h3>
			<Link
				href="https://github.com/YouGuavas"
				className={`darken no-deco thin spaced style-1`}
			>
				<div className={`icon-container`}>
					<Image
						loading="lazy"
						fetchPriority="low"
						fill
						src={GithubIcon.src}
						alt="Github"
						quality={50}
					/>
				</div>{' '}
			</Link>

			<Link
				href="https://www.linkedin.com/in/patrick-yambrick-633099122/"
				className={`darken no-deco thin spaced style-1`}
			>
				<div className={`icon-container`}>
					<Image
						loading="lazy"
						fetchPriority="low"
						fill
						src={LinkedInIcon.src}
						alt="LinkedIn"
						quality={50}
					/>
				</div>{' '}
			</Link>
		</div>
	);
};

export { ShareButtonsGroup, ReviewButtonsGroup, FollowButtonsGroup };
