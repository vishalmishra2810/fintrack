import restClient from "@/utils/rest.client";


export const shortsFormService = {
    
    shortsFormData: async (formData: string): Promise<any> => {
        const ree = await restClient.post(`/shorts`, formData);
        console.log('reee', ree)
        return ree
    }
};
