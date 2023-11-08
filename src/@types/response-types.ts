export type ResponseTypes<ResponseList> = {
  status?: {
    code: number;
    message: string;
    error_details: string;
    validation_errors: Array<string>;
  };
  content: ResponseList;
  pagination?: PaginationTypes;
  reset?: boolean;
};

export type ErrorResponseType = {
  status: {
    code: number;
    message: "error";
    error_details: string;
    validation_errors: Array<string>;
  };
  content: any;
};

export type PaginationTypes = {
  current_page: string;
  first_page_url: string;
  last_page: string;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: string;
  prev_page_url: string;
  from: string;
  to: string;
  total: string;
};
