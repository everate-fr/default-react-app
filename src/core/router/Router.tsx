import React from 'react';
import { BrowserRouter } from 'react-router-dom';

interface RouterProps {
	routers: React.JSX.Element[];
}

function Router(props: RouterProps): React.JSX.Element {
	return (
		<BrowserRouter>
			{props.routers.map((router, index) => {
				return React.cloneElement(router, { key: index });
			})}
		</BrowserRouter>
	);
}

export default Router;
