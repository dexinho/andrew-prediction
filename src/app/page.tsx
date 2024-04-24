import Form from "@/components/Form";

const HomePage = () => {
  const orderTitle = `Order details`;

  return (
    <div className="relative -top-16">
      <Form title={orderTitle} bgColor={"bg-slate-200"} />
    </div>
  );
};

export default HomePage;
