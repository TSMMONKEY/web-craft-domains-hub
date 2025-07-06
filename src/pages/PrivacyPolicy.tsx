
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: December 2024
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  When you engage our freelance web development services, we may collect the following information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Business information (company name, website URL, project requirements)</li>
                  <li>Technical information (domain preferences, hosting requirements)</li>
                  <li>Communication records (emails, project discussions, feedback)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Providing freelance web design and development services</li>
                  <li>Managing domain registration and hosting services</li>
                  <li>Communicating about project progress and requirements</li>
                  <li>Processing payments and maintaining business records</li>
                  <li>Improving our services and customer experience</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>With domain registrars and hosting providers when necessary for service delivery</li>
                  <li>With payment processors for transaction processing</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. This includes secure communication channels, encrypted data storage, 
                  and regular security audits of our systems.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookie Policy</h2>
                <p className="text-gray-600">
                  Our website uses cookies to enhance user experience and analyze website traffic. You can choose to 
                  accept or decline cookies through your browser settings. Most web browsers automatically accept cookies, 
                  but you can modify your browser settings to decline cookies if you prefer.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access your personal information we hold</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@freelancewebdesigner.com<br />
                    <strong>Phone:</strong> +1 (234) 567-8900<br />
                    <strong>Address:</strong> 123 Web Developer Lane, Digital City, DC 12345
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review 
                  this Privacy Policy periodically for any changes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
