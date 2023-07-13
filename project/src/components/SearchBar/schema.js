import * as yup from 'yup';

const schema = yup.object({
  searchTerm: yup
    .string()
    .required('Please enter a search term!')
});

export default schema;