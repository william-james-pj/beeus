import * as Yup from 'yup';

export const documentationEditorSchema = Yup.object().shape({
  title: Yup.string().required('Por favor, preencha este campo.'),
  content: Yup.string().required(
    'Por favor, preencha o conteúdo da documentação.',
  ),
});
