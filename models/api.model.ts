export interface ApiResponse<T> {
  code: number;
  status: "success" | "error";
  description: string;
  data: T;
}
