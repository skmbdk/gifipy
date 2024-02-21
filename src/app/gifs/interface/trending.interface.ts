export interface TrendingListResponse {
    data: string[];
    meta: Meta;
}

export interface Meta {
    msg:         string;
    status:      number;
    response_id: string;
}
