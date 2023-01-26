const PAGE_LENGTH = 9;
const pagenation = (current_page, max_page) => {
  const cur = current_page;
  const max = max_page;
  const between = null;
  let arr = [];
  //nullを返す
  if (cur === 1 && max === 1) return null;

  //nullが入らない
  if (PAGE_LENGTH >= max) {
    for (let i = 1; i <= max; i++) {
      if (i === cur) i = String(i);
      arr.push(i);
    }
    return arr;
  } else {
    //nullが入るケース
    //現在ページが5以下
    if (cur < 5) {
      for (let i = 1; i <= PAGE_LENGTH; i++) {
        if (i == cur) i = String(i);
        if (i <= 7) arr.push(i);
      }
      arr.push(between, max);
      return arr;
    }
    //5以上の場合
    if (5 <= cur) {
      if (max - cur > 3) {
        arr.push(1, between);
        for (let i = cur - 2; i <= 5 + cur - 3; i++) {
          arr.push(i == cur ? String(i) : i);
        }
        arr.push(between, max);
      } else {
        arr.push(1, between);
        for (let i = 0; i <= 4; i++) {
          insert = max - 6 + i;
          arr.push(insert === cur ? String(insert) : insert);
        }
        arr.push(max - 1, max);
      }
      if (cur === max) {
        arr = arr.map((v) => {
          return v === cur ? String(v) : v;
        });
      }
    }

    return arr;
  }
};

const heredoc = () => {
  /*
  pagenation(1, 1, PAGE_LENGTH)
  pagenation(1, 2, PAGE_LENGTH)
  pagenation(1, 9, PAGE_LENGTH)
  pagenation(3, 10, PAGE_LENGTH)
  pagenation(3, 20, PAGE_LENGTH)
  pagenation(20, 20, PAGE_LENGTH)
  pagenation(10, 20, PAGE_LENGTH)
  */
};

heredoc
  .toString()
  .replace(/^[^*]+\*\n/, '')
  .replace(/\n  \*.*/, '')
  .replace(/\}/, '')
  .split('\n')
  .forEach((row) => {
    console.log(row);
    console.log(`=> ${eval(`JSON.stringify(${row})`)}`);
  });
