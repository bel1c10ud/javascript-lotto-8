import App from "./App.js";
import Input from "./view/Input.js";
import Output from "./view/Output.js";
import LottoStore from "./model/LottoStore.js";

const app = new App({
  input: new Input(),
  output: new Output(),
  lottoStore: new LottoStore(),
});

await app.run();
