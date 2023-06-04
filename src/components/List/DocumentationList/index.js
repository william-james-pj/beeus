import { useDocumentationList } from '@/hooks/useDocumentationList';
import { FaSpinner } from 'react-icons/fa';
import { DocumentationCard } from '../DocumentationCard';
import styles from './documentationList.module.scss';

export function DocumentationList () {
    const { data, isLoading } = useDocumentationList();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Artigos</h1>
            <div className={styles.content}>
                { isLoading 
                    ? <FaSpinner className={styles.spinner} size={32} /> 
                    : data?.map((item, index) => 
                    <DocumentationCard key={index} data={item}/>
                ) }
            </div>
        </div>
    );
}