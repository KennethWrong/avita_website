import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* product-liber-banner */}
      <section>
        <div className="w-screen h-auto top-0 left-0 relative">
          <img
            className="w-full"
            src="/images/admiror/banner_admiror_15_e.jpg"
            alt="Admiror Banner"
          />
        </div>
      </section>

      {/* product-admiror-computer */}
      <section className="" style={{ backgroundColor: "#000" }}>
        <div className="banner-block">
          <div className="container">
            <div>
              <div className="h1">#YouCanBe Expressing Yourself</div>
              <div className="space60 hidden-sm-down"></div>
              <div className="banner-para ls-0 col-sm-offset-2 col-sm-8">
                Be who you are and show your individuality. The choice is yours.
                #YouCanbe{" "}
              </div>
              <div className="space30"></div>
              <div className="Fadein" style={{ opacity: 0.597166 }}>
                <img src="/images/admiror/pic_AMIROR01.png" />
              </div>
              <div className="banner-para ls-0 col-sm-offset-2 col-sm-8">
                The all-new AVITA ADMIROR takes you on a journey of
                self-discovery. Shattering the norms and constraints of
                conventional laptops, the ADMIROR’s intricate designs and
                eye-catching colours are yours to embrace, because you deserve
                to be extraordinary!
              </div>
              <div className="space60 hidden-sm-down"></div>
              <div className="banner-data text-center col-lg-12">
                <img
                  className="hidden-sm-down"
                  src="/images/admiror/pic_feature01_15.png"
                />
                <img
                  className="hidden-md-up"
                  src="/images/admiror/pic_feature01_15_mob.png"
                />
              </div>
              <div className="space60 hidden-sm-down"></div>
              <div className="space60 hidden-sm-down"></div>
              <div className="h1">AVITA ADMIROR brings you</div>

              <section className="banner-anchor">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <a href="#artistic_design">
                        <img
                          className="first"
                          src="/images/admiror/btn_artistic_1.png"
                        />
                        <img
                          className="hover"
                          src="/images/admiror/btn_artistic_2.png"
                        />
                      </a>
                    </div>

                    <div className="col-md-4">
                      <a href="#usage_experience">
                        <img
                          className="first"
                          src="/images/admiror/btn_pride_1.png"
                        />
                        <img
                          className="hover"
                          src="/images/admiror/btn_pride_2.png"
                        />
                      </a>
                    </div>

                    <div className="col-md-4">
                      <a href="#outstanding">
                        <img
                          className="first"
                          src="/images/admiror/btn_outstanding_1.png"
                        />
                        <img
                          className="hover"
                          src="/images/admiror/btn_outstanding_2.png"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <div className="space60"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
