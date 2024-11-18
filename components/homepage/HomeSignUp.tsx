export default function HomeSignUp() {
  return (
    <section className="h-[300px] w-full flex flex-col justify-center items-center bg-[#f0f0f0]">
      <form className="flex flex-col justify-center items-center">
        <h2 className="text-3xl text-gray-700 mb-5">
          Join the AVITA Community
        </h2>
        <p className="text-lg text-gray-500 mb-5">
          Receive AVITA's latest news, promotions and offers
        </p>
        <a className="" href="/register?">
          <div
            className="flex justify-center items-center
              bg-purple-800 hover:bg-gray-700 text-white w-80 h-10 p-5"
          >
            Sign Up Now
            {/* <input type="hidden" id="alertMsg" value="Thank you for your subscribing!">  */}
          </div>
        </a>
      </form>
    </section>
  );
}
