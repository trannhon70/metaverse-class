import bg from "@/assets/backgrounds/bg-homepage.jpg";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main className="relative w-full bg-red-300 font-itim">
      <img className="w-full object-cover" src={bg} alt="bg" />
      <div className="absolute left-1/2 -translate-x-1/2 top-[45%] flex flex-col items-center">
        <Button
          onClick={() => {
            navigate("/login");
          }}
          className="bg-[#E99EB0] hover:bg-[#E99EB0] px-20 text-white 3xl:text-[48px] text-[35px] 3xl:h-[82px] h-[60px] rounded-full shadow-md">
          Login
        </Button>
        <p className="text-[22px] mt-1">
          <span className="text-black opacity-[0.23]">
            Are you new member? Let’s
          </span>{" "}
          <Link to="/register">
            <span className="text-[#166AAE] underline">Register!</span>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default HomePage;
