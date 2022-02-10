import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mt-40">
      <h1 className="text-6xl mb-12 ">CONTACT</h1>
      <section>
        <p className="text-black/25 mb-12">
          Interested in working together <br /> Great! Get in touch, I`m friendly
          <br />
          <span className="text-black/50">adhyasta.nf@gmail.com</span>
        </p>

        <div className="">
          <p className="mb-4">Or the fancy way</p>
          <div className="flex">
            <a href="https://www.instagram.com/adhyasta.nf/" target={"_blank"} rel="noreferrer">
              <div className="w-16 h-16 bg-white-500 inline-block mr-6 p-3 shadow">
                <span className="flex items-center justify-center bg-black w-full h-full box-border rounded-full">
                  <FaInstagram className="text-white" size={25} />
                </span>
              </div>
            </a>
            <a href="https://twitter.com/MyCendolDawet" target={"_blank"} rel="noreferrer">
              <div className="w-16 h-16 bg-white-500 inline-block mr-6 p-3 shadow">
                <span className="flex items-center justify-center bg-black w-full h-full box-border rounded-full">
                  <FaTwitter className="text-white" size={25} />
                </span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/adhyasta-naufal-faadhilah-004091210/" target={"_blank"} rel="noreferrer">
              <div className="w-16 h-16 bg-white-500 inline-block mr-6 p-3 shadow">
                <span className="flex items-center justify-center bg-black w-full h-full box-border rounded-full">
                  <FaLinkedinIn className="text-white" size={25} />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
