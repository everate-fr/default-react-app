import React from 'react';
import Router from './core/router/Router';
import GlobalRouter from './modules/Global/Global.router';
import TestRouter from './modules/Test/Test.router';

const APPLICATION_ROUTERS: React.JSX.Element[] = [
	<GlobalRouter key={'global'} />,
	<TestRouter key={'test'} />,
];

function App(): React.JSX.Element {
	return <Router routers={APPLICATION_ROUTERS} />;
}

export default App;
