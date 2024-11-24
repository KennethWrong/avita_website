const Page: React.FC = () => {
  return (
    <main className="bg-gray-100 min-h-[40vh] py-10">
      <div className="flex flex-col items-center">
        <h1 className="w-3/4 text-3xl my-8">Contact Us</h1>
        <div className="flex flex-col lg:flex-row w-3/4">
          <div className=" w-full">
            <p className="font-bold">Sales Enquiry (Hong Kong & Macau)</p>
            <p>
              <span className="font-bold">Email:</span> hksales@avita-tech.com
            </p>
          </div>
          <div className="w-full mt-5 lg:mt-0">
            <p className="font-bold">Technical Support (Hong Kong & Macau)</p>
            <p>
              <span className="font-bold">Email:</span>{" "}
              hk_support@avita-tech.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
