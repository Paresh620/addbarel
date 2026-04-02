import { Helmet } from 'react-helmet-async';

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>Terms of Service | Addword Agency</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-400">
          <p>Last updated: April 02, 2026</p>
          <p>By accessing or using our services, you agree to be bound by these terms.</p>
          <h2 className="text-2xl font-bold text-white">1. Services</h2>
          <p>Addword provides digital marketing, web development, and related services as described on our website.</p>
          <h2 className="text-2xl font-bold text-white">2. Intellectual Property</h2>
          <p>All content and materials provided as part of our services are the property of Addword or its licensors.</p>
          <h2 className="text-2xl font-bold text-white">3. Limitation of Liability</h2>
          <p>Addword shall not be liable for any indirect, incidental, or consequential damages arising out of our services.</p>
        </div>
      </div>
    </div>
  );
}
