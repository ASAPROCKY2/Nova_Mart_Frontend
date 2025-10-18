import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useVerifyUserMutation } from "../../Features/users/userAPI";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

// 🧩 Type for form inputs
type VerifyInputs = {
  email: string;
  code: string;
};

// ✅ Validation schema
const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  code: yup
    .string()
    .matches(/^\d{6}$/, "Code must be a 6 digit number")
    .required("Verification code is required"),
});

const VerifyUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailFromState = location.state?.email || "";

  // ✅ RTK Query mutation
  const [verifyUser, { isLoading }] = useVerifyUserMutation();

  // ✅ React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyInputs>({
    resolver: yupResolver(schema),
    defaultValues: { email: emailFromState },
  });

  // ✅ Submit handler
  const onSubmit: SubmitHandler<VerifyInputs> = async (data) => {
    try {
      const response = await verifyUser(data).unwrap();
      console.log("✅ Verification response:", response);

      toast.success("Account verified successfully!");
      setTimeout(() => {
        navigate("/login", { state: { email: data.email } });
      }, 2000);
    } catch (error: any) {
      console.error("❌ Verification error:", error);
      toast.error("Verification failed. Please check your code and try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Verify Your Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            readOnly={!!emailFromState}
            className="input border border-gray-300 rounded w-full p-2 focus:ring-2 focus:ring-blue-500 text-lg"
          />
          {errors.email && (
            <span className="text-red-600 text-sm">
              {errors.email.message}
            </span>
          )}

          {/* Code Field */}
          <input
            type="text"
            {...register("code")}
            placeholder="6 Digit Code"
            maxLength={6}
            className="input border border-gray-300 rounded w-full p-2 focus:ring-2 focus:ring-blue-500 text-lg"
          />
          {errors.code && (
            <span className="text-red-600 text-sm">{errors.code.message}</span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading loading-spinner text-primary" />
                Verifying...
              </>
            ) : (
              "Verify"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyUser;
