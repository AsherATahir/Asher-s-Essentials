import BodyGlobals from "../components/BodyGlobals";
import Navbar from "../components/Navbar";
import CopyOne from "../components/CopyOne";
import Selections from "../components/Selections";
import { item } from "../Interfaces/interface";

interface Props {
  itemList: item[];
  loading: boolean;
}

function Home({ itemList, loading }: Props) {
  return (
    <>
      <Navbar />
      <BodyGlobals />
      <CopyOne />
      <Selections itemList={itemList} loading={loading} />
    </>
  );
}

export default Home;
