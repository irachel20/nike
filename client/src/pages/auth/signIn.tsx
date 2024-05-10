import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SignInDataType, signInService } from "../../api/services/auth";
import Cookies from "js-cookie";
import { NikeForSign } from "@/components/svgs";
import { Button, InputText } from "@/components";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignInSchema = yup
  .object()
  .shape({
    email: yup.string().required().email(),
    password: yup
      .string()
      .required()
      .min(6, "password must be atleast 6 characters"),
  })
  .required();

export default function SignIn() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInDataType>({
    resolver: yupResolver(SignInSchema),
  });
  return (
    <main className="flex mt-9 flex-col gap-10 items-center ">
      <div className="mt-6 gap-6 flex flex-col items-center">
        <NikeForSign />
        <h1 className="text-sm text-center font-medium w-2/5">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h1>
      </div>
      <form
        className="flex flex-col items-center mb-12 gap-2 md:w-1/2 xs:w-3/4 xl:w-1/4"
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          const res = await signInService(data);
          console.log(res);
          Cookies.set("token", res.token, {
            expires: 2,
          });
          // toast.success("you're succussfully signed in");
          // router.refresh();
          
          toast.dark("you're succussfully signed in", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progressStyle: { backgroundColor: '#ffffff' },
          });

          setTimeout(() => {
            router.refresh();
          }, 3500);
        }
        )}
      >
        <InputText
          className={`mb-2 ${
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
        <p className="text-xs ms-auto mb-6 hover: hover:text-gray-500 text-gray-300 cursor-pointer">
          forgotten your password?
        </p>
        <Button
          className="w-full py-3 hover: hover:bg-neutral-700 text-sm rounded-sm"
          type="submit"
        >
          SIGN IN
        </Button>
        <Link
          href={"http://localhost:3000/auth/signUp"}
          className="text-xs mb-8 mt-1.5 mx-auto  hover:underline hover:text-gray-500 text-gray-300 cursor-pointer"
        >
          Not a Member? Join Us
        </Link>
      </form>
    </main>
  );
}
