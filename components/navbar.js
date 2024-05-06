import { useState } from "react";

import Link from "next/link";

import Leave from "@/icon/leave";
import Logo from "@/icon/logoSvg";
import User from "@/icon/user";
import { Form, FormControl } from "react-bootstrap";

import NavItem from "@/components/navItem";
import navData from "@/data/navData";

import { useCombination } from "@/hook/provider/combinationProvider";

const Bar = () => (
  <span
    className="border-end border-2 me-3"
    style={{ height: "1.8rem" }}
  ></span>
);

const Navbar = ({ isLogin, login, logout }) => {
  const { combination } = useCombination()

  const getItemsInit = () =>
    new Map(Object.keys(navData).map((name) => [name, false]));

  const [itemsOpen, setItemsOpen] = useState(getItemsInit);
  const toggleOpen = (name) => {
    setItemsOpen((prev) => {
      return prev.get(name) ? getItemsInit() : getItemsInit().set(name, true);
    });
  };

  return (
    <div
      className="hstack ps-6 pe-2 border-bottom border-2 border-linegrey fs-6-sm text-textgrey"
      style={{ height: "var(--nav-height)" }}
    >
      <Logo width={48} />
      {isLogin && (
        <>
          <span className="fw-bold ms-10">展示模式</span>
          <Form.Switch className="ms-4 fs-1 model-switch"></Form.Switch>
          <Bar />
          <span className="fw-bold">當前組合</span>
          <FormControl
            className="ms-4 w-25 text-darkblue text-indent-5 uni-height fs-6-sm"
            defaultValue={combination.name}
          />
          <NavItem
            data={navData["operation"]}
            isShow={itemsOpen.get("operation")}
            setShow={() => toggleOpen("operation")}
            className="ms-4"
          />
        </>
      )}
      <NavItem
        data={navData["changeEnv"]}
        isShow={itemsOpen.get("changeEnv")}
        setShow={() => toggleOpen("changeEnv")}
        className="ms-auto"
      />
      <Bar />
      {isLogin ? (
        <>
          <NavItem
            data={navData["workMenu"]}
            isShow={itemsOpen.get("workMenu")}
            setShow={() => toggleOpen("workMenu")}
          />
          <NavItem
            data={navData["workCenter"]}
            thin
            isShow={itemsOpen.get("workCenter")}
            setShow={() => toggleOpen("workCenter")}
            button={
              <div
                className="text-textgrey hover-orange flex-center fs-6-sm mt-2 cursor-pointer"
                onClick={logout}
              >
                <Leave className="hover-orange me-2" />
                登出
              </div>
            }
          />
        </>
      ) : (
        <Link
          href="#"
          className="pe-5 flex-center text-darkblue"
          onClick={login}
        >
          <User className="me-2" />
          <span className="fw-bold">登入</span>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
