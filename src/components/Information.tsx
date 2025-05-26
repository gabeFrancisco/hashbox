interface InformationProps {
  title: string;
  text: React.ReactNode | string;
}

const Information = (props: InformationProps) => {
  return (
    <div className="p-3 pt-1 my-5 text-gray-700 bg-gray-100 border-gray-100 rounded shadow-lg">
      <div className="flex flex-row justify-between py-1 cursor-pointer">
        <h3 className="text-2xl">{props.title}</h3>
        {/* <button
          className="px-2 py-1 text-gray-600 "
        >
        </button> */}
      </div>
      
        <p className="py-3 mt-1 mb-2 border-t border-gray-200 ">
          {props.text}
        </p>
      
    </div>
  );
};

export default Information;
