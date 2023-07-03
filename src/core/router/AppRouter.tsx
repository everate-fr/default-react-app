import React from 'react';
import { BrowserRouter } from 'react-router-dom';

interface AppRouterProps {
	routers: React.JSX.Element[];
}

function AppRouter(props: AppRouterProps): React.JSX.Element {
	return (
		<BrowserRouter>
			{props.routers.map((router, index) => {
				return React.cloneElement(router, { key: index });
			})}
		</BrowserRouter>
	);
}

export default AppRouter;
