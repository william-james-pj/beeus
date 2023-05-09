import { createDocumentationRequest } from '@/services/documentationEditorService';
import { useRouter } from 'next/router';
import { createContext, useContext, useState } from 'react';

export const DocumentationEditorContext = createContext({});

export function DocumentationEditorProvider({ children }) {
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
        message:
          'Erro na publicação da documentação. Tente novamente mais tarde.',
      };
    }

    router.back();
    setIsLoading(false);
  }

  function closeEditor() {
    // clear selected documentation
    router.back();
  }

  return (
    <DocumentationEditorContext.Provider
      value={{ isLoading, createDocumentation, closeEditor }}
    >
      {children}
    </DocumentationEditorContext.Provider>
  );
}

export const useDocumentationEditor = () =>
  useContext(DocumentationEditorContext);
