import axiosInstance from "@/frontend/api/axiosInstance";
import { AxiosRequestConfig ,AxiosError } from "axios";

export interface MainServiceProps<T = any> {
  url: string
  method: AxiosRequestConfig["method"]
  data?: T
  params?: Record<string, any>
  headers?: Record<string, string>
}
export const mainService = async <ResponseType = any, BodyType = any>(
  props: MainServiceProps<BodyType>
): Promise<ResponseType> =>{
    
    const {url , method , data , params ,headers} = props;

try {
    const response = await axiosInstance({
      url,
      method,
      data,
      params,
      headers,
    })

    return response.data
  } catch (error) {
    const err = error as AxiosError<any>

    // 🔥 Extract backend error message safely
    const backendMessage =
      err.response?.data?.message ||
      err.response?.data?.error ||
      err.message ||
      "Something went wrong"

    // Optional: log for debugging
    console.error("API Error:", {
      url,
      method,
      status: err.response?.status,
      message: backendMessage,
    })

    // ❗ Re-throw meaningful error
    throw new Error(backendMessage)
  }

}