import Image from 'next/image';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import FacebookIcon from '../../public/icons/facebook_icon.svg';
type propsType = {
	url: string;
};
const FbButton = (props: propsType) => {
	return (
		<FacebookShareButton
			className={`inline-flex items-center justify-center rounded-full `}
			url={props.url}
		>
			<div className={`icon-container`}>
				<Image fill src={FacebookIcon.src} alt="Facebook Icon" />
			</div>
		</FacebookShareButton>
	);
};
const TweetButton = (props: propsType) => {
	return (
		<TwitterShareButton
			className={`inline-flex items-center justify-center`}
			url={props.url}
		>
			<TwitterIcon className="h-6 w-6" round={true} />
		</TwitterShareButton>
	);
};
const ShareButtonsGroup = (props: propsType) => {
	return (
		<div className={`flex space-x-2`}>
			<h3 className="inline-flex items-center justify-center">Share</h3>
			<TweetButton url={props.url} />
			<FbButton url={props.url} />
		</div>
	);
};

export { ShareButtonsGroup };
