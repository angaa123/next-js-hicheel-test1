import Head from "next/head";
export default function Header() {
	return (
		<>
			<Head>
				<title>Brainwave.io</title>
			</Head>
			<div className="flex">
				<h1 className="font-bold text-3xl">Brainwave.io</h1>
				<ul>
					<li>Demos</li>
					<li>Pages</li>
				</ul>
			</div>
		</>
	);
}
