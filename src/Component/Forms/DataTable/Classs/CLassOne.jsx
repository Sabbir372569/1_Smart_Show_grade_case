import { ClassData1 } from "./ClassData";

export function ClassOne() {

    const class1 = ClassData1.map(classOne =>
      <>
        <tr className="border-b border-[#7ECEB529]">
          <td className="p-5 text-sm md:text-xl">{classOne.id}</td>
          <td className="p-5 text-sm md:text-xl">
            <div className="flex space-x-3 items-center">
              <img
                className="w-8 h-8 rounded-full"
                src={classOne.image}
                width="32"
                height="32"
                alt={classOne.name}
              />
              <span className="whitespace-nowrap"
              >{classOne.name}</span
              >
            </div>
          </td>
          <td className="p-5 text-sm md:text-xl text-center">
            {classOne.scores}
          </td>
          <td className="p-5 text-sm md:text-xl text-center">
            {classOne.percentage}%
          </td>
        </tr>
      </>
        );
      return(
        <>{class1}</>
      ) 
  }
  