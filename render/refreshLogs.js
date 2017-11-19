function refresh(){
  console.log("refresh logs");
  Request.getSheet('1e1GkbibPFIxJEyuWQsZnudRE2q3rQmTppUXr7-wrP1w', 'sheet1')
  .then((result) => {
    console.log(result.data);
  })
}
