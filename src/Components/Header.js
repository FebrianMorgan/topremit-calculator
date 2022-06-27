import { Container, Progress } from "@chakra-ui/react";
import { useCalculator } from "../useCalculator";
import { css } from "@emotion/css";

function Header() {
  const { progress } = useCalculator();
  return (
    <div
      className={css`
        height: 60px;
        padding: 55px 0 0;
        width: 100%;
      `}
    >
      {/* Progress bar color */}
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
