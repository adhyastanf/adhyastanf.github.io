import Header from "./Header";
import Footer from "./Footer";

const Main = ({children}) => {
  return (
    <div className="h-full relative ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
