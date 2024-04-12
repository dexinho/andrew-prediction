import Order from "@/components/Order";

const Home = () => {
  const orderTitle = `Order details`;

  return (
    <div className="flex flex-col items-center justify-center border h-full">
      <Order title={orderTitle} />
    </div>
  );
};

export default Home;
