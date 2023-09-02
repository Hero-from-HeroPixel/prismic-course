import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from '@prismicio/react';
import Bounded from '@/components/Bounded';
import Button from '@/components/Button';
import Heading from '@/components/Heading';

const components: JSXMapSerializer = {
	heading1: ({ children }) => (
		<Heading as="h1" size="xl" className="mb-4 md:mb-8 mt-12 first:mt-0 last:mb-0">
			{children}
		</Heading>
	),
	paragraph: ({ children }) => (
		<p className="font-body text-2xl leading-10 text-center font-normal text-slate-600 mb-4 md:mb-8 max-w-md">
			{children}
		</p>
	),
};
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
	return (
		<Bounded>
			<PrismicRichText field={slice.primary.heading} components={components} />
			<PrismicRichText field={slice.primary.body} components={components} />
			<Button className="mb-8 md:mb-10" field={slice.primary.button_link}>
				{slice.primary.button_text}
			</Button>
			<PrismicNextImage
				field={slice.primary.hero_image}
				className="drop-shadow-xl max-w-4xl w-full"
			/>
		</Bounded>
	);
};

export default Hero;
