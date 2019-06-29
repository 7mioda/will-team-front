const formsMiddleware = () => next => async (action) => {
  if (
    action.payload
    && action.payload.meta
    && action.payload.meta.header === 'multipart/form-data'
  ) {
    const {
      payload: { data },
    } = action;
    const formData = new FormData();
    const auxData = Object.entries(data);
    console.log(auxData);
    auxData.forEach((element) => {
      if(element[0] === 'files'){
         Array.from(element[1]).forEach(el => formData.append(element[0], el));
      } else {
        formData.append(element[0], element[1]);
      }
    });
    const newAction = action;
    newAction.payload.data = formData;
    newAction.payload.meta.header = null;
    return next(newAction);
  }
  return next(action);
};

export default formsMiddleware;
