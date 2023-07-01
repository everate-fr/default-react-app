import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import type IRoute from '../../core/router/IRoute';

const TEST_ROUTER_BASEURL = 'test';

const TEST_ROUTER_ROUTES: IRoute[] = [
	{
		url: 'hello',
		element: <span>hello test</span>,
	},
	{
		url: 'goodbye',
		element: <span>goodbye test</span>,
	},
];

/** TODO: Pass the basename to router props */

function TestRouter(): React.JSX.Element {
	return (
		<Routes>
			<Route path={TEST_ROUTER_BASEURL} element={<Outlet />}>
				{TEST_ROUTER_ROUTES.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.url}
							element={route.element}
						/>
					);
				})}
			</Route>
		</Routes>
	);
}

export default TestRouter;
