import { NextSeo } from "next-seo";

export default function Terms() {
  return (
    <main className="mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28">
      <NextSeo
        title="Data Processing Addendum | Shuttle"
        description="Learn more about how Shuttle processes your data."
        openGraph={{
          images: [
            {
              url: "https://www.shuttle.dev/images/og-image.png",
              width: 3516,
              height: 1432,
              alt: "Shuttle.dev - Build Backends Fast",
            },
          ],
        }}
      />
      <div className="mb-[98px]">
        <h1 className="mb-[19px] text-[64px] font-bold text-head">
          Data Processing Addendum (DPA)
        </h1>
        <p className="mb-6 text-xl">
          This Data Processing Addendum (the <strong>DPA</strong>) is
          incorporated by reference into our Terms and Conditions{" "}
          <a href="https://www.shuttle.dev/terms" className="underline">
            https://www.shuttle.dev/terms
          </a>{" "}
          (the Terms) governing the use of our Hosting Services entered by and
          between you and <strong>Openquery Ltd</strong>, a company registered
          in England under number <strong>12268176</strong>, with its registered
          office at George House, 39 Fitzroy Square, London, England, W1T 6EZ (
          <strong>we/us</strong>).
        </p>
        <p className="mb-6 text-xl">
          Unless otherwise stated, any defined terms herein shall have the same
          meaning as provided in the Terms.
        </p>
        <p className="mb-6 text-xl">
          This DPA reflects the agreement of the parties for us to process the
          Customer Data in accordance with your instructions and on your behalf.
          Any such Customer Data includes all Personal Data (as defined below)
          that you provide when using our Hosting Services over which you are a
          controller.
        </p>
        <p className="mb-6 text-xl">
          You are solely responsible for determining whether and how you use
          your Hosting Services, and ensuring that you have the right or
          obtained the consent of any individual whose Personal Data you are
          processing when using our Hosting Services, and in doing so, you
          comply with all applicable data protection laws.{" "}
        </p>

        <h2 className="mb-6 text-[32px] text-head">AGREED TERMS</h2>

        <ol className="mb-6 list-decimal space-y-6 pl-6 text-xl">
          <li>
            <strong className="mb-6 block">
              Definitions and Interpretation
            </strong>
            <ol className="mb-6 list-[lower-roman] space-y-6 pl-6 text-xl">
              <li>
                <span className="mb-6 block">Definitions:</span>
                <ol className="mb-6 list-[lower-alpha] space-y-6 pl-6 text-xl">
                  <li>
                    <strong>
                      Controller, Processor, Data Subject, Personal Data,
                      Personal Data Breach and Processing:
                    </strong>{" "}
                    have the meanings given to them in the Data Protection
                    Legislation.
                  </li>
                  <li>
                    <strong>Data Protection Legislation:</strong> all applicable
                    data protection and privacy legislation in force from time
                    to time in the UK including without limitation the UK GDPR;
                    the Data Protection Act 2018 (and regulations made
                    thereunder) (DPA 2018); and the Privacy and Electronic
                    Communications Regulations 2003 (SI 2003/2426) as amended.
                    EEA: the European Economic Area.
                  </li>
                  <li>
                    <strong>UK GDPR:</strong> has the meaning given to it in
                    section 3(10) (as supplemented by section 205(4)) of the DPA
                    2018.
                  </li>
                  <li>
                    <strong>Special Categories of Personal Data:</strong>{" "}
                    personal data revealing racial or ethnic origin, political
                    opinions, religious or philosophical beliefs, or trade union
                    membership, genetic data, biometric data for the purpose of
                    uniquely identifying a natural person, data concerning
                    health or data concerning a natural person’s sex life or
                    sexual orientation 
                  </li>
                </ol>
              </li>
              <li>A reference to writing or written includes email.</li>
              <li>
                In the case of conflict or ambiguity between any of the
                provisions of this DPA and the provisions of the Terms (which
                includes by reference the Privacy Policy), the provisions of
                this DPA will prevail.
              </li>
            </ol>
          </li>
          <li>
            <strong className="mb-6 block">
              Personal data types and processing purposes
            </strong>
            <ol className="mb-6 list-[lower-roman] space-y-6 pl-6 text-xl">
              <li>
                <span className="mb-6 block">
                  We agree and acknowledge that for the purpose of the Data
                  Protection Legislation:
                </span>
                <ol className="mb-6 list-[lower-alpha] space-y-6 pl-6 text-xl">
                  <li>You are the Controller and we are the Processor.</li>
                  <li>
                    You retain control of the Customer Data and remain
                    responsible for its compliance obligations under the Data
                    Protection Legislation, including for the written processing
                    instructions you give us.
                  </li>
                  <li>
                    The subject matter of the Processing is the performance of
                    the Hosting Services pursuant to the Terms.
                  </li>
                  <li>
                    We shall only Process the Customer Data for as long as you
                    use the Hosting Services, unless otherwise set out in the
                    Terms, the Privacy Policy or the DPA, or otherwise required
                    by professional or legal obligations to which we are
                    subject.
                  </li>
                  <li>
                    <span className="mb-6 block">
                      The nature and purpose of Processing are:
                    </span>
                    <ol className="mb-6 list-decimal space-y-6 pl-6 text-xl">
                      <li>to provide the Hosting Services to you;</li>
                      <li>
                        to perform the DPA and our obligations under the Terms
                        or other contracts executed between us, including
                        without limitation, to repair any bugs to our Hosting
                        Services or assist you with any query;
                      </li>
                      <li>
                        to act on your written instructions where consistent
                        with the purpose of providing the Hosting Services;
                      </li>
                      <li>
                        to render Customer Data fully anonymous in accordance
                        with applicable standards recognised by Data Protection
                        Legislation;{" "}
                      </li>
                      <li>
                        to share the Customer Data with third parties in
                        accordance with your instructions, pursuant to your use
                        of the Services (e.g. to allow the integration of third
                        party service providers with the Hosting Services) or as
                        set out in this DPA;
                      </li>
                      <li>
                        to comply with applicable laws and regulations; or{" "}
                      </li>
                      <li>
                        as required under applicable laws or a court of
                        competent jurisdiction, provided that we shall inform
                        you of any such legal requirement prior to the
                        Processing in such a way, unless we are legally
                        prohibited to do so on important grounds of public
                        interest.
                      </li>
                    </ol>
                  </li>
                  <li>
                    The type of Customer Data and the categories of Data
                    Subjects are set out by you on a case by case basis –
                    depending on your use of the Hosting Services.{" "}
                  </li>
                </ol>
              </li>
              <li>
                You agree that you will not use the Hosting Services to Process
                Special Categories of Personal Data. If you wish to use the
                Services in order to do so, you must first obtain our written
                consent, and enter any additional agreements as we may require
                from time to time.
              </li>
            </ol>
          </li>

          <li>
            <strong className="mb-6 block">Our obligations</strong>
            <ol className="mb-6 list-[lower-roman] space-y-6 pl-6 text-xl">
              <li>
                We will only process the Customer Data to the extent, and in
                such a manner, as is necessary for the purposes set out in this
                DPA, including to provide the Hosting Services in accordance
                with the Terms, and in accordance with your written
                instructions. We will not process the Customer Data for any
                other purpose or in a way that does not comply with this DPA or
                the Data Protection Legislation. We will inform you without
                undue delay if we believe that your instructions to Process
                Customer Data infringes Data Protection Legislation.
              </li>
              <li>
                We will maintain the confidentiality of the Customer Data and
                will not disclose the Customer Data to third-parties unless you,
                or this DPA, specifically authorises the disclosure, or as
                required by applicable law, court or regulator. In such a case,
                we will inform you of any such disclosure requirement unless we
                are prohibited to do so by law or a court of competent
                jurisdiction.
              </li>
              <li>
                We will reasonably assist you, at no additional cost, with
                meeting your compliance obligations under the Data Protection
                Legislation, taking into account the nature of the our
                processing and the information available to us including in
                relation to Data Subject rights, data protection impact
                assessments and reporting to and consulting with the regulator
                under the Data Protection Legislation.
              </li>
              <li>
                We will ensure that all of our employees and advisors engaged in
                the Processing of Customer Data are under an obligation of
                confidentiality (whether statutory or contractual).{" "}
              </li>
              <li>
                We will implement appropriate technical and organisational
                measures against accidental, unauthorised or unlawful
                processing, access, copying, modification, reproduction, display
                or distribution of the Customer Data, and against accidental or
                unlawful loss, destruction, alteration, disclosure or damage of
                Customer Data.
              </li>
            </ol>
          </li>
          <li>
            <strong className="mb-6 block">Personal data breach</strong>
            <ol className="mb-6 list-[lower-roman] space-y-6 pl-6 text-xl">
              <li>
                <span className="mb-6 block">
                  We will, without undue delay, notify you in writing if we
                  become aware of a Personal Data Breach. In such a case, we
                  will provide you, insofar as possible, with the following
                  written information:
                </span>
                <ol className="mb-6 list-[lower-alpha] space-y-6 pl-6 text-xl">
                  <li>
                    description of the nature of the Personal Data Breach,
                    including the categories of in-scope Customer Data and
                    approximate number of both Data Subjects and the Customer
                    Data records concerned;
                  </li>
                  <li>the likely consequences; and</li>
                  <li>
                    a description of the measures taken or proposed to be taken
                    to address the Personal Data Breach, including measures to
                    mitigate its possible adverse effects.
                  </li>
                </ol>
              </li>
              <li>
                We will not inform any third-party of any accidental,
                unauthorised or unlawful processing of all or part of the
                Customer Data and/or a Personal Data Breach without first
                obtaining your written consent, except when required to do so by
                applicable law.
              </li>
            </ol>
          </li>

          <li>
            <strong className="mb-6 block">
              Cross-border transfers of personal data
            </strong>
            <ol className="mb-6 list-[lower-roman] space-y-6 pl-6 text-xl">
              <li>
                We (and any subprocessors) will not transfer or otherwise
                process the Customer Data outside the UK or the EEA without
                obtaining your consent. For the avoidance of doubt, you
                authorise to transfer any Customer Data the subprocessors set
                out in section 6 below.
              </li>
            </ol>
          </li>

          <li>
            <strong className="mb-6 block">Subprocessors</strong>
            <ol className="mb-6 list-[lower-roman] space-y-6 pl-6 text-xl">
              <li>
                You expressly authorise us to transfer Customer Data to the
                following subprocessors:
                <table>
                  <thead>
                    <tr className="border bg-slate-700">
                      <th className="border border-gray-800 p-2">Name</th>
                      <th className="border border-gray-800 p-2">Location</th>
                      <th className="border border-gray-800 p-2">
                        Appropriate safeguards
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-800 p-2">
                        Amazon Web Services
                      </td>
                      <td className="border border-gray-800 p-2">EEA</td>
                      <td className="border border-gray-800 p-2">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                We may only authorise a third-party (subprocessor) to process
                the Customer Data if you have been provided with an opportunity
                to object to the appointment of each subprocessor within seven
                days from being notified. You must include the reasons for
                objecting to our use of any new sub-processor in your objection
                notice.
              </li>
              <li>
                Failure to object to such new subprocessor in writing within
                seven days following notice shall be deemed as acceptance of the
                new subprocessor. In the event you object to a new subprocessor
                as per clause 6.1 of this DPA, you may, as your sole remedy,
                terminate the Agreement and this DPA with respect only to those
                elements of the Hosting Services which we cannot provided
                without the use of the objected-to new subprocessor, by
                providing us with a written notice to that effect. You shall pay
                us all amounts outstanding under the Agreement before the
                termination date with respect to the Processing at issue. 
              </li>
              <li>
                We remain fully liable to you for any subprocessor’s performance
                of its obligations in connection with this DPA.
              </li>
            </ol>
          </li>

          <li>
            <strong className="mb-6 block">
              Complaints, Data Subject Requests and Third-Party Rights
            </strong>
            <ol className="mb-6 list-[lower-roman] space-y-6 pl-6 text-xl">
              <li>
                <span className="mb-6 block">
                  We will take such technical and organisational measures as may
                  be appropriate, and without undue delay, to the extent legally
                  permitted, provide such information as you may reasonable
                  require to enable you to comply with:
                </span>
                <ol className="mb-6 list-[lower-alpha] space-y-6 pl-6 text-xl">
                  <li>
                    the rights of Data Subjects under Data Protection
                    Legislation, including to subject access rights, rights to
                    rectify, port and erase personal data, object to the
                    processing of personal data; and{" "}
                  </li>
                  <li>
                    information or assessment notices served on you by a
                    regulator under the Data Protection Legislation.{" "}
                  </li>
                </ol>
              </li>
              <li>
                To the extent legally permitted, we will notify you without
                undue delay in writing if we receive a complaint, notice or
                communication that relates directly or indirectly to the
                processing of the Customer Data or to either party’s compliance
                with the Data Protection Legislation.
              </li>
              <li>
                We will notify you without undue delay, and where feasible
                within seven days, if we receive a request from a Data Subject
                for access to their Customer Data or to exercise any of their
                other rights under the Data Protection Legislation.
              </li>
              <li>
                We will cooperate with you and assist you in responding to any
                complaint, notice, communication or Data Subject request.
              </li>
            </ol>
          </li>

          <li>
            <strong className="mb-6 block">Data Return and Destruction</strong>
            <ol className="mb-6 list-[lower-roman] space-y-6 pl-6 text-xl">
              <li>
                At your written request, we will give you, or a third-party
                nominated in writing by you, a copy of or access to all or part
                of the Customer Data you have provided us under this DPA which
                is in our possession or control.
              </li>
              <li>
                On termination or expiry of the Agreement we will securely
                delete or destroy or, if directed in writing by you, return and
                not retain, all or any of the Customer Data related to this
                Agreement in our possession or control, except for one copy
                which we may retain and use for our legal purposes only, in
                accordance with our retention policies.
              </li>
            </ol>
          </li>

          <li>
            <strong className="mb-6 block">Records and Audits</strong>
            <ol className="mb-6 list-[lower-roman] space-y-6 pl-6 text-xl">
              <li>
                We will keep detailed, accurate and up-to-date written records
                regarding any processing of the Customer Data, including but not
                limited to, the access, control and security of the Customer
                Data, subcontractors, the processing purposes, categories of
                processing, and a general description of the technical and
                organisational security measures implemented.
              </li>
              <li>
                You will be given the opportunity periodically to check
                compliance with this DPA and Data Protection Legislation. The
                checks may be carried out by you or on your behalf by an
                auditor. The periodic check shall be limited to us answering
                questions put by you (a maximum of once a year) about our
                compliance with Data Protection Legislation.
              </li>
              <li>
                Having regard to our duty of confidentiality towards other
                users, you accept and acknowledge that neither you nor your
                auditor may access our IT systems or IT infrastructure.
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </main>
  );
}
