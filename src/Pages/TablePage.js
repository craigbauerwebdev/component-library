import Table from "../Components/Table/Table";

function TablePage() {
  const config = [
    {
      label: "Name",
      render: (col) => col.name,
    },
    {
      label: "Color",
      render: (col) => <div className={`p-3 m-2 ${col.color}`}></div>,
    },
    {
      label: "Score",
      render: (col) => col.score,
    },
    {
      label: "Double Score",
      render: (col) => col.score * 2,
    },
  ];
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 5 },
    { name: "Banana", color: "bg-yellow-500", score: 5 },
    { name: "Lime", color: "bg-green-500", score: 5 },
  ];
  const keyFn = (data) => {
    return data.name;
  };
  return (
    <div className="table">
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
