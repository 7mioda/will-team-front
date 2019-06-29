// Logs all actions and their information to the console
const logger = () => next => (action) => {
  console.log(`ACTION: ${action.type}`, action);

  next(action);
};

export default logger;
