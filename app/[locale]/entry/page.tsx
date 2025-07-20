import Link from "next/link";

export default async function Page() {
  const sectionStyle = "flex flex-col w-4/6 mt-16";
  const headerStyle = "font-bold text-xl text-gray-700 mb-1";
  const linkHover = "hover:underline";
  const linkHoverDisabled = "text-gray-400";

  const redirectLink = (desiredLocale: string) => {
    const baseUrl = "https://avita.com";
    if (desiredLocale === "hk") {
      return `${baseUrl}/hk`;
    } else if (desiredLocale === "tw") {
      return `${baseUrl}/tw`;
    } else {
      return "/";
    }
  };

  return (
    <div className="bg-[url('/images/entry/global_map_bg.png')] bg-cover min-h-[70vh] flex flex-col items-center w-full">
      <h1 className=" text-3xl text-gray-500">CHOOSE YOUR LOCATION</h1>
      <div className="min-h-[60vh] items-center justify-center w-full flex flex-col">
        <div className={`${sectionStyle}`}>
          <h1 className={`${headerStyle}`}>East Asia</h1>
          <div className="flex flex-col lg:flex-row gap-x-10">
            <p>
              <Link href={redirectLink("hk")} className={`${linkHover}`}>
                Hong Kong
              </Link>
              /{" "}
              <Link href={redirectLink("hk")} className={`${linkHover}`}>
                香港
              </Link>
            </p>
            <p>
              <Link href={redirectLink("tw")} className={`${linkHover}`}>
                Taiwan 台灣
              </Link>
            </p>
          </div>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${headerStyle}`}>Europe and America</h1>
          <div className="flex flex-col lg:flex-row gap-x-10">
            <p className={`${linkHoverDisabled}`}>America</p>
          </div>
        </div>
        <div className={`${sectionStyle}`}>
          <h1 className={`${headerStyle}`}>Southeast Asia</h1>
          <div className="flex flex-col lg:flex-row gap-x-10">
            <p className={`${linkHoverDisabled}`}>Vietnam / Tiếng Việt</p>
            <p>
              <Link
                href="https://www.avitathailand.com/"
                className={`${linkHover}`}
              >
                Thailand
              </Link>
              /{" "}
              <Link
                href="https://www.avitathailand.com/"
                className={`${linkHover}`}
              >
                ประเทศไทย
              </Link>
            </p>
            <p className={`${linkHoverDisabled}`}>Malaysia</p>
            <p className={`${linkHoverDisabled}`}>Philippines</p>
            <p className={`${linkHoverDisabled}`}>Singapore</p>
            <p className={`${linkHoverDisabled}`}>
              Indonesia / Bahasa Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
