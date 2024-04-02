import HomePage from "@/pages/Homepage";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const ProtectRoute = () => {
  // const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.authSlice
  ).isAuthenticated;

  // const { isLoading } = useQuery({
  //   queryFn: getCurrentUserApi,
  //   onSuccess: (res) => {
  //     const { data } = res;
  //     if (data.status_code === 200) {
  //       const { token, name } = data.data;
  //       setCookie(Token.ACCESS_TOKEN, token);
  //       dispatch(setAuth({ name }));
  //       return;
  //     }
  //     toast.error(StatusMessage.ERROR);
  //   },
  //   enabled: !isAuthenticated,
  // });

  // if (isLoading) return <ScreenLoading />;

  if (!isAuthenticated) return <HomePage />;
  return <Outlet />;
};

export default ProtectRoute;
