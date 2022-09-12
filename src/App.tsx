import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <Product />
      </main>
    </div>
  );
}

export default App;
