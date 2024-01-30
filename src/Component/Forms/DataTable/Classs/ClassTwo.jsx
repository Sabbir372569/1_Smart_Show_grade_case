import { ClassData2 } from "./ClassData";

export function ClassTwo() {
    const class2 = ClassData2.map(classTwo =>
      <>
        <tr className="border-b border-[#7ECEB529]">
          <td className="p-5 text-sm md:text-xl">{classTwo.id}</td>
          <td className="p-5 text-sm md:text-xl">
            <div className="flex space-x-3 items-center">
              <img
                className="w-8 h-8 rounded-full"
                src={classTwo.image}
                width="32"
                height="32"
                alt={classTwo.name}
              />
              <span className="whitespace-nowrap"
              >{classTwo.name}</span
              >
            </div>
          </td>
          <td className="p-5 text-sm md:text-xl text-center">
            {classTwo.scores}
          </td>
          <td className="p-5 text-sm md:text-xl text-center">
            {classTwo.percentage}%
          </td>
        </tr>
      </>
        );
      return(
        <>{class2}</>
      ) 
  }
  