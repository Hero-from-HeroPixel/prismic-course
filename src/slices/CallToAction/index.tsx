import Bounded from '@/components/Bounded';
import Button from '@/components/Button';
import Heading from '@/components/Heading';
import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from '@prismicio/react';
const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading as="h2" size="sm" className="font-semibold mb-4 font-display">
			{children}
		</Heading>
	),
	paragraph: ({ children }) => <p className="text-slate-600 mb-8 font-body">{children}</p>,
};
/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
	return (
		<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<div className="max-w-4xl w-full m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-3xl bg-gradient-to-tr from-cyan-50 via-white to-emerald-50">
				<PrismicRichText field={slice.primary.heading} components={components} />
				<PrismicRichText field={slice.primary.bod} components={components} />
				<Button className="mt-8" field={slice.primary.button_link}>
					<>{slice.primary.button_text}</>
				</Button>
			</div>
		</Bounded>
	);
};

export default CallToAction;
