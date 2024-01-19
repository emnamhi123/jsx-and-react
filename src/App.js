import "./App.css";
import Product from "./components/Product";
import Price from "./components/Price";
import Name from "./components/Name";
import Description from "./components/Description";
import Image from "./components/Image";
import Carte from "./components/Carte";
import Message from "./components/Message";
import ImageH from "./components/ImageH";
import Greeting from "./components/Greeting";

function App() {
  console.log(Product);

  return (
    <div className="App">
      <Name pcName={Product.name} />
      <Image pcImage={Product.imageUrl} />
      <Description pcDescription={Product.description} />
      <Price pcPrice={Product.price} />
      <Message />
      <ImageH helloImage={Greeting.imageH} />
      <Carte
        pcName={Product.name}
        pcImage={Product.imageUrl}
        pcDescription={Product.description}
        pcPrice={Product.price}
        helloImage={Greeting.imageH}
      />
    </div>
  );
}

export default App;
