import { MainLayout } from "@/layouts/main";
import { requireAuthentication } from "@/lib/requireAuthentication";
import styles from "@/styles/documentationDetail.module.scss";
import Head from "next/head";
import { FaSpinner } from "react-icons/fa";

const { useAuth } = require("@/contexts/authContext");
const { useDocumentationGet } = require("@/hooks/useDocumentationList");
const { useRouter } = require("next/router");

const DocumentationDetail = () => {
    const router = useRouter();
    const { user } = useAuth();
    const id = router.asPath.substring(1);
    const { data, isLoading } = useDocumentationGet(parseInt(id));

    return (
        <>
            <Head>
                <title>Beeus | { data.title }</title>
            </Head>
            <main>
                <MainLayout>
                    <div className={styles.container}>
                        { isLoading 
                            ? <FaSpinner className={styles.spinner} size={32} /> 
                            : <span className={styles.info}>Publicado { data.created_at.substring(8, 10) }/{ data.created_at.substring(5, 7) }/{ data.created_at.substring(0, 4) } por { data.author.name }</span>}
                        <h1 className={styles.title}>{ data.title }</h1>
                        <p className={styles.content}>{ data.content }</p>
                    </div>

                </MainLayout>
            </main>
        </>
    );
}

export async function getServerSideProps(context) {
    return requireAuthentication(context, () => {
        return {
        props: {},
        };
    });
}
  
export default DocumentationDetail;
  