import "./App.css";
import FrontB1 from "./Components/FrontBox1/FrontB1";
import Footer from "./Components/Footer/Footer";
import GeneralInfoF3 from "./Components/GeneralInfoFront3/GeneralInfoF3";
import SuccessStoriesF4 from "./Components/SuccessStoriesF4/SuccessStoriesF4";
import BlogFP from "./Components/BlogFP/BlogFP";
import InvestFundFP from "./Components/InvestFundFP/InvestFundFP";

function App() {
  return (
    <div>
      <FrontB1 />
      <GeneralInfoF3 />
      <SuccessStoriesF4 />
      <BlogFP />
      <InvestFundFP />
      <Footer />
    </div>
  );
}

export default App;
