import "./ContactForm.css";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";

import { HiOutlineMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    <section className="containerr">
      <div className="contact_form">
        <div className="top_button">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize={"24px"} />}
          />
          <Button text="VIA CALL" icon={<IoCall fontSize={"24px"} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiOutlineMail fontSize={"24px"} />}
        />
      </div>
      <div className="contactImage"></div>
    </section>
  );
};

export default ContactForm;
