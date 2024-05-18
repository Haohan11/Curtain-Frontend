import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Col, Row } from "react-bootstrap";

import Pagination from "@/components/pagination";
import ColorRadio from "@/components/input/colorRadio";
import { LoadingCircle } from "./LoadingCircle";
import Cross from "@/icon/cross";
import { transImageUrl } from "@/tool/lib";

import { useCombination } from "@/hook/provider/combinationProvider";

const StockList = ({ data, selectStock, setSelectStock }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const showMode =
    ["true", "false"].includes(router.query.showMode) &&
    JSON.parse(router.query.showMode);

  const { totalPages, data: list } = data;
  const { combination, addToCombination, loadCombination } = useCombination();

  useEffect(() => {
    const handleStart = (url) => {
      setIsLoading(true);
    };

    const handleEnd = (url) => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleEnd);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleEnd);
    };
  }, [router]);

  return (
    <div className="position-relative py-3 d-flex flex-column h-100 justify-content-between">
      {!isLoading ? (
        list.length > 0 ? (
          <Row
            className="w-100 row-cols-5 px-2 gy-0 justify-content-center mx-auto"
            style={{ maxWidth: "1080px" }}
          >
            {list.map((item) => (
              <Col key={item.id} style={{ maxWidth: "185px" }}>
                <div
                  className={`position-relative w-100 rounded-3 overflow-hidden shadow-sm${
                    showMode ? " cursor-pointer" : ""
                  }`}
                  {...(showMode && {
                    onClick: () => {
                      setSelectStock((prev) => ({
                        ...prev,
                        stock: item,
                        colorIndex: 0,
                      }));
                      loadCombination({
                        id: null,
                        stockList: [item],
                      });
                    },
                  })}
                  style={{ aspectRatio: "185 / 120" }}
                >
                  <Image
                    alt="stock image"
                    className="object-fit-cover"
                    sizes="185px"
                    src={
                      transImageUrl(item.colorList?.[0]?.stock_image) ||
                      "/image/xmas.jpg"
                    }
                    fill
                  />
                </div>
                <p className="py-2 m-0 text-center text-darkblue fw-bold">
                  {item.name ?? "Product Name"}
                </p>
                <div className="hstack justify-content-around">
                  {!item.colorList || item.colorList.length === 0 ? (
                    <span className="text-textgrey">目前沒有商品顏色</span>
                  ) : (
                    item.colorList.map((color, index) => (
                      <ColorRadio
                        key={`${selectStock.colorIndex}_${color.id}_${
                          item.id === selectStock.stock.id
                        }`}
                        name={"stock-color"}
                        src={transImageUrl(color.color_image)}
                        defaultChecked={
                          item.id === selectStock.stock?.id &&
                          index === selectStock.colorIndex
                        }
                        onClick={() => {
                          showMode &&
                            loadCombination({
                              id: null,
                              stockList: [item],
                            });
                          setSelectStock((prev) => ({
                            ...prev,
                            stock: item,
                            colorIndex: index,
                          }));
                        }}
                      />
                    ))
                  )}
                </div>
                {!showMode && (
                  <div className="flex-center fw-bold text-checkboxblue py-2">
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        (!combination.stockList ||
                          combination.stockList.length === 0) &&
                          setSelectStock((prev) => ({
                            ...prev,
                            stock: item,
                            colorIndex: 0,
                          }));
                        addToCombination(item);
                      }}
                    >
                      <Cross />
                      <span className="fs-6-sm ms-2">加入組合</span>
                    </div>
                  </div>
                )}
              </Col>
            ))}
          </Row>
        ) : (
          <Row className="h-100 p-12 w-100 g-0">
            <Col>
              <div className="h-100 border fs-5 flex-center rounded-2 bg-light">
                目前沒有商品資料
              </div>
            </Col>
          </Row>
        )
      ) : (
        <div className="h-100 flex-center">
          <LoadingCircle />
        </div>
      )}
      <Pagination
        key={router.query.page}
        totalPage={totalPages}
        defaultPage={router.query.page}
        onPageChange={(page) => {
          router.push({ query: { ...router.query, page } });
        }}
      />
    </div>
  );
};

export default StockList;
