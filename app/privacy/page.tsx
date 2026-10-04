export const dynamic = "force-static";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for ProLine Roofing & Solar.",
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: 4 October 2026</p>
        <div className="prose prose-sm text-gray-700 space-y-6">
          <p>
            ProLine Roofing &amp; Solar (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is the controller of personal information submitted through this website. This policy explains what we collect and how it is used.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Information We Collect</h2>
          <p>
            We collect information you provide directly, including your name, phone number or email address, project postcode, requested service and project details. Our hosting provider may also process standard security and access logs.
          </p>
          <h2 className="text-lg font-bold text-gray-900">How We Use Your Information</h2>
          <p>
            We use your information to respond to enquiries, assess coverage, prepare quotes, arrange work and keep appropriate business records. We rely on steps taken at your request before a contract, performance of a contract, legal obligations and our legitimate interests in operating and protecting the business. We do not sell personal information.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Service Providers</h2>
          <p>
            Information may be processed by providers that host this website, receive form submissions or support our customer records. They may process information only for the relevant service and subject to their contractual and legal obligations. We may also disclose information where required by law.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Data Retention</h2>
          <p>
            We retain information only for as long as reasonably necessary for the enquiry, any resulting work, warranties, disputes and applicable accounting or legal requirements. Retention therefore depends on the nature of your contact with us.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Security</h2>
          <p>
            We use reasonable technical and organisational safeguards, but no internet transmission or storage system can be guaranteed completely secure. Please do not put payment-card details or other unnecessary sensitive information in the enquiry form.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Your Rights</h2>
          <p>
            Depending on the circumstances, UK data-protection law may give you rights to access, correct, erase or restrict personal information, object to certain processing, and receive a portable copy. Contact us using the details below. You may also complain to the UK Information Commissioner&apos;s Office.
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
