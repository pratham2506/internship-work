import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const index = () => {
  return (
    <>
      <div
        className="error-page-wrapper "
        style={{
          backgroundImage: `url(/images/404.jpg)`,
        }}
        data-aos="fade"
      >
        <div className="content">
          <div className="logo">
            <Link href="/">
              <Image
                width={63}
                height={50}
                src="/images/png"
                alt="brand"
              />
            </Link>
          </div>
          {/* End logo */}

          <h1>404!</h1>
          <p>The page you are looking for could not be found.</p>

          <Link className="theme-btn btn-style-three call-modal" href="/">
            BACK TO HOME
          </Link>
        </div>
        {/* End .content */}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
