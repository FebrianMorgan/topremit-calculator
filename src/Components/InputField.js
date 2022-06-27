import { css } from "@emotion/css";
import { useCalculator } from "../useCalculator";

const styled = {
  root: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 62px;
    border-radius: 8px;
    border: 1px solid #d5e0e8;
    margin: 12px 0;

    .input-test {
      padding: 0 16px;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 366px;
      height: 60px;
      border-radius: 8px 0px 0px 8px;
    }

    .input-addon {
      color: #2e4865;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px;
      width: 66px;
      height: 60px;
      border-left: 1px solid #d5e0e8;
    }
  `,
};

function InputField({ type }) {
  const { isoCode } = useCalculator();
  const placeholder = type === "send" ? "You send" : "Recipient gets";
  const value = type === "send" ? "IDR" : isoCode;
  return (
    <>
      <div className={styled.root}>
        <input
          placeholder={placeholder}
          type="text"
          className="input-test"
        ></input>
        <div className="input-addon">{value}</div>
      </div>
    </>
  );
}

export { InputField };
