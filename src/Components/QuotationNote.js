import { css } from "@emotion/css";

const styled = {
  root: css`
    display: flex;
    margin-left: 16px;
    padding: 5px 20px;
    border-left: 1px solid #d5e0e8;
    flex-direction: column;

    .quotation-container {
      display: flex;
      padding: 0 40px 0 10px;
      align-items: center;
      margin: 18px 0;
    }
    .left {
      margin-right: auto;
    }
    .right {
      margin-left: auto;
      font-weight: 500;
    }

    .note {
      text-align: center;
      margin: 20px 0;
    }
  `,
};

function QuotationNote() {
  return (
    <div className={styled.root}>
      <div className="quotation-container">
        <div className="left">Rate</div>
        <div className="right">10000</div>
      </div>
      <div className="quotation-container">
        <div className="left">Fee</div>
        <div className="right">10000</div>
      </div>
      <div>
        <div className="note">
          Money will arrive in 5 minutes if you make payment before 16:00
          (GMT+7)
        </div>
      </div>
    </div>
  );
}

export { QuotationNote };
