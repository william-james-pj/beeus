import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Por favor, insira um endereço de e-mail válido.')
    .required('Por favor, preencha este campo.'),
  password: Yup.string().required('Por favor, preencha este campo.'),
});

export default loginSchema;
