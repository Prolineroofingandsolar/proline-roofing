import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for ProLine Roofing & Solar.",
};

export default function TermsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Terms &amp; Conditions</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: May 2025</p>
        <div className="prose prose-sm text-gray-700 space-y-6">
          <p>
            These terms and conditions govern your use of this website and the services provided by ProLine Roofing &amp; Solar.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Quotations</h2>
          <p>
            All quotations provided are valid for 30 days from the date of issue unless otherwise stated. Prices are subject to survey and may change following a site visit.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Workmanship Guarantee</h2>
          <p>
            We provide a workmanship guarantee on all completed works. The duration of the guarantee varies by project type and will be stated in your written quotation.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Payment Terms</h2>
          <p>
            Payment terms are agreed at the point of quotation. We do not require full payment in advance. A deposit may be required to secure materials and scheduling.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Liability</h2>
          <p>
            ProLine Roofing &amp; Solar holds full public liability insurance. Our liability is limited to the value of the contracted work.
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
