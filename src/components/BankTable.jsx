import { useFormikContext } from "formik";

export default function BankTable() {
  const { values } = useFormikContext();

  return (
    <>
      <table className="bank-table table-form-all">
        <tr>
          <td>
            <span>Routing Number</span>
            {values.routingNumber}
          </td>
        </tr>
        <tr>
          <td>
            <span>Bank Name</span>
            {values.bankName}
          </td>
        </tr>
        <tr>
          <td>
            <span>Nickname</span>
            {values.nickName}
          </td>
        </tr>
        <tr>
          <td>
            <span>Account Type</span>
            {values.accountType}
          </td>
        </tr>
        <tr>
          <td>
            <span>Account Number</span>
            {values.accountNumber}
          </td>
        </tr>
      </table>
    </>
  );
}
