const Aboutus: React.FC = () => {
  return (
    <main className="flex lg:flex-row flex-col bg-gray-200">
      <div className="flex lg:w-2/3 w-full items-center justify-center pl-8 pr-8 lg:pr-0 mb-20 order-2 lg:order-1">
        <div className="flex flex-col lg:full text-sm leading-relaxed lg:w-4/6 w-full mt-20 text-gray-600">
          <h1 className=" text-4xl mb-4">About AVITA</h1>
          <p>
            AVITA is a consumer lifestyle brand originally founded in the United
            States. In 2017, the brand expanded its presence to Asia,
            introducing AVITA products to the market and actively promoting the
            brand to international consumers. At AVITA we believe in the wonder
            and power of the individual. We make premium technology products
            that not only fit your lifestyle but are representations of you.
          </p>
          <br />
          <p>
            The AVITA product series which ranges from PC, smart home and IoT
            devices has come to realization based on three core values: Liberty,
            Diversity and Individualism for an exceptional and highly personal
            experience to the new generation of tech users. As a team we truly
            live by our ethos to ‘LIVE IT UP’ - this is part of our company DNA
            and what makes our products like no other.
          </p>
          <br />
          <p>
            Your ideas, passions, personal style and what makes you uniquely you
            inspires us. And we believe that your choice in technology shouldn't
            define you, it should reflect you.
          </p>
          <br />
          <p>
            In <span className="font-bold">2021</span>, we got the Intel
            Titanium Partner Award, the top tier of the Intel’s alliance
            membership, in recognition of our extraordinary growth in AVITA
            business in Asian regions. Same year, AVITA LIBER V, has been
            awarded a highly-coveted international design award – the
            distinctive “Red Dot Award: Product Design 2021” which stands for
            superior design quality.
          </p>
          <br />
          <div className="flex flex-row mb-5">
            <img
              src="/images/aboutus/intel_Titanium_partner.jpg" // Replace this with the path to your image
              alt="People sitting in a line laughing"
              className=" w-32 h-auto"
            />
            <img
              src="/images/aboutus/reddot_winner_2021.png" // Replace this with the path to your image
              alt="People sitting in a line laughing"
              className="w-56 h-auto"
            />
          </div>
          <p>
            <span className="font-bold">By 21st July 2022 </span>, AVITA
            Technologies International Company Limited (hereinafter referred to
            as ‘AVITA Technologies’) was established, focuses on bringing
            experiential technical solutions to modern-day corporate leaders. We
            believe in bringing excitement and creating emotional values to be
            better, and gradually we established our unique product positioning
            of ‘Tech Fashion’, i.e. ‘Technology’ + ‘Fashion’, which brought us
            multiple international awards and renowned recognition. With the
            motto "Do What the Giants Can’t", inspiring the team in AVITA
            Technologies that goes above and beyond to build compatible
            eco-system for better living and more reliable digital experience
            with the integration of the latest technologies.
          </p>
          <br />
          <p>
            We elaborated and act on our inspiration leverage our 3 company core
            values. We are committed in providing positive impacts and vibes
            with fruitful outcomes for our various stakeholders to evolve with
            new technology available nowadays.
          </p>
          <br />
          <p>
            <span className="font-bold">As of Nov 2022 </span>, Jasmy
            Incorporated from Japan has become the strategic investor of AVITA
            Technologies, with the vision of transforming the company into an
            Innovative IT & IoT Solution and FinTech Service Provider under the
            trend of Web3, Blockchain technology and cryptocurrency application.
            As time goes by, we no longer define and limit ourselves to be just
            a service provider and computer manufacturer. We believe in
            positioning ourselves as industry transformer, leveraging the
            benefits of both human and artificial intelligence, to develop
            Secure IoT device and solution, as well as FinTech and
            cryptocurrency application. All these are established riding on the
            idea of Data Democracy; it is our strong belief in the ownership and
            autonomy of personal data, which adds values to our daily life.
          </p>
          <br />
          <p>
            ‘DIVERSITY’ is the key of AVITA’s previous success, leveraging on
            the rise of Web3 and Blockchain technology, we embrace the
            revolution and contribute to future generations. At last but not
            least, AVITA Technologies will continue to focus on the development
            of technologies and products that enable people to work and live
            better in a more connected virtual world, so as to achieve the
            sustainable growth of the company and bring meaningful values to
            consumers.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-2/3 order-1 lg:order-2">
        <img
          src="/images/aboutus/aboutus-min.png" // Replace this with the path to your image
          alt="People sitting in a line laughing"
          className="w-full lg:object-none"
        />
      </div>
    </main>
  );
};

export default Aboutus;
