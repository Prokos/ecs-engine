import Pool from 'core/Pool';

import WindowResizeComponent from 'components//WindowResizeComponent';

window.addEventListener('resize', () => {
	Pool.createComponent(WindowResizeComponent);
});