import "./css/App.css";
import Header from "./layout/Header.jsx";
import ImageSlider from "./container/ImageSlider";
import Products from "./layout/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider />
      <h3 />
      <hr />
      <div className="contents">
        <div className="maxwidth">
          <p className="prodsText">Products</p>
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;
