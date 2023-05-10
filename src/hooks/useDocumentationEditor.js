import { createDocumentationRequest } from '@/services/documentationEditorService';
import { useRouter } from 'next/router';
import { useState } from 'react';

export function useDocumentationEditor() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function createDocumentation({ title, content, token }) {
    setIsLoading(true);

    const { status } = await createDocumentationRequest({
      title,
      content,
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
  }

  function closeEditor() {
    router.back();
  }

  return { isLoading, createDocumentation, closeEditor };
}
