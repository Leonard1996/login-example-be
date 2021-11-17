import axios from "axios";
import { Helpers } from "../../common/utlis/helpers.builder";

export class ProxyService {
    public static list = async (queryParameters: { page: string, per_page: string }) => {
        let query = "?";
        query = Helpers.buildPaginate(query, queryParameters);
        let data = (await axios.get(process.env.BASE_URL + query)).data;

        return data;
    }
}