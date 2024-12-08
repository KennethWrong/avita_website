import Image from "next/image";

export default function Page() {
  const titleColour = "text-purple-800 mb-1";
  const sectionStyle = "mt-7";

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 md:px-20 lg:px-40">
      <div className=" max-w-7xl mx-auto p-8 text-gray-600">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Repair Terms & Conditions
        </h1>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>1. Local Privacy Policy</h1>
          <p>
            Nexstgo Company Limited, AVITA Technologies International Company
            Limited and our affiliates (“Nexstgo,” “AVITA” “we,” “us,” “our”)
            know how important privacy is to our customers, and we strive to be
            clear about how we collect, use, disclose, transfer and store your
            information. This Privacy Policy provides an overview of our
            information practices. The Privacy Policy applies to Nexstgo and
            AVITA devices, websites or online applications that refer to or link
            to the Privacy Policy (collectively, our “Services”).
          </p>
          <br />
          <p>
            While this Privacy Policy applies to all our Services, we also have
            provided certain specific privacy supplements that contain
            additional information about our practices in connection with
            particular Services. These supplements apply to your use of the
            Services they cover. Additional consent will be obtained for certain
            data processing activities.
          </p>
          <br />
          <p>
            Please note that the Privacy Policy applies to your usage of Nexstgo
            and AVITA devices (which are among the Services covered by this
            Privacy Policy, along with our websites and online applications). It
            also applies regardless of whether you use a computer, mobile phone,
            tablet, or other device to access our Services. It is important that
            you read the Privacy Policy carefully because anytime you use our
            Services, you consent to the practices we describe in the Privacy
            Policy and the supplements. If you do not agree to the practices
            described in the Privacy Policy, you should not use our Services.
          </p>
          <br />
          <p>
            It also is important that you check back often for updates to the
            Privacy Policy. If we update the Privacy Policy we will let you know
            about changes we consider to be material by placing a note on
            relevant Services. By accessing or using our Services after we have
            placed such a notice, you consent to the new practice(s) identified
            in the update. The most current version of the Privacy Policy will
            always be available here http://www.avita.global/ .You can check the
            “effective date” posted at the top to see when the Privacy Policy
            was last updated.
          </p>
        </div>
        <h1 className={`${titleColour} ${sectionStyle}`}>
          2. What information do we collect about you?
        </h1>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>
            2.1. Information you provide directly
          </h1>
          <p>
            Some Services enable you to give us information directly. For
            example:
          </p>
          <ul className=" list-disc list-inside space-y-2">
            <li>
              A number of our Services enable users to create accounts or
              profiles. In connection with these Services, we may ask you to
              provide certain information about yourself to set up the account
              or profile. For example, you can submit certain information about
              yourself, such as your name and email address, when you create a
              Nexstgo and AVITA Account.
            </li>
            <li>
              If you order a product or paid service from us, we may ask for
              your name, contact information, shipping and billing address(es),
              and credit card information in order to process your order.
            </li>
            <li>
              Some of our Services enable you to communicate with other people.
              Those communications will be transmitted through and stored on our
              systems.
            </li>
          </ul>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>
            2.2. Information about your use of the Services
          </h1>
          <p>
            In addition to the information you provide, we may collect
            information about your use of our Services through software on your
            device and other means. For example, we may collect:
          </p>
          <ul className=" list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Device information </span>such as your
              hardware model, serial number and other unique device identifiers,
              MAC address, IP address, operating system version, and settings of
              the device you use to access the Services.
            </li>
            <li>
              <span className="font-bold">Log information </span>such as the
              time and duration of your use of the Service, search query terms
              you enter through the Services, and any information stored in
              cookies that we have set on your device.
            </li>
            <li>
              <span className="font-bold">Location information </span>such as
              your device’s GPS signal or information about nearby WiFi access
              points and cell towers that may be transmitted to us, with your
              consent, when you use certain Services.
            </li>
            <li>
              <span className="font-bold">Voice information </span>such as
              recordings of your voice that we make (and may store on our
              servers) when you use voice commands to control a Service. (Note
              that we work with a third-party service provider that provides
              speech-to-text conversion services on our behalf. This provider
              may receive and store certain voice commands.)
            </li>
            <li>
              Other information about your use of the Services, such as the apps
              you use, the websites you visit, and how you interact with content
              offered through a Service.
            </li>
          </ul>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>
            2.3. Information from third-party sources
          </h1>
          <p>
            We may receive information about you from publicly and commercially
            available sources (as permitted by law), which we may combine with
            other information we receive from or about you. We also may receive
            information about you from third-party social networking services
            when you choose to connect with those services.
          </p>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>
            2.4. Other Information We Collect
          </h1>
          <p>
            We also may collect other information about you, your device, or
            your use of the services in ways that we describe to you at the
            point of collection or otherwise with your consent.
          </p>
          <br />
          <p>
            You can choose not to provide us with certain types of information
            (e.g., information we request during Nexstgo and AVITA Account
            registration), but doing so may affect your ability to use some
            Services.
          </p>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>
            3. To whom do we disclose your information?
          </h1>
          <p>
            We will not disclose your information to third parties for their own
            independent marketing or business purposes without your consent.
            However, we may disclose your information to the following entities:
          </p>
          <ul className=" list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Affiliates </span> Your information
              may be shared among Nexstgo and AVITA Affiliates.
            </li>
            <li>
              <span className="font-bold">Business Partners</span> We also may
              share your information with trusted business partners, including
              wireless carriers. These entities may use your information to
              provide you with services you request make predictions about your
              interests and may provide you with promotional materials,
              advertisements and other materials.
            </li>
            <li>
              <span className="font-bold">Service providers </span> We also may
              disclose your information to companies that provide services for
              or on behalf of us, such as companies that help us with billing or
              that send emails on our behalf. These entities are limited in
              their ability to use your information for purposes other than
              providing services for us.
            </li>
            <li>
              <span className="font-bold">
                Other Parties When Required by Law or as Necessary to Protect
                Our Services.
              </span>
              There may be instances when we disclose your information to other
              parties:
              <ul className="list-square ml-4 list-inside">
                <li>
                  to comply with the law or respond to compulsory legal process
                  (such as a search warrant or other court order);
                </li>
                <li>
                  to verify or enforce compliance with the policies governing
                  our Services; and
                </li>
                <li>
                  to protect the rights, property, or safety of Nexstgo and
                  AVITA, or any of our respective affiliates, business partners,
                  or customers.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-bold">
                Other Parties in Connection With Corporate Transactions.
              </span>
              We may disclose your information to a third party as part of a
              merger or transfer, or in the event of a bankruptcy.
            </li>
            <li>
              <span className="font-bold">
                Other Parties With Your Consent or At Your Direction.
              </span>
              In addition to the disclosures described in this Privacy Policy,
              we may share information about you with third parties when you
              consent to or request such sharing.
            </li>
          </ul>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>
            4. What do we do to keep your information secure?
          </h1>
          <p>
            We have put in place reasonable physical and technical measures to
            safeguard the information we collect in connection with the
            Services. However, please note that although we take reasonable
            steps to protect your information, no website, Internet
            transmission, computer system or wireless connection is completely
            secure.
          </p>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>
            4.1 Consent to International Transfer of Data
          </h1>
          <p>
            By using or participating in any Service and/or providing us with
            your information, you consent to the collection, transfer, storage
            and processing of your information outside of your country of
            residence (e.g., Taiwan), consistent with this Privacy Policy.
            Please note that the data protection and other laws of countries to
            which your information may be transferred might not be as
            comprehensive as those in your country.
          </p>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>4.2 Accessing Your Information</h1>
          <p>
            Under the laws of some jurisdictions, you may have the right to
            request details about the information we collect and to correct
            inaccuracies in that information. Any further statutory user rights
            remain unaffected. If permitted by law, we may charge you a small
            fee for providing you with this ability. We may decline to process
            requests that are unreasonably repetitive, require disproportionate
            technical effort, jeopardize the privacy of others, are extremely
            impractical, or for which access is not otherwise required by local
            law. If you would like to make a request to access your information,
            please contact our customer service department.
          </p>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>4.3 Data Retention</h1>
          <p>
            We take reasonable steps to ensure that we retain information about
            you only for so long as is necessary for the purpose for which it
            was collected, or as required under any contract or by applicable
            law.
          </p>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>
            Third-Party Links and Products on Our Services
          </h1>
          <p>
            Our Services may link to third-party websites and services that are
            outside our control. We are not responsible for the security or
            privacy of any information collected by websites or other services.
            You should exercise caution, and review the privacy statements
            applicable to the third-party websites and services you use.
          </p>
          <br />
          <p>
            We also may make available to you certain products or services
            developed by third parties. Nexstgo and AVITA are not responsible
            for these third-party products or services.
          </p>
          <br />
          <p>
            Third Parties that Provide Content, Advertising or Functionality on
            Our Services
          </p>
          <br />
          <p>
            Some of the content, advertising, and functionality on our Services
            may be provided by third parties that are not affiliated with us.
            For example:
          </p>
          <ul className=" list-disc list-inside space-y-2">
            <li>
              Certain third parties may serve advertising or keep track of which
              advertisements users see, how often they see those advertisements,
              and what users do in response to them; and
            </li>
            <li>
              We enable you to share certain materials on the Services with
              others through social networking services such as Facebook,
              Twitter, Google +, and LinkedIn.
            </li>
          </ul>
          <br />
          <p>
            If you connect with a social networking service, we may receive and
            store authentication information from that service to enable you to
            log in, as well as other information that you allow us to receive
            when you connect with these services.
          </p>
          <br />
          <p>
            Also, please note that if you choose to connect with a social
            networking service on a device used by people in addition to you,
            those other users may be able to see information stored or displayed
            in connection with your account on the social networking service(s)
            with which you connect.
          </p>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>
            5 Cookies, Beacons and Similar Technologies
          </h1>
          <p>
            We, as well as certain third parties that provide content,
            advertising, or other functionality on our Services, may use
            cookies, beacons, and other technologies in certain areas of our
            Services.
          </p>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>5.1 Cookies</h1>
          <p>
            Cookies are small files that store information on your computer,
            mobile phone or other device. They enable the entity that put the
            cookie on your device to recognize you across different websites,
            services, devices, and/or browsing sessions. Cookies serve many
            useful purposes. For example:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Cookies can remember your sign-in credentials so you don’t have to
              enter those credentials each time you log on to a service.
            </li>
            <li>
              Cookies help us and third parties understand which parts of our
              Services are the most popular because they help us to see which
              pages and features visitors are accessing and how much time they
              are spending on the pages. By studying this kind of information,
              we are better able to adapt the Services and provide you with a
              better experience.
            </li>
            <li>
              Cookies help us and third parties understand which ads you have
              seen so that you don’t receive the same ad each time you access a
              Service.
            </li>
            <li>
              Cookies help us and third parties provide you with relevant
              content and advertising by collecting information about your use
              of our Services and other websites and apps.
            </li>
          </ul>
          <br />
          <p>
            When you use a web browser to access the Services, you can configure
            your browser to accept all cookies, reject all cookies, or notify
            you when a cookie is sent. Each browser is different, so check the
            “Help” menu of your browser to learn how to change your cookie
            preferences. The operating system of your device may contain
            additional controls for cookies.
          </p>
          <br />
          <p>
            Please note, however, that some Services may be designed to work
            using cookies and that disabling cookies may affect your ability to
            use those Services, or certain parts of them.
          </p>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>5.2 Other Local Storage</h1>
          <p>
            We, along with certain third parties, may use other kinds of local
            storage technologies, such as Local Shared Objects (also referred to
            as “Flash cookies”) and HTML5 local storage, in connection with our
            Services. These technologies are similar to the cookies discussed
            above in that they are stored on your device and can be used to
            store certain information about your activities and preferences.
            However, these technologies may make use of different parts of your
            device from standard cookies, and so you might not be able to
            control them using standard browser tools and settings. For
            information about disabling or deleting information contained in
            Flash cookies, please click here.
          </p>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>5.3 Beacons</h1>
          <p>
            We, along with certain third parties, also may use technologies
            called beacons (or “pixels”) that communicate information from your
            device to a server. Beacons can be embedded in online content,
            videos, and emails, and can allow a server to read certain types of
            information from your device, know when you have viewed particular
            content or a particular email message, determine the time and date
            on which you viewed the beacon, and the IP address of your device.
            We and certain third parties use beacons for a variety of purposes,
            including to analyze the use of our Services and (in conjunction
            with cookies) to provide content and ads that are more relevant to
            you.
          </p>
          <br />
          <p>
            By accessing and using our Services, you consent to the storage of
            cookies, other local storage technologies, beacons and other
            information on your devices. You also consent to the access of such
            cookies, local storage technologies, beacons and information by us
            and by the third parties mentioned above.
          </p>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${titleColour}`}>6 Your Choices</h1>
          <p>
            We offer a variety of choices about how we use your information. You
            can make choices about whether to receive promotional communications
            from us by following the unsubscribe instructions included in the
            communication. In addition, you can also generally make choices in
            your settings, or by visiting relevant webpages as listed below;
          </p>
          <br />
          <ul className="list-disc list-inside gap-y-2">
            <li>
              with respect to targeted advertising that may interest you; and
            </li>
            <li>
              with respect to choice for the combination of your information
              across services and devices for the purposes set out in the
              Privacy Policy http://www.avita.global/support
            </li>
          </ul>
          <br />
          <p>
            And you may be able to make choices in specific Services or when we
            give you a just-in-time notice.
          </p>
        </div>
      </div>
    </div>
  );
}
