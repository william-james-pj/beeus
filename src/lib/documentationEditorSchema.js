import * as Yup from 'yup';

export const documentationEditorSchema = Yup.object().shape({
  title: Yup.string().required('Por favor, preencha este campo.'),
  content: Yup.string()
    .min(20, 'O conteúdo da documentação deve ter pelo menos 20 caracteres.')
    .required('Por favor, preencha o conteúdo da documentação.'),
});
