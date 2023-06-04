import { useAuth } from '@/contexts/authContext';
import { useDocumentation } from '@/hooks/useDocumentationList';
import { useEffect } from 'react';
import { DocumentationCard } from '../DocumentationCard';
import styles from './documentationList.module.scss';

export function DocumentationList() {
  const { userToken } = useAuth();
  const { documents, getDocumentations } = useDocumentation();

  useEffect(() => {
    if (!userToken) return;
    getDocumentations({ token: userToken });
  }, [userToken]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Artigos</h1>
      <div className={styles.content}>
        {documents?.map((item, index) => (
          <DocumentationCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
