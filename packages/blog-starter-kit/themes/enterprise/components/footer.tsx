import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-20 dark:border-neutral-800">
			<Container className="px-5 flex flex-col items-center">
				{PUBLICATION_LOGO ? (
					<Link
						href="/"
						aria-label={`${publication.title} home page`}
						className="flex items-center justify-center mb-10"
					>
						<img className="w-40" src={PUBLICATION_LOGO} alt={publication.title} />
					</Link>
				) : (
					<p className="mb-10 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>
				)}

				<SocialLinks />

				<p className="text-center text-slate-600 dark:text-neutral-300 mb-4">&copy; On The Code.</p>

				{/* <p className="text-center text-slate-600 dark:text-neutral-300 space-x-2">
					<Link href="#" className="hover:underline">
						Privacy Policy
					</Link>
					·
					<Link href="#" className="hover:underline">
						Terms
					</Link>
					·
					<Link href="#" className="hover:underline">
						Contact Me
					</Link>
				</p> */}
			</Container>
		</footer>
	);
};
