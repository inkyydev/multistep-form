export default function PaymentTable() {
  return (
    <>
      <table className="payment-table table-form-all">
        <tr>
          <td>Payment Option</td>
          <td>Employer-Pay and Payroll Deduction</td>
        </tr>
        <tr>
          <td>Insurance Carrier</td>
          <td>Aetna</td>
        </tr>
        <tr>
          <td>Employer Amount</td>
          <td>$400.00</td>
        </tr>
        <tr>
          <td>Employee Amount</td>
          <td>$352.00</td>
        </tr>
        <tr>
          <td>Pay to the order of</td>
          <td>Aetna</td>
        </tr>
        <tr>
          <td>Payment Address</td>
          <td>Aetna, 4561 Kings Hwy, Brooklyn, New York, 11234</td>
        </tr>
        <tr>
          <td>Employer to start paying premiums on</td>
          <td>January 2025</td>
        </tr>
      </table>
    </>
  );
}
