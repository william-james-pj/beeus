import { createDocumentationRequest } from '@/services/documentationEditorService';
import { createContext, useContext, useState } from 'react';

export const DocumentationEditorContext = createContext({});

export function DocumentationEditorProvider({ children }) {
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

    // go back to the previous page
    setIsLoading(false);
  }

  return (
    <DocumentationEditorContext.Provider
      value={{ isLoading, createDocumentation }}
    >
      {children}
    </DocumentationEditorContext.Provider>
  );
}

export const useDocumentationEditor = () =>
  useContext(DocumentationEditorContext);
