export const formatMoney = (value) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(value);
};

export const calculateTotalToPay = (amount, deadline) => {
  return (
    amount *
    calculateInterestByAmount(amount) *
    calculateInterestByDeadline(deadline)
  );
};

const calculateInterestByAmount = (amount) => {
  if (amount < 5000) {
    return 1.5;
  } else if (amount >= 5000 && amount < 10000) {
    return 1.4;
  } else if (amount >= 10000 && amount < 15000) {
    return 1.3;
  } else {
    return 1.2;
  }
};

const calculateInterestByDeadline = (deadline) => {
  if (deadline === 6) {
    return 1.1;
  } else if (deadline === 12) {
    return 1.2;
  } else {
    return 1.3;
  }
};
