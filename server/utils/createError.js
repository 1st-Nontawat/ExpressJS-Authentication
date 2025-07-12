const CreteError = (code,msg) => {
  const error = new Error(msg);
  error.code = code;
  throw error;
}

export default CreteError;