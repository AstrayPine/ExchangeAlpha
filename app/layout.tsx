import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next JS Traveling Platform',
	description: 'Example Traveling Platform',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
