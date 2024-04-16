import Link from "next/link";

type NavlinkProps = {
  link: {
    path: string;
    title: string;
  };
};

const Navlink = ({ link }: NavlinkProps) => {
  return <Link className="hover:bg-black w-32 h-full flex items-center justify-center text-white" href={link.path}>{link.title}</Link>;
};

export default Navlink;
