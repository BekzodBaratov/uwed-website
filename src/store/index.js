import { createStore } from "vuex";
import example from "./modules/example";

export default createStore({
  modules: {
    example,
  },
});
