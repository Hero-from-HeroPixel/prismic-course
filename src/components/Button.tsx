import React from 'react';
import clsx from 'clsx';
import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next';
type Props = {
	className?: string;
};

export default function Button({ className, ...restProps }: PrismicNextLinkProps) {
	return (
		<PrismicNextLink
			{...restProps}
			className={clsx(
				'block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base',
				className,
			)}
		/>
	);
}
