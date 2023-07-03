import React from 'react';
import ModuleRouter from '../../core/router/ModuleRouter';

function GlobalRouter(): React.JSX.Element {
	return (
		<ModuleRouter
			prefix="global"
			moduleRoutes={[
				{
					url: '',
					element: <span>Hello</span>,
				},
				{
					url: 'test',
					element: <span>Global Hello Test</span>,
				},
			]}
		/>
	);
}

export default GlobalRouter;
