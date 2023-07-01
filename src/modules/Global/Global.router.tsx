import React from 'react';
import { Route, Routes } from 'react-router-dom';
import type IRoute from '../../core/router/IRoute';

const GLOBAL_ROUTER_ROUTES: IRoute[] = [
	{
		url: '/',
		element: <span>index</span>,
	},
	{
		url: 'hello',
		element: <span>hello</span>,
	},
	{
		url: 'goodbye',
		element: <span>goodbye</span>,
	},
];

function GlobalRouter(): React.JSX.Element {
	return (
		<Routes>
			{GLOBAL_ROUTER_ROUTES.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.url}
						element={route.element}
					/>
				);
			})}
		</Routes>
	);
}

export default GlobalRouter;
