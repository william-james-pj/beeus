import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Por favor, insira um endereço de e-mail válido.')
    .required('Por favor, preencha este campo.'),
  password: Yup.string()
    .min(4, 'Sua senha deve ter pelo menos 4 caracteres.')
    .max(20, 'A senha deve ter no máximo 20 caracteres.')
    .required('Por favor, preencha este campo.'),
});

export default loginSchema;
