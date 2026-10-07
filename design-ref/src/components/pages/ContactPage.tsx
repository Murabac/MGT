import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO, SERVICES } from '../../data/content';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  preselectedService?: string;
  forcedState?: 'empty' | 'error' | 'success';
}

export const ContactPage: React.FC<ContactPageProps> = ({
  preselectedService = '',
  forcedState,
}) => {
  // Form fields
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || SERVICES[0].title);
  const [message, setMessage] = useState('');

  // Form submission states: 'idle' | 'error' | 'success'
  const [submissionState, setSubmissionState] = useState<'idle' | 'error' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Allow forced state override from design inspection tools
  useEffect(() => {
    if (forcedState === 'error') {
      setSubmissionState('error');
      setErrorMessage('Add your name, organization, the service you need, and a short message.');
    } else if (forcedState === 'success') {
      setName('Sarah Jennings');
      setOrganization('UN Development Programme (UNDP)');
      setPhone('063 411 2233');
      setService('Vehicle leasing and light transport');
      setMessage('Requesting monthly lease for four 4x4 Land Cruisers for upcoming field missions in Maroodi Jeex.');
      setSubmissionState('success');
    } else if (forcedState === 'empty') {
      setName('');
      setOrganization('');
      setPhone('');
      setService(SERVICES[0].title);
      setMessage('');
      setSubmissionState('idle');
      setErrorMessage('');
    }
  }, [forcedState]);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation according to brief: Name, Organization, Service, Message required
    if (!name.trim() || !organization.trim() || !service.trim() || !message.trim()) {
      setSubmissionState('error');
      setErrorMessage('Add your name, organization, the service you need, and a short message.');
      return;
    }

    // Success state
    setSubmissionState('success');

    // Create mailto link as specified in brief
    const subject = encodeURIComponent(`Logistics Enquiry: ${organization} - ${service}`);
    const bodyText = encodeURIComponent(
      `From: ${name}\nOrganization: ${organization}\nPhone: ${phone || 'N/A'}\nService Requested: ${service}\n\nEnquiry Details:\n${message}\n\n(Sent via MGT Group Website)`
    );
    const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${bodyText}`;

    try {
      window.location.href = mailtoUrl;
    } catch {
      // Handled gracefully via success message text
    }
  };

  const resetForm = () => {
    setName('');
    setOrganization('');
    setPhone('');
    setService(SERVICES[0].title);
    setMessage('');
    setSubmissionState('idle');
    setErrorMessage('');
  };

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* Modern Clean Page Header */}
      <section className="border-b border-[#D7E2EE] bg-gradient-to-b from-[#F3F7FB] to-white py-12 md:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
              Hargeisa Dispatch Operations
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#122033] tracking-tight">
              Contact & Direct Enquiries
            </h1>
            <p className="text-base sm:text-lg text-[#122033] leading-relaxed">
              Tell us the cargo, the route, or the vehicles you need. We reply from the Hargeisa office.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area: Two columns on desktop, stacked on mobile (details first, form second) */}
      <section className="py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Column 1: Office Details & Direct Channels First */}
            <div className="lg:col-span-5 space-y-8">
              {/* Clean Quick Action Cards for High Conversion */}
              <div className="bg-[#0B4CAD] text-white p-6 rounded-[4px] shadow-sm space-y-4">
                <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#FEDE02]">
                  Fast Humanitarian & Project Response
                </span>
                <h3 className="text-xl font-bold leading-tight">
                  Need Fleet or Haulage Today?
                </h3>
                <p className="text-xs text-[#D7E2EE] leading-relaxed">
                  Call our duty dispatch coordinator directly or send an enquiry below. We provide immediate vehicle availability and route clearance.
                </p>
                <div className="pt-1 flex flex-col gap-2">
                  <a
                    href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                    className="w-full py-3 bg-[#1776E9] hover:bg-white hover:text-[#0B4CAD] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors text-center"
                  >
                    Call Duty Desk: {COMPANY_INFO.phones[0]}
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="w-full py-2.5 border border-white/40 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors text-center"
                  >
                    Email Operations Desk
                  </a>
                </div>
              </div>

              {/* Physical Office Address */}
              <div className="border border-[#D7E2EE] p-6 rounded-[4px] bg-white space-y-2">
                <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1776E9]">
                  Physical Office
                </span>
                <h3 className="text-lg font-bold text-[#122033]">
                  Hargeisa Headquarters
                </h3>
                <p className="text-sm text-[#122033] leading-relaxed">
                  {COMPANY_INFO.office}
                </p>
                <div className="pt-2 text-xs text-[#526178]">
                  <strong>Email: </strong>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-[#1776E9] hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* All 7 Phone Lines (Tappable on mobile with 44px+ height) */}
              <div className="border border-[#D7E2EE] p-6 rounded-[4px] bg-white space-y-3">
                <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
                  Direct Phone Lines (Tappable)
                </span>
                <h3 className="text-base font-bold text-[#122033]">
                  Dispatch & Operations Phones
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {COMPANY_INFO.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="flex items-center justify-between p-2.5 bg-[#F3F7FB] hover:bg-[#1776E9] hover:text-white border border-[#D7E2EE] text-[#122033] rounded-[3px] transition-colors min-h-[44px] group"
                    >
                      <span className="text-xs font-mono font-bold tracking-tight">
                        {phone}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1776E9] group-hover:text-white">
                        Call →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Modern Clean Enquiry Form Second */}
            <div className="lg:col-span-7">
              <div className="border border-[#D7E2EE] bg-white p-6 sm:p-10 rounded-[4px] shadow-sm">
                <div className="mb-6 pb-4 border-b border-[#D7E2EE]">
                  <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1776E9]">
                    Commercial Enquiries
                  </span>
                  <h2 className="text-2xl font-bold text-[#122033] tracking-tight mt-1">
                    Send a Service Enquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-[#526178] mt-1">
                    Fill out your mission or cargo requirements to receive an official quote and availability.
                  </p>
                </div>

                {/* Error Banner */}
                {submissionState === 'error' && (
                  <div
                    role="alert"
                    className="mb-6 p-4 border border-rose-300 bg-rose-50 text-rose-900 text-sm rounded-[3px] flex items-start gap-3"
                  >
                    <span className="font-bold text-rose-700 uppercase text-xs tracking-wider shrink-0 mt-0.5">
                      Notice:
                    </span>
                    <p className="font-medium text-xs leading-relaxed">
                      {errorMessage ||
                        'Add your name, organization, the service you need, and a short message.'}
                    </p>
                  </div>
                )}

                {/* Success Banner */}
                {submissionState === 'success' && (
                  <div
                    role="status"
                    className="mb-6 p-5 border border-[#1E9C34] bg-emerald-50 text-emerald-950 text-sm rounded-[3px] space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-[#1E9C34]" aria-hidden="true" />
                      <strong className="font-bold text-[#122033] uppercase text-xs tracking-wider">
                        Enquiry Ready for Dispatch
                      </strong>
                    </div>
                    <p className="text-xs leading-relaxed text-[#122033]">
                      Your email app should open with this enquiry. If it does not, write to the email address:
                    </p>
                    <p className="text-xs font-bold text-[#0B4CAD] break-all">
                      {COMPANY_INFO.email}
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={resetForm}
                        className="text-xs font-bold text-[#1776E9] hover:underline"
                      >
                        ← Start another enquiry
                      </button>
                    </div>
                  </div>
                )}

                {/* Form Controls */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-bold uppercase tracking-wider text-[#122033] mb-1.5"
                      >
                        Full Name <span className="text-[#1776E9]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (submissionState === 'error') setSubmissionState('idle');
                        }}
                        placeholder="Your full name"
                        className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white border text-sm text-[#122033] rounded-[3px] transition-colors focus-visible:outline-2 focus-visible:outline-[#1776E9] ${
                          submissionState === 'error' && !name.trim()
                            ? 'border-rose-500 bg-rose-50/20'
                            : 'border-[#D7E2EE] hover:border-[#526178]'
                        }`}
                      />
                    </div>

                    {/* Organization */}
                    <div>
                      <label
                        htmlFor="contact-organization"
                        className="block text-xs font-bold uppercase tracking-wider text-[#122033] mb-1.5"
                      >
                        Organization or Agency <span className="text-[#1776E9]">*</span>
                      </label>
                      <input
                        id="contact-organization"
                        type="text"
                        required
                        value={organization}
                        onChange={(e) => {
                          setOrganization(e.target.value);
                          if (submissionState === 'error') setSubmissionState('idle');
                        }}
                        placeholder="e.g. UN, INGO, or Project name"
                        className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white border text-sm text-[#122033] rounded-[3px] transition-colors focus-visible:outline-2 focus-visible:outline-[#1776E9] ${
                          submissionState === 'error' && !organization.trim()
                            ? 'border-rose-500 bg-rose-50/20'
                            : 'border-[#D7E2EE] hover:border-[#526178]'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#122033] mb-1.5"
                      >
                        Phone Number <span className="text-[#526178] font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 063 484 8748"
                        className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-[#D7E2EE] hover:border-[#526178] text-sm text-[#122033] rounded-[3px] transition-colors focus-visible:outline-2 focus-visible:outline-[#1776E9]"
                      />
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-xs font-bold uppercase tracking-wider text-[#122033] mb-1.5"
                      >
                        Service Required <span className="text-[#1776E9]">*</span>
                      </label>
                      <select
                        id="contact-service"
                        required
                        value={service}
                        onChange={(e) => {
                          setService(e.target.value);
                          if (submissionState === 'error') setSubmissionState('idle');
                        }}
                        className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-[#D7E2EE] hover:border-[#526178] text-sm text-[#122033] rounded-[3px] transition-colors focus-visible:outline-2 focus-visible:outline-[#1776E9]"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.number}. {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#122033] mb-1.5"
                    >
                      Enquiry Details / Route / Fleet Count <span className="text-[#1776E9]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (submissionState === 'error') setSubmissionState('idle');
                      }}
                      placeholder="Specify required vehicles (e.g. 4x4 Prado or Land Cruiser), haulage volume, route (e.g. Hargeisa to Burao or Berbera port), or timeline..."
                      className={`w-full p-3.5 bg-white border text-sm text-[#122033] rounded-[3px] transition-colors focus-visible:outline-2 focus-visible:outline-[#1776E9] ${
                        submissionState === 'error' && !message.trim()
                          ? 'border-rose-500 bg-rose-50/20'
                          : 'border-[#D7E2EE] hover:border-[#526178]'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto min-h-[46px] px-9 py-3.5 bg-[#1776E9] hover:bg-[#0B4CAD] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#1776E9] inline-flex items-center justify-center gap-2"
                    >
                      <span>Send enquiry to Hargeisa desk</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
