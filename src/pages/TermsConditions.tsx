
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: December 2024
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Services Offered</h2>
                <p className="text-gray-600 mb-4">
                  We provide comprehensive freelance web development services including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Custom website design and development</li>
                  <li>PHP web development and programming</li>
                  <li>WordPress development and customization</li>
                  <li>Domain registration and management services</li>
                  <li>Web hosting solutions and support</li>
                  <li>Website maintenance and updates</li>
                  <li>SEO optimization and digital marketing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Project Terms</h2>
                <p className="text-gray-600 mb-4">
                  <strong>Project Scope:</strong> All projects begin with a detailed proposal outlining deliverables, 
                  timeline, and costs. Any changes to the original scope may result in additional charges.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Timeline:</strong> Project timelines are estimates based on the information provided. 
                  Delays caused by client feedback, content provision, or scope changes may affect delivery dates.
                </p>
                <p className="text-gray-600">
                  <strong>Revisions:</strong> Each project includes a specified number of revision rounds. 
                  Additional revisions beyond the agreed limit will incur extra charges.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Payment Terms</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>A 50% deposit is required before project commencement</li>
                  <li>Final payment is due upon project completion and before final delivery</li>
                  <li>Domain registration and hosting fees are billed annually</li>
                  <li>Late payments may incur a 1.5% monthly service charge</li>
                  <li>All prices are in USD unless otherwise specified</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Client Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide accurate project requirements and specifications</li>
                  <li>Supply necessary content, images, and materials in a timely manner</li>
                  <li>Provide constructive feedback within agreed timeframes</li>
                  <li>Ensure all provided content is original or properly licensed</li>
                  <li>Make payments according to the agreed schedule</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-600 mb-4">
                  <strong>Client Ownership:</strong> Upon full payment, clients own the final website design and content. 
                  However, we retain the right to use the work in our portfolio and marketing materials.
                </p>
                <p className="text-gray-600">
                  <strong>Third-Party Assets:</strong> Any third-party themes, plugins, or assets used remain 
                  subject to their respective licenses. Clients are responsible for ongoing license compliance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Hosting and Domain Services</h2>
                <p className="text-gray-600 mb-4">
                  <strong>Domain Registration:</strong> Domain names are registered in the client's name. 
                  We facilitate the registration process but clients maintain ownership.
                </p>
                <p className="text-gray-600">
                  <strong>Hosting Services:</strong> Hosting services are provided through third-party providers. 
                  We are not responsible for server downtime beyond our control, but we will assist in resolution efforts.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Warranties and Limitations</h2>
                <p className="text-gray-600 mb-4">
                  <strong>Warranty Period:</strong> We provide a 30-day warranty on all development work for 
                  bug fixes and functionality issues (excluding additional feature requests).
                </p>
                <p className="text-gray-600">
                  <strong>Limitation of Liability:</strong> Our liability is limited to the total amount paid 
                  for the specific project. We are not liable for indirect, consequential, or punitive damages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Termination</h2>
                <p className="text-gray-600">
                  Either party may terminate the agreement with written notice. In case of termination, 
                  payment is due for all work completed up to the termination date. Completed work will 
                  be delivered upon payment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Governing Law</h2>
                <p className="text-gray-600">
                  These terms are governed by the laws of [Your State/Country]. Any disputes will be 
                  resolved through binding arbitration or in the courts of [Your Jurisdiction].
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Information</h2>
                <p className="text-gray-600">
                  For questions regarding these terms and conditions, please contact:
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@freelancewebdesigner.com<br />
                    <strong>Phone:</strong> +1 (234) 567-8900<br />
                    <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
