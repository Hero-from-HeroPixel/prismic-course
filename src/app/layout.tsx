import './globals.css';
import { Metadata, ResolvingMetadata } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import clsx from 'clsx';
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

	const { data } = await client.getSingle('settings');
	return {
		title: data.site_title || 'Prismic Course',
		description:
			data.meta_description || 'Introduction to Prismic and headless page builders',
		openGraph: {
			images: [data.og_image.url || ''],
		},
	};
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={clsx(nunito.variable, nunito_sans.variable)}>
				<header>Header</header>
				{children}
				<footer>Footer</footer>
			</body>
		</html>
	);
}
