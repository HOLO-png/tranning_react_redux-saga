const validate = (values) => {
   const errors = {};
   // console.log(values);
   const { title, description } = values;
   if (!title) {
      errors.title = 'Please re-enter a title for this input box!!';
   } else if (title.trim() && title.length > 15) {
      errors.title = 'job name must be less than 15 characters!!';
   }
   if (!description) {
      errors.description = 'Please re-enter a title for this input box!!';
   } else if (description.trim() && description.length > 15) {
      errors.description = 'job name must be less than 15 characters!!';
   }
   return errors;
};
export default validate;
