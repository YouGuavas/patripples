const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const time = {
	sleep,
};
export default time;
