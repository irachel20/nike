import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SignUpDataType, signUpService } from "../../api/services/auth";
import { NikeForSign } from "@/components/svgs";
import { Button, InputText } from "@/components";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import Link from "next/link";
import Cookies from "js-cookie";

const SignUpSchema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required()
      .matches(/^\w{6,30}$/gm, "minimum characters is 6"),
    email: yup.string().required().email(),
    password: yup
      .string()
      .required()
      .min(6, "password must be atleast 6 characters"),
  })
  .required();

export default function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDataType>({
    resolver: yupResolver(SignUpSchema),
  });

  return (
    <main className="flex mt-4 flex-col gap-12 items-center ">
      <div className="mt-6 gap-6 flex flex-col items-center">
        <NikeForSign />
        <h1 className="text-sm text-center font-medium">
          BECOME A NIKE MEMBER
        </h1>
        <p className="text-xs md:w-2/4 xs:w-3/4 lg:w-2/5 text-center text-gray-400">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </p>
      </div>
      <form
        className="flex flex-col items-center mb-12 gap-3 md:w-1/2 xs:w-3/4 xl:w-1/4"
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          const res = await signUpService(data);
          console.log(res);
          // Cookies.set("signupToken", "sign up token");
          // setCookie("token", "sign up token");
          toast.dark("you're account created succussfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progressStyle: { backgroundColor: "#ffffff" },
          });

          setTimeout(() => {
            router.replace("/auth/signIn");
          }, 3500);
        })}
      >
        <InputText
          className={`${
            Boolean(errors.username?.message)
              ? "border border-red-200 placeholder:text-red-300 text-red-300"
              : "border text-gray-500 border-gray-200"
          }`}
          {...register("username")}
          placeholder="username"
          helpertext={
            Boolean(errors.username?.message)
              ? `${errors.username?.message}*`
              : ""
          }
        />
        <InputText
          className={`${
            Boolean(errors.email?.message)
              ? "border border-red-200 placeholder:text-red-300 text-red-300"
              : "border text-gray-500 border-gray-200"
          }`}
          {...register("email")}
          placeholder="email"
          helpertext={
            Boolean(errors.email?.message) ? `${errors.email?.message}*` : ""
          }
        />
        <InputText
          className={`${
            Boolean(errors.password?.message)
              ? "border border-red-200 placeholder:text-red-300 text-red-300"
              : "border text-gray-500 border-gray-200"
          }`}
          {...register("password")}
          placeholder="password"
          helpertext={
            Boolean(errors.password?.message)
              ? `${errors.password?.message}*`
              : ""
          }
        />
        <Button
          className="w-full hover: hover:bg-neutral-700 mt-2 py-3 rounded-sm text-sm"
          type="submit"
        >
          JOIN US
        </Button>
        <Link
          href={"http://localhost:3000/auth/signIn"}
          className="text-xs mb-8 mt-1.5 mx-auto hover:underline hover: hover:text-gray-500 text-gray-300 cursor-pointer"
        >
          Already have an account? Sign In
        </Link>
      </form>
    </main>
  );
}
