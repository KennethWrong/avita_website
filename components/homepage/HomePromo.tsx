export default function HomePromo() {
  return (
    // TODO: Don't hardcode /hk
    <section className="w-screen   flex flex-row">
      <div className="basis-1/4">
        <a href="/hk/product/liber/spec">
          <img src="/images/home/promo-01-en.jpg" />
        </a>
      </div>

      <div className="basis-1/4">
        <a href="/hk/news">
          <img src="/images/home/promo-02-en.jpg" />
        </a>
      </div>

      <div className="basis-1/4">
        <a href="/aboutus">
          <img src="/images/home/promo-03-en.jpg" />
        </a>
      </div>

      <div className="basis-1/4">
        <a href="/hk/support">
          <img src="/images/home/promo-04-en.jpg" />
        </a>
      </div>
    </section>
  );
}
