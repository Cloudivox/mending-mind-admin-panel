import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import PageThree from "./pages/page3";
import PageFour from "./pages/page4";
import PageTwo from "./pages/page2";
import PageOne from "./pages/page1";
function Pdf() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("print") === "true") {
      window.print();
    }
  }, [searchParams]);

  return (
    <>
      {/********************************** Page 1 started **************************************/}

      <PageOne />

      {/********************************** Page 1 ended **************************************/}

      {/********************************** Page 2 started **************************************/}

      <PageTwo />

      {/********************************** Page 2 ended **************************************/}

      {/********************************** Page 3 started **************************************/}

      <PageThree />

      {/********************************** Page 3 ended **************************************/}

      {/********************************** Page 4 started **************************************/}

      <PageFour />

      {/********************************** Page 4 ended **************************************/}
    </>
  );
}

export default Pdf;
