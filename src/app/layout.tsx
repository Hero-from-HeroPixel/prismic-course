import './globals.css';
import { Metadata } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import clsx from 'clsx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@/prismicio';

const nunito = Nunito({
	subsets: ['latin'],
	variable: '--font-nunito',
	preload: true,
	display: 'swap',
});
const nunito_sans = Nunito_Sans({
	subsets: ['latin'],
	variable: '--font-nunito_sans',
	preload: true,
	display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient();

	const { data: settings } = await client.getSingle('settings');
	return {
		title: settings.site_title || 'Prismic Course',
		description:
			settings.meta_description || 'Introduction to Prismic and headless page builders',
		openGraph: {
			images: [settings.og_image.url || ''],
		},
	};
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={clsx(nunito.variable, nunito_sans.variable)}>
				<Header />
				{children}
				<Footer />
				<div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50"></div>
			</body>
		</html>
	);
}
