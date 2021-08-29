class AppError {
  public readonly message: string;
  public readonly code: number;
  constructor(message: string, code = 400) {
    this.code = code;
    this.message = message;
  }
}
export default AppError;
