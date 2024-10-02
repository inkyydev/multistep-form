import "./index.css";
import MultistepSection from "./MultistepSection";
import { FormProvider } from "./FormContext";

function App() {
  return (
    <>
      <FormProvider>
        <MultistepSection />
      </FormProvider>
    </>
  );
}

export default App;
