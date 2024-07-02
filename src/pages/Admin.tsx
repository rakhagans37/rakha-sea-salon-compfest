import { useState } from "react";
import { ModalCustom } from "../components/Modal";
import { NavbarCustom } from "../components/Navbar";
import { InputText } from "../components/InputText";
import { ButtonCustom } from "../components/Button";
import { FooterCustom } from "../components/Footer";
import { InputNumber } from "../components/InputNumber";
import { Service } from "../models/Services";
import { generateId } from "../service/generateId";
import { createService } from "../service/database";

export const AdminPage = () => {
  const [serviceName, setServiceName] = useState("");
  const [duration, setDuration] = useState(0);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await getReviews();
  //       setDataReview(data);
  //     };

  //     fetchData();
  //   }, []);

    const submitService = () => {
        if (serviceName.trim() === "" || duration < 1) return;
    
        const newService = new Service(generateId(), serviceName, duration);
        createService(newService).then(() => {
          // Refresh the page
          window.location.reload();
        });
    };

  const modalBody = () => {
    return (
      <div className="text-center">
        <h3 className="mb-5 flex flex-row text-lg font-normal text-gray-500 dark:text-gray-400">
          <form
            action="#"
            className="flex w-full flex-col justify-start gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              submitService();
            }}
          >
            <InputText
              placeholder="Ex: Haircuts and Styling"
              id="serviceName"
              textState={serviceName}
              setTextState={setServiceName}
              label="Service Name"
              errorTerm={serviceName.trim() === ""}
              errorMessage="Please enter new service name."
            />
            <InputNumber
              id="duration"
              placeholder="Duration in minutes"
              textState={duration}
              setTextState={setDuration}
              errorTerm={duration < 1}
              errorMessage="Please enter valid duration in minutes."
              label="Duration"
            />
            <ButtonCustom text="Confirm" type="submit" />
          </form>
        </h3>
      </div>
    );
  };

  return (
    <div className="font-poppins">
        <NavbarCustom route="/admin" scrollable={false} />
      <div className="relative flex h-max min-h-screen flex-col gap-20 bg-cashmere-50 object-cover px-4 py-10 sm:p-14 lg:p-32">
        <div className="z-50 flex w-full flex-col items-center justify-center">
          <div className="text-center text-blue-dianne-900 sm:mr-10">
            <p className="text-3xl font-extrabold leading-tight sm:text-5xl">
              Admin{" "}
              <span className="bg-gradient-to-br from-blue-dianne-600 to-cashmere-200 bg-clip-text text-transparent">
                Panel
              </span>{" "}
            </p>
          </div>
          <ModalCustom
            body={modalBody()}
            text="Add New Service"
            buttonCustomTheme={{
              base: "w-40 h-12 mt-2 bg-cashmere-300 bg-gradient-to-br from-cashmere-300 to-cashmere-500 hover:from-cashmere-500 hover:to-cashmere-300",
            }}
          />
        </div>
      </div>
      <div className="z-50">
        <FooterCustom />
      </div>
    </div>
  );
};
