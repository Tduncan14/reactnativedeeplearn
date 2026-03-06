import { supabaseConfig } from "@/config/supabase-config";
import { IProduct } from "@/interfaces";


export const addProduct = async (payload: IProduct) => {

    try {

        const response = await supabaseConfig.from('products').insert([payload]);
        if (response.error) {
            throw response.error;
        }
    }
    catch (error) {
        throw error
    }
}