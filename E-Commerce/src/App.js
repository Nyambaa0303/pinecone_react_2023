import { Carousel, CarouselBanner } from "./component/Carousel.js";
import { Bottom } from "./component/header/bottom.js";
import { Header } from "./component/header/header.js";
import { Menu } from "./component/menu/menu";

function App() {
  return (
    <>
      <Bottom />
      <Header />
      <Menu />
      <CarouselBanner />
    </>
  );
}
export default App;
