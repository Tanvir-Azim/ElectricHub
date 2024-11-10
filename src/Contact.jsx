import React from 'react';
import { Button } from './Button';

function Contact() {
  return (
    <>
      <section className="py-10">
        <h1 className="text-center py-2 text-sm">Feel Free To Contact Us</h1>
        <div className="main h-[90vh]">
          <div className="sub">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2168.307483709551!2d88.76917796242219!3d23.937657854708114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f94d6361bb3d55%3A0x936b8f3a126738a4!2sShahebnagor%20Government%20Primary%20School!5e0!3m2!1sen!2sbd!4v1709795905177!5m2!1sen!2sbd"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="fromContainer w-[80%] mt-20 h-[290px] mx-auto  xs:w-full sm:w-full md:w-[80%] lg:w-[80%]">
            <form
              action="https://formspree.io/f/mgegzodp"
              method="POST"
              className="w-4/5 h-[250px] mx-auto flex flex-col"
            >
              <input
                type="text"
                name="user name"
                placeholder="User Name"
                autoComplete="off"
                required
                className="inp w-full h-[30px] mb-2 border border-[#D0D8D0] p-2 "
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
                className="inp w-full h-[30px] mb-2 border border-[#D0D8D0] p-2"
              />
              <textarea
                name="message"
                cols="30"
                rows="6"
                autoComplete="off"
                required
                className="w-full h-[80px] mb-2 border border-[#D0D8D0] p-2"
              />
              <Button>
                <input
                  type="submit"
                  value="Send"
                  className="btn w-full bg-indigo-600 border-none text-white uppercase p-2 cursor-pointer"
                />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
