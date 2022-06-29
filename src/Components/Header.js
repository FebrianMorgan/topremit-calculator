import { Progress } from "@chakra-ui/react";
import { useCalculator } from "../useCalculator";
import { css } from "@emotion/css";
import { usePages } from "../usePages";

function Header() {
  const { page, prevPage } = usePages();
  const { progress } = useCalculator();

  function backButton() {
    if (page > 1) {
      return (
        <div
          className={css`
            position: absolute;
            top: 15px;
            left: 15px;
            bottom: 0;
            margin: auto 0;
          `}
          onClick={(e) => prevPage(e)}
        >
          back
        </div>
      );
    }
  }

  return (
    <div
      className={css`
        position: relative;
        height: 60px;
        padding: 55px 0 0;
        width: 100%;
      `}
    >
      {backButton()}
      <Progress
        value={progress}
        size="xs"
        color="linear-gradient(59.36deg, #18A4E9 2.95%, #06E4AE 99.57%);
"
      />
    </div>
  );
}

export { Header };
