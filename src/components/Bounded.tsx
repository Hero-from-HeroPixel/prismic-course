import clsx from 'clsx';
import React from 'react';

type Props = {
	children: React.ReactNode;
	as?: React.ElementType;
	className?: string;
};

export default function Bounded({
	as: Comp = 'section',
	className,
	children,
	...restProps
}: Props) {
	return (
		<Comp {...restProps} className="px-4 py-10 md:py-14 md:px-6 lg:py-16">
			<div
				className={clsx(
					'mx-auto w-full max-w-6xl flex flex-col items-center',
					className,
				)}>
				{children}
			</div>
		</Comp>
	);
}
