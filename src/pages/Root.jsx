import {
  Outlet,
  useNavigation,
} from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Root = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state !== "idle";

  return (
    <div>
      <Navbar />

      <main className="pt-16">
        <Outlet />
      </main>

      <Footer />

      {/* Page navigation loading */}
      {isPageLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Root;