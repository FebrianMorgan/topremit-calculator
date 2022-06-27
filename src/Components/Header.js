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
      <Progress value={progress} size="xs" colorScheme="cyan" />
    </div>
  );
}

export { Header };
