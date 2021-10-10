for (let i = 1; i <= 100; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i}回目 私はアホ犬です`);
  } else if (i % 3 === 0) {
    console.log(`${i}回目 アホ`);
  } else if (i % 5 === 0) {
    console.log(`${i}回目 犬`);
  } else {
    console.log(`${i}回目`);
  }
}