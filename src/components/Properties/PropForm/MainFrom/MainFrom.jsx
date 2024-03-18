import { useLocation } from "react-router-dom";

export default function MainFrom() {
  const { pathname } = useLocation();
  const Info = [
    {
      id: "firstName",
      label: "First Name",
      placeholder: "Enter First Name",
    },
    {
      id: "LastName",
      label: "Last Name",
      placeholder: "Enter Last Name",
    },
    {
      id: "UserEmail",
      label: " Email",
      placeholder: "Enter Email",
    },
    {
      id: "UserPhone",
      label: "Phone Number",
      placeholder: "Enter hone Number",
    },
  ];
  const dataChoices = [
    {
      title: "Select Preferred Location",
      name: "Preferred Location",
      id: "SelectedLocation",
    },
    {
      title: "Select Property Type",
      name: "Property Type",
      id: "Selected_Pro_Ty",
    },
    {
      title: "Select No.of Bathrooms",
      name: "No.of Bathrooms",
      id: "Selected_Bathrooms",
    },
    {
      title: "Select No.of Bedrooms",
      name: "No.of Bedrooms",
      id: "Selected_Bedrooms",
    },
  ];
  return (
    <>
      <div className="lg:mx-20 mx-4 border border-[#242424] rounded-xl my-Shadow ">
        <div className="grid xl:grid-flow-col md:grid-cols-12   pt-5 pl-5 pr-5 gap-3">
          {Info.map((item, index) => {
            return (
              <>
                <div
                  key={index + Math.random()}
                  className="flex flex-col ml-1 lg:col-span-3 md:col-span-6"
                >
                  <label
                    htmlFor={item.id}
                    className="text-white font-medium pl-2"
                  >
                    {item.label}
                  </label>
                  <input
                    id={item.id}
                    type="text"
                    placeholder={item.placeholder}
                    className=" rounded-lg border-2 my-2 bg-[#242424]  border-[#242424]  p-2  pl-4 focus:outline-none text-white placeholder:text-[#9999]"
                  />
                </div>
              </>
            );
          })}
        </div>
        <div className="  rounded-b-xl lg:rounded-xl  pt-5 pl-5 pr-5  grid xl:grid-flow-col gap-4 md:grid-cols-12  justify-stretch">
          { pathname == "/contact" ? "" : dataChoices.map((item, index) => {
            return (
              <>
                <div
                  key={index + Math.random()}
                  className="mainColor   rounded-xl lg:col-span-3 md:col-span-6 "
                >
                  <label
                    htmlFor={item.id}
                    className="text-white font-medium pl-2"
                  >
                    {item.name}
                  </label>
                  <div className="b border-2 my-2 bg-[#242424]  border-[#242424] rounded-lg flex flex-col items-start  ">
                    <select
                      id={item.id}
                      className="select outline-none bg-[#242424]  focus:outline-none focus:border-0 focus:border-[#242424]   text-[#999] w-[95%]"
                    >
                      <option>{item.title}</option>
                      <option>Static </option>
                      <option>Static</option>
                    </select>
                  </div>
                </div>
              </>
            );
          })  }
        </div>
     { pathname == "/contact" ? "" : <div className="mainColor pt-5 pl-5 pr-5 pb-5  rounded-xl lg:col-span-3 md:col-span-6 ">
          <label htmlFor="budget" className="text-white font-medium pl-2">
            Select Your budget
          </label>
          <div className=" border-2 my-2 border-[#242424] rounded-lg flex flex-col items-start  ">
            <select
              id="budget"
              className="select outline-none  focus:outline-none focus:border-0 focus:border-[#242424]  bg-[#242424] text-[#999] w-full"
            >
              <option>$ 500,000</option>
              <option>$ 1.000,000 </option>
              <option>$ 2.000,000</option>
            </select>
          </div>
        </div>  } 
        <div className="mx-5">
          <label htmlFor="LeaveMessage" className="text-white font-medium pl-2">
            Message
          </label>
          <textarea
            id="LeaveMessage "
            className=" placeholder:text-[#999] mt-2 mb-5 rounded-lg p-4 w-full text-white  bg-[#242424] focus:outline-none border-2  border-[#242424]"
            placeholder="Enter your Message here ..."
          ></textarea>
        </div>
        <div className="flex justify-between mx-5 items-center pb-5 flex-col lg:flex-row gap-y-3">
          <div>
          <input id="check_Se_Mes" type="checkbox" className="accent-[#242424]" />
            <label htmlFor="check_Se_Mes" className=" text-[#999] ml-2">
            I agree with <span className="underline cursor-pointer"> Terms of Use</span>  and <span  className="underline cursor-pointer">Privacy Policy</span> 
            </label>
          </div>
        <p className="mr-0 lg:mr-4 py-4 lg:px-4 px-2 text-center  my-1 bg-[#703BF7] text-white w-[50%]   rounded-lg  lg:w-auto">
            Send your Message
            </p>
        </div>
      </div>
    </>
  );
}
