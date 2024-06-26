export type ResponseTypes<ResponseList> = {
  status?: boolean;
  validation?: Array<string>;
  code?: number;
  data?: ResponseList;
  pagination?: PaginationTypes<ResponseList>;
  token?: string;
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

export type LinkType = {
  url?: string;
  label: string;
  active: boolean;
};
export type PaginationTypes<T> = {
  current_page: number;
  first_page_url: string;
  last_page: string;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: string;
  prev_page_url: string;
  from: string;
  to: string;
  total: number;
  data: T[];
  links?: LinkType[];
};
