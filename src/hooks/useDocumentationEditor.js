import {
  createDocumentationRequest,
  deleteDocumentationRequest,
  editDocumentationRequest,
} from '@/services/documentationEditorService';
import { useRouter } from 'next/router';
import { useState } from 'react';

export function useDocumentationEditor() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function createDocumentation({ title, content, tags, token }) {
    setIsLoading(true);

    const { status } = await createDocumentationRequest({
      title,
      content,
      tags,
      token,
    });

    if (!status) {
      setIsLoading(false);
      return {
        errorMessage:
          'Erro na publicação da documentação. Tente novamente mais tarde.',
      };
    }

    router.back();
    setIsLoading(false);
    return {};
  }

  async function editDocumentation({ id, title, content, tags, token }) {
    setIsLoading(true);

    const { status } = await editDocumentationRequest({
      id,
      title,
      content,
      tags,
      token,
    });

    if (!status) {
      setIsLoading(false);
      return {
        errorMessage:
          'Erro na edição da documentação. Tente novamente mais tarde.',
      };
    }

    router.back();
    setIsLoading(false);
    return {};
  }

  async function deleteDocumentation({ id, token }) {
    setIsLoading(true);

    const { message } = await deleteDocumentationRequest({ id, token });

    if (message) {
      setIsLoading(false);
      return { errorMessage: message };
    }

    router.back();
    setIsLoading(false);
    return {};
  }

  function closeEditor() {
    router.back();
  }

  return {
    isLoading,
    createDocumentation,
    editDocumentation,
    deleteDocumentation,
    closeEditor,
  };
}
