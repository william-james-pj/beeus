import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Por favor, insira um nome válido.')
    .max(50, 'O nome deve ter no máximo 50 caracteres.')
    .required('Por favor, preencha este campo.'),
  email: Yup.string()
    .email('Por favor, insira um endereço de e-mail válido.')
    .required('Por favor, preencha este campo.'),
  password: Yup.string()
    .min(4, 'Sua senha deve ter pelo menos 4 caracteres.')
    .max(20, 'A senha deve ter no máximo 20 caracteres.')
    .required('Por favor, preencha este campo.'),
});

export default signupSchema;
