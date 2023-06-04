import { getDocumentationRequest, listDocumentationRequest } from '@/services/documentationService';
import { useEffect, useState } from 'react';

export function useDocumentationList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        listDocumentationRequest()
            .then(res => {
                setData(res.data);
            })
    }, [])

    return { data };
}

export function useDocumentationGet(id) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getDocumentationRequest(id)
            .then(res => {
                setData(res.data);
            })
    }, [])

    return { data };
}