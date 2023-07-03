import React from 'react';
import ModuleRouter from '../../core/router/ModuleRouter';

function TestRouter(): React.JSX.Element {
	return (
		<ModuleRouter
			prefix="test"
			moduleRoutes={[
				{
					url: '',
					element: <span>Test index</span>,
				},
				{
					url: 'hello',
					element: <span>Test hello</span>,
				},
			]}
		/>
	);
}

export default TestRouter;
