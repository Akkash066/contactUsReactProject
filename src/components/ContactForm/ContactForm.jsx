import "./ContactForm.css";
import Button from "../Button/Button";
// react icons 
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
{/* form */}
        <form action="#">
          <div className="form_control">
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className="form_control">
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>
          <div className="form_control">
            <label htmlFor="email">Textarea</label>
            <textarea name="text" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="Submit" />
          </div>
        </form>
      </div>
{/* 24/7 contact image */}
      <div className="contactImage">
        <img src="/images/Service 24_7-pana 1.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
