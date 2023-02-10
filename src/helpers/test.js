const getUnixTime = (day) => {
  const date = 1675062129;
  if (day === "Monday") {
    return date;
  } else if (day === "Tuesday") {
    return date + 1 * 24 * 60 * 60;
  } else if (day === "Wednesday") {
    return date + 2 * 24 * 60 * 60;
  } else if (day === "Thursday") {
    return date + 3 * 24 * 60 * 60;
  } else if (day === "Friday") {
    return date + 4 * 24 * 60 * 60;
  } else if (day === "Saturday") {
    return date + 5 * 24 * 60 * 60;
  } else if (day === "Sunday") {
    return date + 6 * 24 * 60 * 60;
  }
};

for(let i = 0; i < 7; i++){
  console.log(1675062129 + i*24 * 60 * 60)
}

1674457329
1674543729
1674630129
1674716529
1674802929
1674889329
1674975729
1675062129
1675148529
1675234929
1675321329
1675407729
1675494129
1675580529
1675666929
1675753329
1675839729
1675926129
1676012529
1676098929
1676185329


1675062129
1675148529
1675234929
1675321329
1675407729
1675494129
1675580529