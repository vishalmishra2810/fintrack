import newsRestClient from "@/utils/news.client";


export const newsFormService = {
    newsFormData: async (formData: string): Promise<any> => {
        const res = newsRestClient.post(`v1/news`, formData);
        console.log('ereeee',res)
        return res;
    }
};
