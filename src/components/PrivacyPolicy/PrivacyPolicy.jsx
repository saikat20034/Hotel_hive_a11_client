import { Helmet } from 'react-helmet';

function PrivacyPolicy() {
  return (
    <div className="px-4 py-10 max-w-4xl mx-auto text-blueGray-800">
      <Helmet>
        <title>Privacy Policy | HotelHive</title>
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center pt-10">
        Privacy Policy
      </h1>

      <p className="mb-4 text-sm md:text-base">
        At <strong>HotelHive</strong>, we are committed to protecting your
        privacy. This Privacy Policy outlines how we collect, use, and safeguard
        your information when you visit or interact with our website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <ul className="list-disc pl-5 text-sm md:text-base">
        <li>Personal Information: name, email address, phone number, etc.</li>
        <li>Booking and transaction details</li>
        <li>Device and browser information</li>
        <li>Usage data through cookies and analytics tools</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc pl-5 text-sm md:text-base">
        <li>To process your room bookings and payments</li>
        <li>To improve website functionality and user experience</li>
        <li>To communicate updates, offers, or changes</li>
        <li>To ensure the safety and security of our platform</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Sharing Your Information
      </h2>
      <p className="text-sm md:text-base mb-4">
        We do not sell or rent your personal data. Your information may be
        shared with trusted third parties (such as payment processors or
        customer service providers) who help us operate our platform—only when
        necessary and under confidentiality agreements.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="text-sm md:text-base mb-4">
        HotelHive uses cookies to personalize your experience and analyze site
        usage. You can disable cookies through your browser settings, though
        this may affect site functionality.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <ul className="list-disc pl-5 text-sm md:text-base">
        <li>Access the data we store about you</li>
        <li>Request correction or deletion of your data</li>
        <li>Withdraw consent at any time</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Data Security</h2>
      <p className="text-sm md:text-base mb-4">
        We use industry-standard encryption, firewalls, and secure server
        environments to protect your data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. Updates to this Policy
      </h2>
      <p className="text-sm md:text-base mb-4">
        HotelHive reserves the right to update this Privacy Policy. Any changes
        will be posted on this page with a revised date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="text-sm md:text-base">
        If you have any questions or concerns about our privacy practices,
        please contact us at:
        <br />
        <a
          href="mailto:support@hotelhive.com"
          className="text-blue-600 underline"
        >
          support@hotelhive.com
        </a>
      </p>

      <p className="mt-10 text-xs text-gray-500 text-center">
        Last Updated: May 11, 2025
      </p>
    </div>
  );
}

export default PrivacyPolicy;
