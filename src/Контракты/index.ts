type Person = {
  kind: "person";
  name: string;
  salary: number;
};

function createPerson(name: string, salary: number): Person {
  let object: Person = { kind: "person", name, salary };

  if (isPerson(object)) {
    return object;
  }

  return null!;
}

function isPerson(value: { kind: string }): value is Person {
  return value.kind === "person";
}

const person = createPerson("Alex", 15_000);

person.salary.toLocaleString("en-EU", { style: "currency", currency: "usd" });

///////////////////////////////////////////////

// type HttpResponse = {
//   status: 'pending' | 'successful' | 'failed' | 'cancelled';
//   data?: string[];
//   error?: string;
//   reason?: string;
// }

type HttpResponsePending = {
  status: "pending";
};
type HttpResponseSuccessful = {
  status: "successful";
  data: string[];
};
type HttpResponseFailed = {
  status: "failed";
  error: string;
};
type HttpResponseCancelled = {
  status: "cancelled";
  reason: string;
};

type HttpResponse =
  | HttpResponsePending
  | HttpResponseSuccessful
  | HttpResponseFailed
  | HttpResponseCancelled;

function handleResponse(response: HttpResponse): void {
  if (response.status === "pending") {
    response.status;
  }

  if (response.status === "successful") {
    response.data;
  }

  if (response.status === "failed") {
    response.error;
  }

  if (response.status === "cancelled") {
    response.reason;
  }
}
