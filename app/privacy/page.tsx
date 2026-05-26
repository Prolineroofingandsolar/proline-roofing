import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for ProLine Roofing & Solar.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: May 2025</p>
        <div className="prose prose-sm text-gray-700 space-y-6">
          <p>
            ProLine Roofing &amp; Solar (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information. This policy explains how we collect, use, and store your data.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Information We Collect</h2>
          <p>
            We collect information you provide directly — such as your name, phone number, email address, and project details — when you use our contact or quote forms.
          </p>
          <h2 className="text-lg font-bold text-gray-900">How We Use Your Information</h2>
          <p>
            Your information is used solely to respond to your enquiry, provide quotes, and carry out any agreed work. We do not sell or share your data with third parties for marketing purposes.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Data Retention</h2>
          <p>
            We retain your data only for as long as necessary to complete the services you have requested, or as required by law.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Your Rights</h2>
          <p>
            Under UK GDPR, you have the right to access, correct, or request deletion of your personal data. Contact us at admin@prolineroofingandsolar.co.uk to exercise these rights.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Contact</h2>
          <p>
            ProLine Roofing &amp; Solar, 75 Hardys Road, Taunton, TA2 8FA.<br />
            Email: admin@prolineroofingandsolar.co.uk<br />
            Phone: 07587 478826
          </p>
        </div>
      </div>
    </section>
  );
}
