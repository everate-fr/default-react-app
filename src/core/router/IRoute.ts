export default interface IRoute {
	url: string;
	element: React.JSX.Element;
	name?: string;
	description?: string;
	private?: boolean;
}
