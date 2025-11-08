export class ApiError {
  error: string;

  constructor(data: any) {
    this.error = data.error;
  }
}