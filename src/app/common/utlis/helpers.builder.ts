export class Helpers {
    public static buildPaginate = (query: string, queryParameters: { page?: string, per_page?: string }) => {
        let { page, per_page: perPage } = queryParameters;

        query += Number(queryParameters.page) > 0 ? `page=${page}` : "";
        query += query.length > 1 ? "&" : "";
        query += Number(queryParameters.per_page) > 0 ? `per_page=${perPage}` : "";

        return query;
    }
}