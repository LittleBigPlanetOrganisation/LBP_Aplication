import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Page({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
