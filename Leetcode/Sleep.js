// Given a position integer millis, Write an async function sleep that sleeps for millis milliseconds. Make sure to use setTimeout.

const sleep = async (millis) =>
  new Promise(resolve => setTimeout(resolve, millis));

  
