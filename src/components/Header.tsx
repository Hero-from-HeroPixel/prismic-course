import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import React from 'react';
import { prismicClient } from '@/app/lib/clients';
import Logo from '@/components/Logo';
type Props = {};

export default async function Header({}: Props) {
	const { data: settings } = await prismicClient.getSingle('settings');
	return (
		<header className="py-4 md:py-6 lg:py-8 w-full font-body">
			<div className="w-10/12 mx-auto gap-2 flex-col md:flex-row flex items-center justify-between">
				<Link href={'/'}>
					{' '}
					<Logo />{' '}
				</Link>

				<nav>
					<ul className="flex">
						{settings.navigation.map(({ label, url }) => (
							<li key={label}>
								<PrismicNextLink className="p-3" field={url}>
									{label}
								</PrismicNextLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
