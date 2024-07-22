import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "./header.jsx"; // Renamed to Header to use as a component
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			<Header /> {/* Use Header component here */}
			<div className={styles.container}>
				<main className={styles.main}>
					<h1 className={styles.title}>
						Welcome to <a href="https://nextjs.org">Next.js!</a>
						<span className={styles.title}></span>
					</h1>
				</main>
			</div>
		</div>
	);
}
