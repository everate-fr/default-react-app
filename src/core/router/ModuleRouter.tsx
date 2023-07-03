import React from 'react';
import { Route, Routes } from 'react-router-dom';
import type IRoute from './IRoute';

interface ModuleRouterProps {
	prefix: string;
	moduleRoutes: IRoute[];
}

function ModuleRouter(props: ModuleRouterProps): React.JSX.Element {
	return (
		<Routes>
			<Route path={props.prefix}>
				{props.moduleRoutes.map((route, index) => {
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

export default ModuleRouter;
