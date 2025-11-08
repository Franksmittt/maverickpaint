// app/contact/page.tsx (Full File Content - Contact Page)
import { Metadata } from 'next';
import { ContactForm } from '../_components/contact-form';

export const metadata: Metadata = {
    title: 'Get a Quote | Maverick Painting',
    description: 'Schedule a free on-site assessment for commercial painting, waterproofing, or structural repairs in Gauteng.',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-[#121111] dark:text-white">Contact Our Technical Specialists</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Get an objective, no-obligation quote for your high-value asset maintenance project.
                </p>
            </header>
            <ContactForm />
        </div>
    );
}