import { useState } from "react";
import { InputSelect } from "../components/InputSelect";
import { InputText } from "../components/InputText";
import { NavbarCustom } from "../components/Navbar";
import { InputNumber } from "../components/InputNumber";
import { InputDate } from "../components/InputDate";
import { FooterCustom } from "../components/Footer";
import { Timepicker } from "../components/Timepicker";
import { ButtonCustom } from "../components/Button";
import { createReservation } from "../service/database";
import { Reservation } from "../models/Reservation";

export const ReservationPage = () => {
  const [username, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("Haircuts and Styling");
  const [date, setDate] = useState(new Date().getTime());
  const [time, setTime] = useState("09:00");

  const submitReservation = () => {
    if (
      username.trim() === "" ||
      phoneNumber.trim() === "" ||
      time < "09:00" ||
      time > "21:00" ||
      date < new Date().getTime()
    )
      return;

    var dateTime = date + parseInt(time.split(":")[0]) * 60 * 60 * 1000 + parseInt(time.split(":")[1]) * 60 * 1000;
    createReservation(new Reservation(username, dateTime, service)).then(() => {
      // Refresh the page
      window.location.reload();
    });
  };

  return (
    <div className="font-poppins">
      <NavbarCustom route="/reservation" scrollable={false} />
      <div className="relative flex h-max min-h-screen flex-col gap-20 bg-cashmere-50 object-cover px-4 py-10 sm:p-14 lg:px-96">
        <div className="text-center text-blue-dianne-900 sm:mr-10">
          <p className="text-3xl font-extrabold leading-tight sm:text-5xl">
            Fill This Form Below{" "}
            <span className="bg-gradient-to-br from-blue-dianne-600 to-cashmere-200 bg-clip-text text-transparent">
              To Reserve
            </span>{" "}
          </p>
        </div>
        <form
          action="submit"
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            submitReservation();
          }}
        >
          <InputText
            id="username"
            placeholder="Your name, ex: John Doe"
            textState={username}
            setTextState={setName}
            errorTerm={username.trim() === ""}
            errorMessage="Please enter your name."
            label="Your Name"
          />
          <InputNumber
            id="phone"
            placeholder="Your phone number, ex: 081234567890"
            textState={phoneNumber}
            setTextState={setPhoneNumber}
            errorTerm={phoneNumber.trim() === ""}
            errorMessage="Please enter your phone number."
            label="Your Phone Number"
          />
          <InputSelect
            id="service"
            label="Choose our service you want to"
            option={[
              "Haircuts and Styling",
              "Manicure and Pedicure",
              "Facial Treatments",
            ]}
            setService={setService}
          />
          <div className="grid grid-cols-2 gap-5">
            <InputDate id="date-reserve" setDateState={setDate} />
            <Timepicker
              timeState={time}
              setTimeState={setTime}
              errorTerm={
                time < "09:00" || time >= "21:00" || date < new Date().getTime()
              }
              errorMessage={
                time < "09:00" || time >= "21:00"
                  ? "Please choose the time between 09:00 and 20:00."
                  : "You can't choose the past time."
              }
            />
          </div>
          <ButtonCustom text="Reserve" type="submit" />
        </form>
      </div>
      <FooterCustom />
    </div>
  );
};
