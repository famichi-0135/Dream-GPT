import { DIYCalender } from "@/components/diyCalender";
import { render, screen, fireEvent } from "@testing-library/react";

// Date の固定（テストの安定性）
beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date("2024-05-15")); // 任意
});

afterAll(() => {
  jest.useRealTimers();
});

describe("DIYCalender", () => {
  it("初期表示の年月が表示される", () => {
    render(<DIYCalender />);

    expect(screen.getByText("2024年")).toBeInTheDocument();
    expect(screen.getByText("5月")).toBeInTheDocument();
  });

  it("次の月ボタンで月が進む", () => {
    render(<DIYCalender />);

    fireEvent.click(screen.getByText("次の月"));

    expect(screen.getByText("6月")).toBeInTheDocument();
  });

  it("12月 → 1月で年が繰り上がる", () => {
    jest.setSystemTime(new Date("2024-12-15"));
    render(<DIYCalender />);

    // 初期は 2024年12月
    expect(screen.getByText("2024年")).toBeInTheDocument();
    expect(screen.getByText("12月")).toBeInTheDocument();

    fireEvent.click(screen.getByText("次の月"));

    expect(screen.getByText("2025年")).toBeInTheDocument();
    expect(screen.getByText("1月")).toBeInTheDocument();
  });

  it("前の月ボタンで月が戻る", () => {
    jest.setSystemTime(new Date("2024-05-15"));
    render(<DIYCalender />);

    fireEvent.click(screen.getByText("前の月"));

    expect(screen.getByText("4月")).toBeInTheDocument();
  });

  it("1月 → 12月で年が繰り下がる", () => {
    jest.setSystemTime(new Date("2024-01-15"));
    render(<DIYCalender />);

    expect(screen.getByText("2024年")).toBeInTheDocument();
    expect(screen.getByText("1月")).toBeInTheDocument();

    fireEvent.click(screen.getByText("前の月"));

    expect(screen.getByText("2023年")).toBeInTheDocument();
    expect(screen.getByText("12月")).toBeInTheDocument();
  });

  it("カレンダーの日付が 1〜31 のどれかを含んでいる", () => {
    render(<DIYCalender />);

    // 1〜31 のどれかが表示されていること
    expect(screen.getByText("12")).toBeInTheDocument();
  });
});
