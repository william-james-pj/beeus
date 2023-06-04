import { useDocumentationList } from '@/hooks/useDocumentationList';
import { DocumentationCard } from '../DocumentationCard';
import styles from './documentationList.module.scss';

export function DocumentationList () {
    const { data } = useDocumentationList();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Artigos</h1>
            <div className={styles.content}>
                { data?.map((item, index) => 
                    <DocumentationCard key={index} data={item}/>
                ) }
            </div>
        </div>
    );
}