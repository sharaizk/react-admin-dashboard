const colors = ["#FE6BBA", "#9267F2", "#3B88FD"];

export const getColor = (value) => {
  const parsedValue = parseInt(value);

  if (parsedValue >= 0 && parsedValue <= 34) {
    return colors[0];
  } else if (parsedValue > 34 && parsedValue <= 68) {
    return colors[1];
  } else if (parsedValue > 68 && value <= 100) {
    return colors[2];
  } else {
    return colors[0];
  }
};

export const getValue = (percentage, total) => {
  const value = (parseInt(percentage) * parseInt(total)) / 100;
  return value;
};
