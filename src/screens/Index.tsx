import { Outlet } from "react-router-dom";

function Index() {
  return (
    <>
      <div>Index header PAGE</div>
      <Outlet />
      <div>Index footer PAGE</div>
    </>
  );
}

export default Index;
