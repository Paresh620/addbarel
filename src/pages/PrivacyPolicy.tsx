import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>Privacy Policy | Addword Agency</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-400">
          <p>Last updated: April 02, 2026</p>
          <p>At Addword, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
          <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you fill out a contact form, including your name, email address, phone number, and project details.</p>
          <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide our services, and send you updates about our agency.</p>
          <h2 className="text-2xl font-bold text-white">3. Data Security</h2>
          <p>We implement industry-standard security measures to protect your data from unauthorized access or disclosure.</p>
        </div>
      </div>
    </div>
  );
}
