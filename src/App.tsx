import React from 'react';
import AppRouter from './core/router/AppRouter';
import GlobalRouter from './modules/Global/Global.router';
import TestRouter from './modules/Test/Test.router';

const APPLICATION_ROUTERS: React.JSX.Element[] = [
	<GlobalRouter key={'global'} />,
	<TestRouter key={'test'} />,
];

function App(): React.JSX.Element {
	return <AppRouter routers={APPLICATION_ROUTERS} />;
}

export default App;
