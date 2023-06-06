import { useAuth } from '@/contexts/authContext';
import { useDocumentation } from '@/hooks/useDocumentationList';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { MdNoteAdd } from 'react-icons/md';
import { DocumentationCard } from '../DocumentationCard';
import styles from './documentationList.module.scss';

export function DocumentationList() {
  const { userToken } = useAuth();
  const { isLoading, documents, getDocumentations } = useDocumentation();

  useEffect(() => {
    if (!userToken) return;
    getDocumentations({ token: userToken });
  }, [userToken]);

  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <Link href="documentation-editor">
            <MdNoteAdd></MdNoteAdd>
        </Link>
      </div>
      <h1 className={styles.title}>Artigos</h1>
      <div className={styles.content}>
        {isLoading ? (
          <FaSpinner className={styles.spinner} size={32} />
        ) : (
          documents?.map((item, index) => (
            <DocumentationCard key={index} data={item} />
          ))
        )}
      </div>
    </div>
  );
}
