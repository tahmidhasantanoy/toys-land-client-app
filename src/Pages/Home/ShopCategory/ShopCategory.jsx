import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Test from "./Test";
import Title from "../../../Title/Title";
import RegularCars from "./RegularCars";
import SportsCars from "./SportsCars";

const ShopCategory = () => {

    const {user} = useContext(AuthContext)

    const [test,setTest] = useState([])
    const [police,setPolice] = useState([])
    const [regular,setRegular] = useState([])
    const [sport,setSport] = useState([])
  useEffect(() => {
    fetch(`https://toys-land-server-sandy.vercel.app/sub-cat?subCategory=Police`)
      .then((res) => res.json())
      .then((data) => setPolice(data))
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
  }, []);


  useEffect(() => {
    fetch(`https://toys-land-server-sandy.vercel.app/sub-cat?subCategory=Regular`)
      .then((res) => res.json())
      .then((data) => setRegular(data))
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
  }, []);


  useEffect(() => {
    fetch(`https://toys-land-server-sandy.vercel.app/sub-cat?subCategory=sports`)
      .then((res) => res.json())
      .then((data) => setSport(data))
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
  }, []);

console.log(regular);



  const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
      <>
        <div className="flex flex-wrap">
        <Title title={"Home"}/>
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row mx-12"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-cyan-800")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Police Cars
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-cyan-800")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Sports Cars
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-cyan-800")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Regular Cars
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-cyan-90 w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        police.map( single => <Test key={single._id} single={single}></Test>)
                    }
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {sport.map( single => <SportsCars key={single._id} single={single}></SportsCars>)}
                    </div>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {regular.map( single => <RegularCars key={single._id} single={single}></RegularCars>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <Tabs color="pink" />
    </div>
  );
};

export default ShopCategory;
