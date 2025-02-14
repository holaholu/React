import React, { useId } from "react";

function inputBox(
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currrencyDisabled = false,
  className = ""
) {
  const id = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="outline-none w-full bg-transparent py-1.5"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currrencyDisabled}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default inputBox;
