import { css } from "@emotion/css";

const styled = {
  root: css`
    font-family: "Mulish", sans-serif;
    font-size: 19px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-align: left;
    margin-top: 24px;
    margin-bottom: 18px;
  `,
};

function HeaderText({ text }) {
  return <div className={styled.root}>{text}</div>;
}

export { HeaderText };
