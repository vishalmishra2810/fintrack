import restClient from "@/utils/rest.client";


export const newsFormService = {
    
    newsFormData: async (formData: string): Promise<any> => {
        return await restClient.post(`/news`, formData);
    }
};
