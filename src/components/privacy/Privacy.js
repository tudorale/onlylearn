import React, { useEffect, useContext } from "react";
import "./privacy.css";
import Navbar from "../navbar/Nav3";
import fire from "../services/Firebase";
import "../../main.css";
import UserContext from "../services/UserContext";
import { useLocation } from "react-router-dom";
function Privacy() {
  const status = useContext(UserContext);
  const { setUser } = status;

  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    fire.auth().onAuthStateChanged((data) => {
      if (data) {
        setUser({ data });
      } else {
        setUser(false);
      }
    });
  }, [setUser]);
  return (
    <>
      <Navbar />
      <div className="privacyContainer">
        <h1>PRIVACY NOTICE</h1>
        <p>Last updated October 17, 2020</p>
        <p>
          Thank you for choosing to be part of our community at OnlyLearn
          ("website", "we", "us", "our"). We are committed to protecting your
          personal information and your right to privacy. If you have any
          questions or concerns about our policy, or our practices with regards
          to your personal information, please contact us at
          onlylearn.platfrom@gmail.com. When you visit our and use our services,
          you trust us with your personal information. We take your privacy very
          seriously. In this privacy notice, we describe our privacy policy. We
          seek to explain to you in the clearest way possible what information
          we collect, how we use it and what rights you have in relation to it.
          We hope you take some time to read through it carefully, as it is
          important. If there are any terms in this privacy policy that you do
          not agree with, please discontinue use of our and our services. This
          privacy policy applies to all information collected through our and/or
          any related services, sales, marketing or events (we refer to them
          collectively in this privacy policy as the "Sites").
          <br /> Please read this privacy policy carefully as it will help you
          make informed decisions about sharing your personal information with
          us.
        </p>

        <h1 id="one">1. WHAT INFORMATION DO WE COLLECT?</h1>
   
          <h3>1.a Personal information you disclose to us</h3>
          <p>
           In Short: We collect personal
          information that you provide to us such as name, address, contact
          information, passwords and security data, and payment information. We
          collect personal information that you voluntarily provide to us when
          registering at the expressing an interest in obtaining information
          about us or our products and services, when participating in
          activities on the (such as posting messages in our online forums or
          entering competitions, contests or giveaways) or otherwise contacting
          us. The personal information that we collect depends on the context of
          your interactions with us, the choices you make and the
          products and features you use. The personal information we collect may
          include the following: Name and Contact Data. We collect your first
          and last name, email address, postal address, phone number, and other
          similar contact data. Credentials. We collect passwords, password
          hints, and similar security information used for authentication and
          account access.
          </p>
          <h3>1.b Payment Data</h3> 
          <p>
          We collect data necessary to process
          your payment if you make purchases, such as your payment instrument
          number (such as a credit card number), and the security code
          associated with your payment instrument. All payment data is stored by
          our payment processor and you should review its privacy policies and
          contact the payment processor directly to respond to your questions.
          </p>
          <h3>1.c Social Media Login Data</h3>
          <p>
           We may provide you with the option to register
          using social media account details in the future, like your Facebook, Twitter or
          other social media account. If you choose to register in this way, we
          will collect the Information described in the section called "HOW DO
          WE HANDLE YOUR SOCIAL LOGINS" below. All personal information that you
          provide to us must be true, complete and accurate, and you must notify
          us of any changes to such personal information.
          </p>
          <h3>1.d Information automatically collected</h3>
          <p>
          In Short: Some information — such as IP
          address and/or browser and device characteristics — is collected
          automatically when you visit our website. We automatically collect certain
          information when you visit, use or navigate the website. This information
          does not reveal your specific identity (like your name or contact
          information) but may include device and usage information, such as
          your IP address, browser and device characteristics, operating system,
          language preferences, referring URLs, device name, country, location,
          information about how and when you use our and other technical
          information. This information is primarily needed to maintain the
          security and operation of our website, and for our internal analytics and
          reporting purposes. Like many businesses, we also collect information
          through cookies and similar technologies.
          </p>
          <h3>1.e Information collected from other sources</h3>
          <p>
           In Short: We may collect limited data from public
          databases, marketing partners, and other outside sources. We may
          obtain information about you from other sources, such as public
          databases, joint marketing partners, as well as from other third
          parties. Examples of the information we receive from other sources
          include: social media profile information; marketing leads and search
          results and links, including paid listings (such as sponsored links).
        </p>
        <h1 id="two">2. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h1>
        <p>
          In Short: We only share information with your consent, to comply with
          laws, to provide you with services, to protect your rights, or to
          fulfill business obligations. We may process or share your data that
          we hold based on the following legal basis: More specifically, we may
          need to process your data or share your personal information in the
          following situations:</p>
          <h3>Business Transfers</h3>
          <p>
           We may share or transfer
          your information in connection with, or during negotiations of, any
          merger, sale of website assets, financing, or acquisition of all or a
          portion of our business to another company. </p>
         
          <h3>Vendors, Consultants and Other Third-Party Service Providers</h3>
          <p>
           We may share your data with third
          party vendors, service providers, contractors or agents who perform
          services for us or on our behalf and require access to such
          information to do that work. Examples include: payment processing,
          data analysis, email delivery, hosting services, customer service and
          marketing efforts. We may allow selected third parties to use tracking
          technology on the website, which will enable them to collect data about how
          you interact with the over time. This information may be used to,
          among other things, analyze and track data, determine the popularity
          of certain content and better understand online activity. Unless
          described in this Policy, we do not share, sell, rent or trade any of
          your information with third parties for their promotional purposes.</p>
          
          <h3>Affiliates</h3>
          <p>
           We may share your information with our affiliates, in
          which case we will require those affiliates to honor this privacy
          policy. Affiliates include our parent website and any subsidiaries,
          joint venture partners or other companies that we control or that are
          under common control with us.
          </p>
          <h3> Business Partners </h3>
          <p>
          We may share your
          information with our business partners to offer you certain products,
          services or promotions.
          
        </p>
        <h1 id="three">
          3. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </h1>
        <p>
          In Short: We may use cookies and other tracking technologies to
          collect and store your information. We may use cookies and similar
          tracking technologies (like web beacons and pixels) to access or store
          information. Specific information about how we use such technologies
          and how you can refuse certain cookies will be set our Cookie
          Policy, if we will use cookies you will be notify.
        </p>
        <h1 id="four">4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h1>
        <p>
          In Short: If you choose to register or log in to our website using a
          social media account ( for the moment you can only log in to our
          wbesite using email and password but we may add the possibility to
          register with social media), we may have access to certain information
          about you. Our offers you the ability to register and login using your
          third party social media account details (like your Facebook or
          Twitter logins). Where you choose to do this, we will receive certain
          profile information about you from your social media provider. The
          profile Information we receive may vary depending on the social media
          provider concerned, but will often include your name, e-mail address,
          friends list, profile picture as well as other information you choose
          to make public. We will use the information we receive only for the
          purposes that are described in this privacy policy or that are
          otherwise made clear to you on the website. Please note that we do not
          control, and are not responsible for, other uses of your personal
          information by your third party social media provider. We recommend
          that you review their privacy policy to understand how they collect,
          use and share your personal information, and how you can set your
          privacy preferences on their sites and apps.
        </p>
        <h1 id="five">5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h1>
        <p>
          In Short: We may transfer, store, and process your information in
          countries other than your own. We are using Firebase as a server provider. If you are accessing our from outside, please be aware
          that your information may be transferred to, stored, and processed by
          us in our facilities and by those third parties with whom we may share
          your personal information (see "WILL YOUR INFORMATION BE SHARED WITH
          ANYONE?" above), in and other countries. If you are a resident in the
          European Economic Area, then these countries may not have data
          protection or other laws as comprehensive as those in your country. We
          will however take all necessary measures to protect your personal
          information in accordance with this privacy policy and applicable law.
        </p>
        <h1 id="six">6. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h1>
        <p>
          In Short: We are not responsible for the safety of any information
          that you share with third-party providers who advertise, but are not
          affiliated with, our websites. The may contain advertisements from
          third parties that are not affiliated with us and which may link to
          other websites, online services or mobile applications. We cannot
          guarantee the safety and privacy of data you provide to any third
          parties. Any data collected by third parties is not covered by this
          privacy policy. We are not responsible for the content or privacy and
          security practices and policies of any third parties, including other
          websites, services or applications that may be linked to or from the website.
          You should review the policies of such third parties and contact them
          directly to respond to your questions.
        </p>
        <h1 id="seven">7. HOW LONG DO WE KEEP YOUR INFORMATION?</h1>
        <p>
          In Short: We keep your information for as long as necessary to fulfill
          the purposes outlined in this privacy policy unless otherwise required
          by law. We will only keep your personal information for as long as it
          is necessary for the purposes set out in this privacy policy, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting or other legal requirements). When we have no ongoing
          legitimate business need to process your personal information, we will
          either delete or anonymize it, or, if this is not possible (for
          example, because your personal information has been stored in backup
          archives), then we will securely store your personal information and
          isolate it from any further processing until deletion is possible.
        </p>
        <h1 id="eight">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h1>
        <p>
          In Short: We aim to protect your personal information through a system
          of organisational and technical security measures. We have implemented
          appropriate technical and organisational security measures designed to
          protect the security of any personal information we process. However,
          please also remember that we cannot guarantee that the internet itself
          is 100% secure. Although we will do our best to protect your personal
          information, transmission of personal information to and from our is
          at your own risk. You should only access the services within a secure
          environment.
        </p>
        <h1 id="nine">9. DO WE COLLECT INFORMATION FROM MINORS?</h1>
        <p>
          We do not knowingly solicit data from or market to children under 18
          years of age. By using the website, you represent that you are at least 18 or
          that you are the parent or guardian of such a minor and consent to
          such minor dependent’s use of the website. If we learn that personal
          information from users less than 18 years of age has been collected,
          we will deactivate the account and take reasonable measures to
          promptly delete such data from our records. If you become aware of any
          data we may have collected from children under age 18, please contact
          us at onlylearn.platfrom@gmail.com .
        </p>
        <h1 id="ten">10. WHAT ARE YOUR PRIVACY RIGHTS?</h1>
        <p>
          In Short: In some regions, such as the European Economic Area, you
          have rights that allow you greater access to and control over your
          personal information. You may review, change, or terminate your
          account at any time. In some regions (like the European Economic
          Area), you have certain rights under applicable data protection laws.
          These may include the right (i) to request access and obtain a copy of
          your personal information, (ii) to request rectification or erasure;
          (iii) to restrict the processing of your personal information; and
          (iv) if applicable, to data portability. In certain circumstances, you
          may also have the right to object to the processing of your personal
          information. To make such a request, please use the contact details
          provided below. We will consider and act upon any request in
          accordance with applicable data protection laws. If we are relying on
          your consent to process your personal information, you have the right
          to withdraw your consent at any time. Please note however that this
          will not affect the lawfulness of the processing before its
          withdrawal. If you are a resident in the European Economic Area and
          you believe we are unlawfully processing your personal information,
          you also have the right to complain to your local data protection
          supervisory authority. You can find their contact details here:
          http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html.
        </p>
        <h2>Account Information</h2>

        <p>
          If you would at any time like to review or change the information in
          your account or terminate your account, you can: Upon your request to
          terminate your account, we will deactivate or delete your account and
          information from our active databases. However, some information my be
          retained in our files to prevent fraud, troubleshoot problems, assist
          with any investigations, enforce our Terms of Use and/or comply with
          legal requirements. Or you can check the "Account" page where
          you can manage your account.
        </p>
        <h1 id="eleven">11. CONTROLS FOR DO-NOT-TRACK FEATURES</h1>
        <p>
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track ("DNT") feature or setting you can
          activate to signal your privacy preference not to have data about your
          online browsing activities monitored and collected. No uniform
          technology standard for recognizing and implementing DNT signals has
          been finalized. As such, we do not currently respond to DNT browser
          signals or any other mechanism that automatically communicates your
          choice not to be tracked online. If a standard for online tracking is
          adopted that we must follow in the future, we will inform you about
          that practice in a revised version of this Privacy Policy.
        </p>
        <h1 id="tweleve">
          12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
        </h1>
        <p>
          In Short: Yes, if you are a resident of California, you are granted
          specific rights regarding access to your personal information.
          California Civil Code Section 1798.83, also known as the "Shine The
          Light" law, permits our users who are California residents to request
          and obtain from us, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third
          parties for direct marketing purposes and the names and addresses of
          all third parties with which we shared personal information in the
          immediately preceding calendar year. If you are a California resident
          and would like to make such a request, please submit your request in
          writing to us using the contact information provided below. If you are
          under 18 years of age, reside in California, and have a registered
          account on the website , you have the right to request removal of unwanted
          data that you publicly post on the website. To request removal of such data,
          please contact us using the contact information provided below, and
          include the email address associated with your account and a statement
          that you reside in California. We will make sure the data is not
          publicly displayed on the website, but please be aware that the data may not
          be completely or comprehensively removed from all our systems.
        </p>
        <h1 id="thirthin">13. DO WE MAKE UPDATES TO THIS POLICY?</h1>
        <p>
          In Short: Yes, we will update this policy as necessary to stay
          compliant with relevant laws. We may update this privacy policy from
          time to time. The updated version will be indicated by an updated
          "Revised" date and the updated version will be effective as soon as it
          is accessible. If we make material changes to this privacy policy, we
          may notify you either by prominently posting a notice of such changes
          or by directly sending you a notification. We encourage you to review
          this privacy policy frequently to be informed of how we are protecting
          your information.
        </p>
        <h1 id="fourthin">14. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h1>
        <p>
          If you have questions or comments about this policy, you may email us
          at onlylearn.platfrom@gmail.com or send a message or call us at phone
          number: +40 749 612 885.
        </p>
        <h1>
          HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
        </h1>
        <p>
          Based on the applicable laws of your country, you may have the right
          to request access to the personal information we collect from you,
          change that information, or delete it in some circumstances. To
          request to review, update, or delete your personal information, please
          submit a request form on our email onlylearn.platfrom@gmail.com. We
          will respond to your request within 30 days.
        </p>
      </div>
    </>
  );
}

export default Privacy;
