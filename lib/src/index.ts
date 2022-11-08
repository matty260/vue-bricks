import { VbButton } from "./components";

export default {
  install: (app: any, options: any) => {
    app.component("VbButton", VbButton);
  },
}