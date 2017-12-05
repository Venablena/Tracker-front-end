function refresh(){
  console.log("refresh logs");
  // Since we now have the back-end, we can hide some of this information there!
  // For example, we could make a request to a route on the back-end where
  // this information is hidden there.
  Request.getSheet('1e1GkbibPFIxJEyuWQsZnudRE2q3rQmTppUXr7-wrP1w', 'sheet1')
  .then((result) => {
    console.log(result.data);
  })
}
