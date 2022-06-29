import { css } from "@emotion/css";
import { usePages } from "../usePages";
const styled = {
  root: css`
    /* position: relative; */
    display: flex;
    width: 100%;
    .button {
      /* position: absolute; */
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      background-color: #30a6ff;
      height: 44px;
      color: white;
      border-radius: 100px;
      padding: 15px 18px;
    }
  `,
};
function ContinueButton() {
  const { nextPage } = usePages();
  return (
    <div className={styled.root}>
      <button
        className="button"
        onClick={(e) => {
          nextPage(e);
        }}
      >
        Continue
      </button>
    </div>
  );
}

export { ContinueButton };
