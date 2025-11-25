import { render, fireEvent, screen } from "@testing-library/react";
import { DeleteDataButton } from "@/components/part/settingParts/settingProps/deleteAlluserDatasDialog";

describe("DeleteDataButton", () => {
  it("消去ボタンが表示される", () => {
    render(<DeleteDataButton />);

    expect(screen.getByText("消去")).toBeInTheDocument();
  });

  it("ダイアログが開く", () => {
    render(<DeleteDataButton />);
    fireEvent.click(screen.getByText("消去"));
    expect(
      screen.getByText("本当に削除してよろしいですか？")
    ).toBeInTheDocument();
  });

  it("閉じるボタンが表示される", () => {
    render(<DeleteDataButton />);
    fireEvent.click(screen.getByText("消去"));
    expect(screen.getByText("閉じる")).toBeInTheDocument();
  });

  it("データを削除するボタンが表示される", () => {
    render(<DeleteDataButton />);
    fireEvent.click(screen.getByText("消去"));
    expect(screen.getByText("データを削除する")).toBeInTheDocument();
  });
});
