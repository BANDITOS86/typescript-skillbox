type HttpResponseSuccess<T> = {
  success: true;
  data: T;
}

type HttpResponseFail = {
  success: false;
  error: string;
}

type HttpResponse<T> = HttpResponseSuccess<T> | HttpResponseFail;

type User = {
  id: number;
  name: string;
}

type UserHttpResponse = HttpResponse<User>;

type Message = {
  id: number;
  text: string;
}

type MessageHttpResponse = HttpResponse<Message>;

declare const response: UserHttpResponse;

response.error;
response.data;

if (response.success) {
  response.data
} else {
  response.error;
}