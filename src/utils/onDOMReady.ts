export default (callback:Function) => {
	if (document.readyState !== 'loading') {
		callback();
	} else {
		document.addEventListener('DOMContentLoaded', () => {
			callback();
		});
	}
};
