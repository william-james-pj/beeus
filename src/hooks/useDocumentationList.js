import {
  getDocumentationByIdRequest,
  listDocumentationRequest,
} from '@/services/documentationService';
import { useState } from 'react';

export function useDocumentation() {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  async function getDocumentations({ token }) {
    setIsLoading(true);

    const { status, data } = await listDocumentationRequest({ token });

    if (status && !data) return;

    setDocuments(data);
    setIsLoading(false);
  }

  async function getDocumentationById({ id, token }) {
    setIsLoading(true);

    const { status, data } = await getDocumentationByIdRequest({ id, token });

    if (status && !data) return;

    setSelectedDocument(data);
    setIsLoading(false);
  }

  return {
    isLoading,
    documents,
    selectedDocument,
    getDocumentations,
    getDocumentationById,
  };
}
