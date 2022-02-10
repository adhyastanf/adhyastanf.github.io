import { DiJavascript1, DiHtml5, DiCss3Full} from"react-icons/di";


const About = () => {
  return (
    <div className="mt-28">
      <h1 className="text-6xl mb-12 ">ABOUT ME</h1>
      <section>
        <p className="text-black/25 mb-12">
          Hi! I'm Adhyasta Naufal Faadhilah. I'm a college student at Bandung,Indonesia
          <br /> and basketball enthusiast. I don't have much experience in making a website
          <br />
          <span className="text-black/50">adhyasta.nf@gmail.com</span>
        </p>

        <div className="">
          <p className="mb-4">My Skill</p>
          <div className="flex">
            <div className="w-16 h-16 bg-white-500 inline-block mr-6 p-3 shadow">
              <span className="flex items-center justify-center bg-black w-full h-full box-border rounded-full">
                <DiJavascript1 className="text-white" size={25} />
              </span>
            </div>
            <div className="w-16 h-16 bg-white-500 inline-block mr-6 p-3 shadow">
              <span className="flex items-center justify-center bg-black w-full h-full box-border rounded-full">
                <DiHtml5 className="text-white" size={25} />
              </span>
            </div>
            <div className="w-16 h-16 bg-white-500 inline-block mr-6 p-3 shadow">
              <span className="flex items-center justify-center bg-black w-full h-full box-border rounded-full">
                <DiCss3Full className="text-white" size={25} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
