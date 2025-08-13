import { NavbarDemo } from "@/layouts/navbar";

export default function Dashboard() {
  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{
        background: "url(image/bg_dashboard.jpg) no-repeat",
        backgroundSize: "auto",
        opacity: "0.9",
      }}
    >
      <NavbarDemo>
        <div className="container mx-auto pt-10">
          <div className="">
            <div className="absolute bottom-[-37rem] hidden md:block">
              <img
                src="image/hero-1.png"
                alt=""
                className="transform -scale-x-100 transition duration-300 ease-in-out hover:scale-105"
                width={300}
                height={300}
              />
            </div>
            {/* <div className="h-[48rem] w-[67rem]" style={{ background: "url(image/bg_dashboard2.png)", backgroundSize: "auto" }}> */}
            <div className="">
              <h1 className="mb-4 text-center text-3xl font-bold">
                Pesona Digital
              </h1>
            </div>
          </div>
        </div>
      </NavbarDemo>
      <footer>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="w-full bg-[#336C9A] border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4"></div>
              <h5 className="mb-1 text-xl pl-10 font-medium text-white dark:text-white">
                Social Media
              </h5>
            <div className="flex px-20">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div className="mt-3">
                  <a
                    href="#"
                    className="flex items-center text-white hover:underline dark:text-gray-400 gap-2"
                  >
                    <img src="image/youtube.png" alt="" width={40} height={40} />
                    <img src="image/facebook.png" alt="" width={40} height={40} />
                    <img src="image/instagram.png" alt="" width={40} height={40} />
                    <img src="image/tiktok.png" alt="" width={40} height={40} />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div className="mt-3">
                  <a
                    href="#"
                    className="flex items-center text-white hover:underline dark:text-gray-400 gap-2"
                  >
                    <img src="image/komdigi.png" alt="" width={70} height={70} />
                    <img src="image/bssn.png" alt="" width={70} height={70} />
                    <img src="image/logo_kominfo.png" alt="" width={70} height={70} />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-sm text-white dark:text-gray-400 pl-10">Copyright  2025 Dinas Komunikasi Informasi Persandian dan Statistika</p>
          </div>

          <div className="w-full bg-[#437DAD] border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-2"></div>
            <div className="flex flex-row items-center justify-evenly pb-10">
              <b className="mb-1 text-xl font-medium text-white dark:text-white">
                Help
              </b>
              <b className="mb-1 text-xl font-medium text-white dark:text-white">
                DISKOMINFO
              </b>
            </div>

            <div className="text-white">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 px-5 text-center">
                <span>Suport</span>
                <span>About</span>
                <span>Terms and Condition</span>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 px-5 text-center">
                <span>FAQs</span>
                <span>Contac Us</span>
                <span>Privacy Policy</span>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 px-5 pb-3 text-center">
                <span>License</span>
                <span>What's New</span>
                <span>Cookies Setting</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
