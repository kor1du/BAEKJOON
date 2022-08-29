function checkSelfNums() {
  const notSelfNums = new Array();
  for (var i = 1; i < 10000; i++) {
    const string = i.toString();
    if (i < 10) {
      notSelfNums.push(i + i);
    } else if (i < 100) {
      const a = parseInt(string.charAt(0));
      const b = parseInt(string.charAt(1));
      notSelfNums.push(i + a + b);
    } else if (i < 1000) {
      const a = parseInt(string.charAt(0));
      const b = parseInt(string.charAt(1));
      const c = parseInt(string.charAt(2));
      notSelfNums.push(i + a + b + c);
    } else if (i < 10000) {
      const a = parseInt(string.charAt(0));
      const b = parseInt(string.charAt(1));
      const c = parseInt(string.charAt(2));
      const d = parseInt(string.charAt(3));
      notSelfNums.push(i + a + b + c + d);
    }
  }
  for (var i = 1; i < 10000; i++) {
    if (notSelfNums.includes(i)) continue;
    console.log(i);
  }
}

checkSelfNums();
