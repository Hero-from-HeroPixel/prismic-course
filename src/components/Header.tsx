import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import React from 'react';
import { prismicClient } from '@/app/lib/clients';
type Props = {};

export default async function Header({}: Props) {
	const { data: settings } = await prismicClient.getSingle('settings');
	return (
		<header>
			<Link href={'/'}>{settings.site_title}</Link>

			<nav>
				<ul>
					{settings.navigation.map(({ label, url }) => (
						<li key={label}>
							<PrismicNextLink field={url}>{label}</PrismicNextLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
