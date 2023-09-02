import React from 'react';
import { prismicClient } from '@/app/lib/clients';
import Link from 'next/link';
import { PrismicNextLink } from '@prismicio/next';
import Logo from '@/components/Logo';
type Props = {};

export default async function Footer({}: Props) {
	const { data: settings } = await prismicClient.getSingle('settings');

	return (
		<footer className="py-4 md:py-6 lg:py-8 w-full bg-white font-body">
			<div className="w-10/12 mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
				<Link href={'/'}>
					<Logo />
				</Link>
				<p className="text-xs">
					©{new Date().getFullYear()} {settings.site_title}
				</p>

				<ul className="flex gap-8">
					{settings.navigation.map(({ label, url }) => (
						<li key={label}>
							<PrismicNextLink field={url}>{label}</PrismicNextLink>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}
