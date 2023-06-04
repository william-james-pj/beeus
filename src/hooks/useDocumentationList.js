import {
  getDocumentationByIdRequest,
  listDocumentationRequest,
} from '@/services/documentationService';
import { useState } from 'react';

export function useDocumentation() {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(undefined);

  async function getDocumentations({ token }) {
    const { status, data } = await listDocumentationRequest({ token });

    if (status && !data) return;

    setDocuments(data);
  }

  async function getDocumentationById({ id, token }) {
    const { status, data } = await getDocumentationByIdRequest({ id, token });

    if (status && !data) return;

    setSelectedDocument(data);
  }

  return {
    documents,
    selectedDocument,
    getDocumentations,
    getDocumentationById,
  };
}
