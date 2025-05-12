import { Helmet } from 'react-helmet';

function CookiesPolicy() {
  return (
    <div className="px-4 py-10 max-w-4xl mx-auto text-blueGray-800">
      <Helmet>
        <title>Cookies Policy | HotelHive</title>
      </Helmet>

      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center pt-10">
        Cookies Policy
      </h1>

      <p className="mb-4 text-sm md:text-base">
        This Cookies Policy explains how <strong>HotelHive</strong> uses cookies
        and similar technologies to enhance your experience when you visit our
        website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. What Are Cookies?</h2>
      <p className="text-sm md:text-base mb-4">
        Cookies are small text files stored on your device (computer, tablet, or
        mobile) when you visit a website. They help the website remember your
        preferences and enhance your browsing experience.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Cookies</h2>
      <ul className="list-disc pl-5 text-sm md:text-base mb-4">
        <li>Remember your login and language preferences</li>
        <li>Analyze website traffic and user behavior</li>
        <li>Provide personalized content and offers</li>
        <li>Enable essential website functions such as bookings and cart</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Types of Cookies We Use
      </h2>
      <ul className="list-disc pl-5 text-sm md:text-base mb-4">
        <li>
          <strong>Essential Cookies:</strong> Required for basic site
          functionality.
        </li>
        <li>
          <strong>Performance Cookies:</strong> Help us understand how visitors
          interact with our website.
        </li>
        <li>
          <strong>Functional Cookies:</strong> Remember user preferences to
          improve your experience.
        </li>
        <li>
          <strong>Advertising Cookies:</strong> Used to show relevant ads and
          track their effectiveness.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Managing Cookies</h2>
      <p className="text-sm md:text-base mb-4">
        You can choose to accept or reject cookies through your browser
        settings. Disabling some cookies may affect the functionality of the
        site.
        <br />
        Refer to your browser’s help section for guidance:
      </p>
      <ul className="list-disc pl-5 text-sm md:text-base mb-4">
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/en-us/HT201265"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/en-us/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Edge
          </a>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Changes to This Policy
      </h2>
      <p className="text-sm md:text-base mb-4">
        We may update this Cookies Policy from time to time. Updates will be
        posted on this page with the updated date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p className="text-sm md:text-base">
        For any questions about our cookie practices, please contact us at:{' '}
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

export default CookiesPolicy;
