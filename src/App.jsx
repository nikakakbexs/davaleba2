import "./App.css";
import Bolo from "./components/bolo/Bolo.jsx";
import Button from "./components/button/Button";
import ProductCard from "./components/productcard/ProductCard";
import Text from "./components/text/Text";

function App() {
  return (
    <div>
      <Text zoma={"40px"} feri={"green"} adgili={"center"} />

      <ProductCard
        name={"ყურძენი"}
        odenoba={"18"}
        fasi={"3"}
        desc={"ყურძენი არის ძალიან გემრიელი"}
        bg={"green"}
      />
      <ProductCard
        name={"მარწყვი"}
        odenoba={"399"}
        fasi={"30"}
        desc={"მარწყვი არის ძალიან გემრიელი"}
        bg={"yellow"}
      />
      <ProductCard
        name={"კომბოსტო"}
        odenoba={"3"}
        fasi={"30"}
        desc={"კომბოსტო არის ძალიან გემრიელი"}
        bg={"red"}
      />
      <div className="box">
        <Button siga={""} sigr={"50px"} bg={"gray"} text={"გთხოვ დამაჭირე"} />
        <Button siga={""} sigr={"50px"} bg={"red"} text={"არა მე დამაჭირე"} />
        <Button
          siga={""}
          sigr={"50px"}
          bg={"yellow"}
          text={"იმათ არა მე დამაჭირე"}
        />
      </div>
      <h4>თუ მოიწყინეთ ცოტა გახალისდით:</h4>
      <div className="iumori">
        <Bolo linki={"https://www.youtube.com/watch?v=rZIIMw4A3jE"} />
        <Bolo linki={"https://www.youtube.com/watch?v=s_ZOw3SxucU"} />
        <Bolo
          linki={
            "https://www.youtube.com/watch?v=2kHNxNpG74M&list=PLSXPCKTjRI1wMu0W3Lue6q-E5KzWUo5ZU"
          }
        />
      </div>
    </div>
  );
}

export default App;
