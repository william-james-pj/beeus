import { getDocumentationRequest, listDocumentationRequest } from '@/services/documentationService';
import { useEffect, useState } from 'react';

export function useDocumentationList() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        listDocumentationRequest()
            .then(res => {
                setData(res.data);
                setIsLoading(false);
            })
    }, [])

    return { data, isLoading };
}

export function useDocumentationGet(id) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDocumentationRequest(id)
            .then(res => {
                setData(res.data);
                setIsLoading(false);
            })
    }, [])
    
    return { data, isLoading };
}