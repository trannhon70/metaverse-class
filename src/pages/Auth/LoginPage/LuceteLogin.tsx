import debateBtn from "@/assets/images/debate-btn.png";
import ButtonOne from "@/components/atom/ButtonOne";
import InputGroup from "@/components/atom/InputGroup";
import { Token } from "@/enums";
import { StatusMessage } from "@/enums/messageStatus";
import { setAuth } from "@/redux/slices/authSlice";
import { loginSchema } from "@/resolver/auth";
import { loginLuceteApi } from "@/services/apis/auth";
import { LoginType } from "@/types/auth";
import { setCookie } from "@/utils/cookie";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginPageType } from ".";

const LuceteLogin: React.FC<LoginPageType> = ({ changeMode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: (body: LoginType) => {
      return loginLuceteApi(body);
    },
    onSuccess: (res) => {
      const { data } = res;
      if (data.status_code === 409) {
        toast.error(data.message);
        return;
      }
      if (data.status_code === 200) {
        toast.success(data.message);
        const { token, name } = data.data;
        setCookie(Token.ACCESS_TOKEN, token);
        dispatch(setAuth({ name }));
        navigate("/");
        return;
      }
      toast.error(StatusMessage.ERROR);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (err: any) => {
      const res = err.response.data;
      if (res.status_code === 409) {
        toast.error(res.message);
        return;
      }
      toast.error(StatusMessage.ERROR);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitHandler = (data: LoginType) => {
    mutation.mutate(data);
  };
  return (
    <div className="relative w-full flex justify-center font-itim mt-[5%]">
      <div className="relative w-[1000px] aspect-[1.6] bg-gray-300 shadow-md">
        <div className="relative w-full h-full flex flex-col bg-[url('@/assets/backgrounds/lucete-login-bg.jpg')] bg-cover">
          <button
            className="absolute bottom-[15%] left-[11%]"
            onClick={changeMode}>
            <img
              src={debateBtn}
              alt="lucete-btn"
              className="w-[150px] object-cover"
            />
          </button>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="absolute w-[360px] ml-[42%] mt-[20%] flex flex-col gap-3">
            <InputGroup
              variant="dark"
              error={errors?.username?.message}
              {...register("username")}
              label="Username / Email"
              placeholder="example@gmail.com"
              type="text"
            />
            <InputGroup
              variant="dark"
              error={errors?.password?.message}
              {...register("password")}
              label="Password"
              placeholder="Your password"
              type="password"
            />
            <div className="mt-4 w-full flex flex-col justify-center">
              <ButtonOne
                isLoading={mutation.isLoading}
                disabled={mutation.isLoading}
                type="submit"
                text="Login"
                className="hover:bg-[#403248]"
              />
              <p className="text-lg text-[#8B8CA6] mx-auto mt-1">
                Are you new member? Let’s{" "}
                <Link to="/register">
                  <span className="text-[#85B8E1] underline">Register!</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LuceteLogin;
