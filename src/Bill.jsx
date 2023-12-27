const Bill = ({ bill, onSetBill }) => {
  return (
    <div>
      <p>
        How much was the bill?
        <span>
          <input
            type="text"
            value={bill}
            placeholder="Bill Value"
            onChange={(e) => onSetBill(Number(e.target.value))}
          />
        </span>
      </p>
    </div>
  );
};

export default Bill;
