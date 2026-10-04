export const dynamic = "force-static";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for ProLine Roofing & Solar.",
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Terms &amp; Conditions</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: 4 October 2026</p>
        <div className="prose prose-sm text-gray-700 space-y-6">
          <p>
            These terms govern use of this website. They do not replace the project-specific quotation, scope, payment terms and warranty information supplied before work begins.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Website Information</h2>
          <p>
            Website descriptions, prices, travel times, savings examples and articles are general information only. They are not a survey, professional diagnosis, financial forecast or binding quotation. Dated articles may no longer reflect current prices, schemes or regulations.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Quotations</h2>
          <p>
            The validity period and assumptions for a quotation will be stated on that quotation. Prices remain subject to survey, access and the agreed scope. Any change to the work or price should be recorded in writing.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Workmanship Guarantee</h2>
          <p>
            Any workmanship guarantee and manufacturer warranty included with a project will be identified in the written quotation or handover documents. Website wording does not create an additional guarantee.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Payment Terms</h2>
          <p>
            Deposits, staged payments and the final balance are governed by the accepted quotation or contract. Do not make payment to account details that differ from verified written instructions without confirming them with us by phone.
          </p>
          <h2 className="text-lg font-bold text-gray-900">Consumer Rights</h2>
          <p>
            Nothing in these website terms excludes rights or remedies that cannot lawfully be excluded, including applicable consumer rights. Cancellation rights and complaint handling depend on the circumstances and the project contract; contact us promptly if you need to discuss either.
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
