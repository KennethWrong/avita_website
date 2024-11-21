export default function HomePromo() {
  return (
    // TODO: Don't hardcode /hk
    // maybe also do onclick or Link instead

    <section
      className="w-screen flex flex-col md:grid md:grid-cols-2 
      lg:flex lg:flex-row justify-center items-center"
    >
      <div className="basis-1/4">
        <a href="/hk/product/liber/spec">
          <img
            src="/images/home/promo-01-en.jpg"
            alt="promo-01-en"
            className="w-full"
          />
        </a>
      </div>

      <div className="basis-1/4">
        <a href="/hk/news">
          <img
            src="/images/home/promo-02-en.jpg"
            alt="promo-02-en"
            className="w-full"
          />
        </a>
      </div>

      <div className="basis-1/4">
        <a href="/aboutus">
          <img
            src="/images/home/promo-03-en.jpg"
            alt="promo-03-en"
            className="w-full"
          />
        </a>
      </div>

      <div className="basis-1/4">
        <a href="/hk/support">
          <img
            src="/images/home/promo-04-en.jpg"
            alt="promo-04-en"
            className="w-full"
          />
        </a>
      </div>
    </section>
  );
}
