import React from "react";
import { BsStopwatch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { BiCube } from "react-icons/bi";
const style = {
  wrapper: "flex sm:hidden  justify-between flex-col",
  centerDiagram: "w-[19%] flex flex-col items-center",
  heading: "text-[#0647D4] text-xl ml-3 tracking-widest",
  endHeading: "text-sm text-gray-600  font1 my-4 px-5",
  content: "w-[75%]",
  icon: "text-5xl md:text-6xl  text-[#0647D4] font-bold my-3",
  leftPara1: "text-sm text-gray-600 font1 tracking-normal pt-16",
  leftPara2:
    "text-sm text-gray-600 font1 tracking-normal mt-8 sm:mt-36 md:mt-42 lg:mt-48",
  rightPara1:
    "text-sm text-gray-600 font1 tracking-normal mt-8 sm:mt-36 md:mt-30 lg:mt-36",
  rightPara2:
    "text-sm text-gray-600 font1 tracking-normal mt-6 sm:mt-48 md:mt-42 lg:mt-56 ",
};
const MobileIntroduction = () => {
  return (
    <div className={style.wrapper}>
      <section className="flex flex-col items-center w-[19%]">
        <p className="h-[4vh] border-[1px] border-[#0647D4]"></p>
      </section>
      <p className={style.heading}>КАК ДА ПОРЪЧАМ</p>{" "}
      <div className="flex">
        {/* adding the icons of the introduction */}
        <section className={style.centerDiagram}>
          <p className="h-[5vh] border-[1px] border-[#0647D4]"></p>
          <BsStopwatch className={style.icon} />
          <p className="h-[15vh] border-[1px] border-[#0647D4]"></p>
          <GoLocation className={style.icon} />
          <p className="h-[15vh] border-[1px] border-[#0647D4]"></p>
          <AiOutlineStar className={style.icon} />
          <p className="h-[15vh] border-[1px] border-[#0647D4]"></p>
          <BiCube className={style.icon} />
          <p className="h-[8vh] border-[1px] border-[#0647D4]"></p>
        </section>
        {/* adding the content of the introduction */}
        <section className={style.content}>
          {/* <p className={style.leftPara1}>
            
          </p> */}
          {/* <p className={style.leftPara2}>
            RaceBox uses the latest generation GPS. This provides an outstanding
            accuracy and positioning - as low as 25cm running on the internal
            antenna. Combined with the purpose-built hardware, RaceBox has
            mind-blowing performance - over 99.5% measurement accuracy to a
            hundred of a second, compared to official lap/drag timing equipment.
          </p>{" "}
          <p className={style.rightPara1}>
            Almost no other device on the market at the moment can offer you the
            same functionality as RaceBox. It also provides you with the easiest
            and most intuitive user interface as well as the most ergonomic
            shape and form-factor. All of this in a price range significantly
            lower than anything else in this area.
          </p>
          <p className={style.rightPara2}>
            A key goal in developing and designing our products was the ease of
            use. We wanted to have all the features that you would need while
            keeping it as simple as possible. That was not an easy task,
            considering it includes both a "Lap Timer" (for track use) and "Drag
            Meter" (for drag use) functionality at an unmatched price point.
          </p>*/}
        </section>
      </div>
      {/* <p className={style.endHeading}>
        The best part? All that comes in two different "flavours" depending on
        your needs!
      </p>  */}
      <section className="flex flex-col w-[19%] items-center">
        <p className="h-[3vh] border-[1px] border-[#0647D4]"></p>
      </section>
    </div>
  );
};

export default MobileIntroduction;
