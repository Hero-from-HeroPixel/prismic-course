import React from 'react';
import { prismicClient } from '@/app/lib/clients';
import Link from 'next/link';
import { PrismicNextLink } from '@prismicio/next';
type Props = {};

export default async function Footer({}: Props) {
	const { data: settings } = await prismicClient.getSingle('settings');

	return (
		<footer>
			<Link href={'/'}>{settings.site_title}</Link>
			<p>
				©{new Date().getFullYear()} {settings.site_title}
			</p>

			<ul>
				{settings.navigation.map(({ label, url }) => (
					<li key={label}>
						<PrismicNextLink field={url}>{label}</PrismicNextLink>
					</li>
				))}
			</ul>
		</footer>
	);
}
