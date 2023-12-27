const Service = ({ children, percentage, onSelect }) => {
  return (
    <div>
      <p>
        {children}
        <span>
          <select
            value={percentage}
            onChange={(e) => onSelect(Number(e.target.value))}
          >
            <option value="0">Dissatisfied(0%)</option>
            <option value="5">it was okay (5%) </option>
            <option value="10"> it was delicious (10%) </option>
            <option value="20">it was absolutely amazing(20%)</option>
          </select>
        </span>
      </p>
    </div>
  );
};

export default Service;
