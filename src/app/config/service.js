import { Apis, post } from '.';

export const Service = {
    register: async (obj) => {
        let result = await post(Apis.register, obj);
        if (result.status === 201) return result.data;
        else throw result;
    }
}