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
      <NavbarCustom />
      <div className="absolute z-10 h-screen w-screen bg-gradient-to-t from-cashmere-300/30 to-transparent">
        <div className="flex h-full flex-col items-start sm:items-center justify-center sm:justify-end p-8 sm:p-32">
          <h1 className=" text-2xl sm:text-5xl font-bold text-white">
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
        <div className="grid gap-6 sm:grid-cols-2 items-center justify-center">
          {/* Slogan 1 Text */}
          <div className="sm:mr-10 text-center sm:text-end text-blue-dianne-900">
            <h2 className="text-lg sm:text-2xl font-bold">SEA Salon</h2>
            <p className="text-3xl sm:text-5xl font-extrabold leading-tight">
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
        <div className="grid gap-6 sm:grid-cols-2 items-center justify-center">
          {/* Image Slogan 2 */}
          <div>
            <img src={image2} className=" h-[500px] w-full object-cover" />
          </div>
          {/* Text Slogan 2 */}
          <div className="sm:mr-10 text-center sm:text-start text-blue-dianne-900">
            <p className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Unlock Your Radiance with{" "}
              <span className="bg-gradient-to-br from-blue-dianne-600 to-cashmere-200 bg-clip-text text-transparent">
                Expert Care
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="mt-24 flex flex-col items-center justify-center z-20 gap-10">
        <div className="text-center">
          <h3 className="text-3xl sm:text-5xl font-bold">Our Services</h3>
          <p className="text-sm sm:text-lg">
            We offer a wide range of services to cater to all your beauty needs
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-10 justify-between">
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
      <div className="mt-24 flex flex-col items-center justify-center z-20 gap-10">
        <div className="text-center">
          <h3 className="text-2xl sm:text-5xl font-bold">Contact Us</h3>
          <p className="text-sm sm:text-lg">
            We offer a wide range of services to cater to all your beauty needs
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-10 justify-between">
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
            role="Admin 2" />
        </div>
      </div>
    </>
  );
}

function Home() {
  return (
    <div className="font-poppins">
      <Header />
      <div className="flex h-max flex-col bg-cashmere-50 object-cover py-10 px-4 sm:p-14 lg:p-32 relative">
        <img src={blurOrange} alt="" className="absolute left-0 z-10"/>
        <Content />
      </div>
      <FooterCustom />
    </div>
  );
}

export default Home;
