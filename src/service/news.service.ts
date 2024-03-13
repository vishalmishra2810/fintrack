import restClient from "@/utils/rest.client";


export const newsFormService = {
    
    newsFormData: async (formData: string): Promise<any> => {
        console.log('here are we')
        const res = await restClient.post(`/v1/news`, formData);
        console.log('ereeee',res)
        return res;
    }
};
