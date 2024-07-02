import { CarouselCustom } from "../components/Carousel";
import { NavbarCustom } from "../components/Navbar";
import image from "../assets/photo3.jpg";
import image2 from "../assets/photo5.jpg";
import manicureImage from "../assets/manicure.jpg";
import haircutsImage from "../assets/haircuts.jpg";
import facialImage from "../assets/facial.jpg";
import blurOrange from "../assets/blur-orange-2.svg";
import adminImage2 from "../assets/sekar.jpg";
import adminImage from "../assets/thomas.jpg";
import "@fontsource/poppins"; // Defaults to weight 400
import CardCustom from "../components/Card";
import { FooterCustom } from "../components/Footer";
import { ProfileCard } from "../components/ProfileCard";

function Header() {
  return (
    <>
      <NavbarCustom route={"/"} />
      <div className="absolute z-10 h-screen w-screen bg-gradient-to-t from-cashmere-300/30 to-transparent">
        <div className="flex h-full flex-col items-start justify-center p-8 sm:items-center sm:justify-end sm:p-32">
          <h1 className=" text-2xl font-bold text-white sm:text-5xl">
            Welcome to SEA Salon
          </h1>
          <p className="text-2xl text-white">
            Your one stop salon for all your beauty needs
          </p>
        </div>
      </div>
      <CarouselCustom />
    </>
  );
}

function Content() {
  return (
    <>
      <div className="z-20">
        {/* Slogan 1 */}
        <div className="grid items-center justify-center gap-6 sm:grid-cols-2">
          {/* Slogan 1 Text */}
          <div className="text-center text-blue-dianne-900 sm:mr-10 sm:text-end">
            <h2 className="text-lg font-bold sm:text-2xl">SEA Salon</h2>
            <p className="text-3xl font-extrabold leading-tight sm:text-5xl">
              The Place Where{" "}
              <span className="bg-gradient-to-br from-blue-dianne-600 to-cashmere-200 bg-clip-text text-transparent">
                Beauty
              </span>{" "}
              and
              <span className="bg-gradient-to-br from-blue-dianne-600 to-cashmere-200 bg-clip-text text-transparent">
                {" "}
                Elegance
              </span>{" "}
              Redefined
            </p>
          </div>
          {/* Image Slogan 1 */}
          <div>
            <img src={image} className="h-[500px] w-full object-cover" />
          </div>
        </div>
        {/* High Ruler */}
        <div className="mb-4 mt-4 h-1 bg-cashmere-300"></div>
        {/* Slogan2 */}
        <div className="grid items-center justify-center gap-6 sm:grid-cols-2">
          {/* Image Slogan 2 */}
          <div>
            <img src={image2} className=" h-[500px] w-full object-cover" />
          </div>
          {/* Text Slogan 2 */}
          <div className="text-center text-blue-dianne-900 sm:mr-10 sm:text-start">
            <p className="text-3xl font-extrabold leading-tight sm:text-5xl">
              Unlock Your Radiance with{" "}
              <span className="bg-gradient-to-br from-blue-dianne-600 to-cashmere-200 bg-clip-text text-transparent">
                Expert Care
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="z-20 mt-24 flex flex-col items-center justify-center gap-10">
        <div className="text-center">
          <h3 className="text-3xl font-bold sm:text-5xl">Our Services</h3>
          <p className="text-sm sm:text-lg">
            We offer a wide range of services to cater to all your beauty needs
          </p>
        </div>
        <div className="grid justify-between gap-10 sm:grid-cols-3">
          <CardCustom
            imgSrc={haircutsImage}
            imgAlt="Card Image"
            title="Haircuts and Styling"
            description="Get the perfect haircut that suits your style"
          />
          <CardCustom
            imgSrc={manicureImage}
            imgAlt="Manicure and Pedicure"
            title="Manicure and Pedicure"
            description="Get the perfect haircut that suits your style"
          />
          <CardCustom
            imgSrc={facialImage}
            imgAlt="Facial Treatments"
            title="Facial Treatments"
            description="Get the perfect haircut that suits your style"
          />
        </div>
      </div>

      {/* Contact */}
      <div className="z-20 mt-24 flex flex-col items-center justify-center gap-10">
        <div className="text-center">
          <h3 className="text-2xl font-bold sm:text-5xl">Contact Us</h3>
          <p className="text-sm sm:text-lg">
            We offer a wide range of services to cater to all your beauty needs
          </p>
        </div>
        <div className="grid justify-between gap-10 sm:grid-cols-2">
          <ProfileCard
            imgSrc={adminImage}
            imgAlt="Card Image"
            username="Thomas"
            phoneNumber="08123456789"
            role="Admin 1"
          />
          <ProfileCard
            imgSrc={adminImage2}
            imgAlt="Card Image"
            username="Sekar"
            phoneNumber="08164829372"
            role="Admin 2"
          />
        </div>
      </div>
    </>
  );
}

export const HomePage = () => {
  if (localStorage.getItem("user") == null) {
  } else if (
    JSON.parse(localStorage.getItem("user") as string).role !== "Customer"
  ) {
    window.location.href = "/admin";
  }

  return (
    <div className="font-poppins">
      <Header />
      <div className="relative flex h-max flex-col bg-cashmere-50 object-cover px-4 py-10 sm:p-14 lg:p-32">
        <img src={blurOrange} alt="" className="absolute left-0 z-10 w-3/4" />
        <Content />
      </div>
      <FooterCustom />
    </div>
  );
};
