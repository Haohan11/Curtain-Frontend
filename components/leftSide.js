import { useRouter } from "next/router";
import ProductCard from "./productCard";

import { useCombination } from "@/hook/provider/combinationProvider";
import { checkShowMode } from "@/tool/lib";

const LeftSide = ({ data: stockList, selectStock, setSelectStock }) => {
  const router = useRouter();
  const showMode = checkShowMode(router);
  const { removeFromCombination } = useCombination();

  return (
    <div className="vstack" style={{ minHeight: "100%" }}>
      <div className="d-flex fs-6 fw-bold text-darkblue p-4 m-0 border-2 border-bottom border-linegrey position-sticky top-0 bg-white z-2">
        <span style={{ letterSpacing: "1.5px" }}>
          {!showMode ? "商品列表" : "商品資訊"}
        </span>
      </div>
      {!stockList || !Array.isArray(stockList) || stockList.length === 0 ? (
        <div className="flex-grow-1 flex-center flex-column text-textgrey">
          {showMode ? (
            <>
              <span>選擇組合</span>
              <span>或</span>
              <span>點選商品查看詳細資料</span>
            </>
          ) : (
            <span>組合內沒有商品</span>
          )}
        </div>
      ) : (
        stockList.map((stock, index) => (
          <div key={stock.id} className="border-bottom">
            <ProductCard
              data={{ ...stock, index }}
              dynamic={!showMode}
              deletable={!showMode}
              sticky
              selectStock={selectStock}
              onClickColor={(e, { index: colorIndex }) => {
                setSelectStock((prev) => ({
                  ...prev,
                  stock,
                  colorIndex,
                }));
              }}
              onDelete={() => removeFromCombination(stock.id)}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default LeftSide;
