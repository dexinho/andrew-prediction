import Form from "@/components/Form";

const Home = () => {
  const orderTitle = `Order details`;

  return (
    <div className="flex flex-col items-center justify-center border h-full">
      <Form title={orderTitle} />
    </div>
  );
};

export default Home;
