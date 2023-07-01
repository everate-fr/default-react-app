import React from 'react';

interface PublicRouteProps {
	child: React.ReactNode;
}

function PublicRoute(props: PublicRouteProps): React.JSX.Element {
	return <>{props.child}</>;
}

export default PublicRoute;
