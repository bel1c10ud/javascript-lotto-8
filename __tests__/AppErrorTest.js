import AppError from "../src/error/AppError.js";

describe("AppError 테스트", () => {
  test("Error 클래스를 상속받아야 한다.", () => {
    const error = new AppError("");
    expect(error instanceof Error).toBe(true);
  });

  test("에러 메시지 앞에 [ERROR]가 포함되어야 한다.", () => {
    expect(() => {
      throw new AppError("");
    }).toThrow("[ERROR]");
  });

  test("올바른 에러 이름이어야 한다.", () => {
    const error = new AppError("");
    expect(error.name).toBe("AppError");
  });

  test("스택 트레이스가 생성되어야 한다.", () => {
    const originalCaptureStackTrace = Error.captureStackTrace;
    Error.captureStackTrace = jest.fn();

    new AppError("");
    expect(Error.captureStackTrace).toHaveBeenCalled(); 

    Error.captureStackTrace = originalCaptureStackTrace;
  });

  test("captureStackTrace가 없어도 정상 동작해야 한다", () => {
    const originalCaptureStackTrace = Error.captureStackTrace;
    Error.captureStackTrace = undefined;

    expect(() => {
      new AppError("");
    }).not.toThrow();

    Error.captureStackTrace = originalCaptureStackTrace;
  });
});
