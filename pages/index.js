import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Row as BSRow, Col } from "react-bootstrap";

import Navbar from "@/components/navbar";
import LeftSide from "@/components/leftSide";
// import SearchPannel from "@/components/searchPannel";
import StockList from "@/components/stockList";
import ExportTemplate from "@/components/exportTamplate";

// current only ref by exportTemplate
import productData from "@/data/productData";
import addClassName from "@/tool/addClassName";
import { getStockData, getEnvironmentData } from "@/tool/request";
import { transImageUrl } from "@/tool/lib";

import { useCombination } from "@/hook/provider/combinationProvider";

const SearchPannel = dynamic(
  async () => await import("@/components/searchPannel"),
  { ssr: false }
);

const Row = addClassName(BSRow, "g-0");

export default function Home({ stockData, envData }) {
  const [loginState, setLoginState] = useState(true);
  const login = () => setLoginState(true);
  const logout = () => setLoginState(false);

  const { combination, setCombination } = useCombination();
  const [envId, setEnvId] = useState(combination.environment_id ?? envData[0]["id"])

  const { name: envName, env_image } = envData.find(env => env.id === envId)

  // current select stock id
  const [product, setProduct] = useState(0);

  return (
    <>
      <Navbar
        isLogin={loginState}
        {...{
          login,
          logout,
          envData,
          envId,
          setEnvId,
        }}
      />
      <Row className="m-0" style={{ height: "var(--main-section-height)" }}>
        <Col sm={3} className="p-0 h-100 overflow-y-auto scroll">
          <LeftSide isLogin={loginState} data={combination.stockList} />
        </Col>
        <Col className="p-0 bg-linegrey">
          <div className="position-relative h-100">
            <Image
              alt="enviroment image"
              fill
              placeholder="blur"
              blurDataURL={transImageUrl(env_image) || "/image/livingroom.jpg"}
              sizes="70vw"
              src={transImageUrl(env_image) || "/image/livingroom.jpg"}
              className="object-fit-contain"
            />
          </div>
        </Col>
      </Row>
      <Row
        className="shadow-lg"
        style={{
          height:
            "calc(100vh - var(--nav-height) - var(--main-section-height))",
        }}
      >
        <Col sm={3} className="h-100">
          <SearchPannel />
        </Col>
        <Col className="h-100 overflow-y-auto">
          <StockList data={stockData} />
        </Col>
      </Row>
      <ExportTemplate
        data={{
          envName,
          product: (() => {
            const { data } = productData.find((data) => data.id === product);
            return data;
          })(),
        }}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const stockData = (await getStockData({ page: 1, size: 5 })) || {
    total: 0,
    totalPages: 0,
    list: [],
  };
  const envData = (await getEnvironmentData()) || [];

  return {
    props: {
      stockData,
      envData,
    },
  };
};
