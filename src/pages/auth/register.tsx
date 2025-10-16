// src/pages/auth/Register.tsx
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import { useNavigate, Link } from "react-router-dom";
import { 
  FaPhone, 
  FaHome, 
  FaEnvelope, 
  FaLock, 
  FaSpinner, 
  FaUser,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaRocket
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRegisterUserMutation } from "../../Features/users/userAPI";

// ✅ Types for form
type RegisterInputs = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  contact_phone?: string;
  address?: string;
};

// ✅ Yup validation schema
const schema: yup.ObjectSchema<RegisterInputs> = yup.object({
  firstname: yup.string().max(50).required("First name is required"),
  lastname: yup.string().max(50).required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "At least 8 characters")
    .matches(/[a-z]/, "Must contain lowercase letter")
    .matches(/[A-Z]/, "Must contain uppercase letter")
    .matches(/[0-9]/, "Must contain number")
    .matches(/[!@#$%^&*]/, "Must contain special character")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
  contact_phone: yup.string().max(20).optional(),
  address: yup.string().max(255).optional(),
});

// ✅ Password strength indicator
const PasswordStrength = ({ password }: { password: string }) => {
  const getStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[!@#$%^&*]/.test(pass)) score++;
    return score;
  };

  const strength = getStrength(password);
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong", "Very Strong"];
  const strengthColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-emerald-600"
  ];

  return (
    <div className="mt-2">
      <div className="flex space-x-1 mb-1">
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full transition-all duration-500 ${
              index <= strength ? strengthColors[strength] : "bg-gray-200"
            }`}
          />
        ))}
      </div>
      <p className={`text-xs font-medium ${
        strength === 0 ? "text-red-600" :
        strength <= 2 ? "text-orange-600" :
        strength <= 3 ? "text-blue-600" : "text-green-600"
      }`}>
        {password ? strengthLabels[strength] : "Enter password"}
      </p>
    </div>
  );
};

function Register() {
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<RegisterInputs>>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm<RegisterInputs>({
    resolver: yupResolver(schema),
  });

  const watchedPassword = watch("password", "");
  const watchedEmail = watch("email", "");

  // ✅ Step validation
  const validateStep = async (step: number): Promise<boolean> => {
    switch (step) {
      case 1:
        return await trigger(["firstname", "lastname", "email"]);
      case 2:
        return await trigger(["password", "confirmPassword"]);
      case 3:
        return await trigger(["contact_phone", "address"]);
      default:
        return true;
    }
  };

  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    try {
      await registerUser({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
        contact_phone: data.contact_phone,
        address: data.address,
        role: "user",
      }).unwrap();

      toast.success("🎉 Registration successful! Please verify your email.");
      setTimeout(() => {
        navigate("/auth/verify", { state: { email: data.email } });
      }, 1500);
    } catch (error: any) {
      toast.error(error?.data?.message || "Registration failed.");
    }
  };

  // ✅ Floating particles background effect
  const FloatingParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-300 rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingParticles />
      
      {/* Animated Background Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 rounded-full blur-xl opacity-30 animate-pulse delay-500"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20"
      >
        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-bold tracking-tight flex items-center gap-2"
              >
                <FaRocket className="text-yellow-300" />
                NovaMart
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="opacity-90 text-lg mt-2"
              >
                Join thousands of happy shoppers
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-right"
            >
              <div className="text-sm opacity-80">Step {currentStep} of 3</div>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      step === currentStep
                        ? "bg-white"
                        : step < currentStep
                        ? "bg-green-300"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-gray-200">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-pink-500"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / 3) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Form */}
        <div className="p-8">
          <motion.h2
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-800 mb-2"
          >
            {currentStep === 1 && "Personal Information"}
            {currentStep === 2 && "Security Setup"}
            {currentStep === 3 && "Additional Details"}
          </motion.h2>
          <p className="text-gray-600 mb-8">
            {currentStep === 1 && "Tell us a bit about yourself"}
            {currentStep === 2 && "Secure your account with a strong password"}
            {currentStep === 3 && "Almost there! Add some optional details"}
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <InputField
                    label="First Name"
                    icon={<FaUser className="h-5 w-5 text-gray-400" />}
                    fieldProps={register("firstname")}
                    error={errors.firstname?.message}
                    placeholder="Enter your first name"
                  />
                  <InputField
                    label="Last Name"
                    icon={<FaUser className="h-5 w-5 text-gray-400" />}
                    fieldProps={register("lastname")}
                    error={errors.lastname?.message}
                    placeholder="Enter your last name"
                  />
                  <InputField
                    label="Email"
                    icon={<FaEnvelope className="h-5 w-5 text-gray-400" />}
                    fieldProps={register("email")}
                    error={errors.email?.message}
                    placeholder="your.email@example.com"
                    colSpan={2}
                  />
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <InputField
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      icon={<FaLock className="h-5 w-5 text-gray-400" />}
                      fieldProps={register("password")}
                      error={errors.password?.message}
                      placeholder="Create a strong password"
                      trailingIcon={
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showPassword ? (
                            <FaEyeSlash className="h-5 w-5 text-gray-400" />
                          ) : (
                            <FaEye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      }
                    />
                    <PasswordStrength password={watchedPassword} />
                  </div>

                  <InputField
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    icon={<FaShieldAlt className="h-5 w-5 text-gray-400" />}
                    fieldProps={register("confirmPassword")}
                    error={errors.confirmPassword?.message}
                    placeholder="Confirm your password"
                    trailingIcon={
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <FaEyeSlash className="h-5 w-5 text-gray-400" />
                        ) : (
                          <FaEye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    }
                  />

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <FaShieldAlt />
                      Password Requirements
                    </h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li className={watchedPassword.length >= 8 ? "text-green-600" : ""}>
                        • At least 8 characters long
                      </li>
                      <li className={/[a-z]/.test(watchedPassword) ? "text-green-600" : ""}>
                        • One lowercase letter
                      </li>
                      <li className={/[A-Z]/.test(watchedPassword) ? "text-green-600" : ""}>
                        • One uppercase letter
                      </li>
                      <li className={/[0-9]/.test(watchedPassword) ? "text-green-600" : ""}>
                        • One number
                      </li>
                      <li className={/[!@#$%^&*]/.test(watchedPassword) ? "text-green-600" : ""}>
                        • One special character
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <InputField
                    label="Contact Phone"
                    icon={<FaPhone className="h-5 w-5 text-gray-400" />}
                    fieldProps={register("contact_phone")}
                    error={errors.contact_phone?.message}
                    placeholder="+1 (555) 123-4567"
                  />
                  <InputField
                    label="Address"
                    icon={<FaHome className="h-5 w-5 text-gray-400" />}
                    fieldProps={register("address")}
                    error={errors.address?.message}
                    placeholder="Your delivery address"
                  />
                  
                  {/* Benefits Section */}
                  <div className="md:col-span-2 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                      <FaRocket className="text-green-600" />
                      Welcome to NovaMart! Here's what you get:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-green-700">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Fast & Free Delivery
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Exclusive Member Deals
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        24/7 Customer Support
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Easy Returns & Refunds
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleBack}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  currentStep === 1
                    ? "invisible"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Back
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    <>
                      <FaRocket />
                      Complete Registration
                    </>
                  )}
                </button>
              )}
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline transition-colors duration-200"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ✅ Enhanced Input Field Component
type InputFieldProps = {
  label: string;
  icon: React.ReactNode;
  fieldProps: any;
  error?: string;
  type?: string;
  colSpan?: number;
  placeholder?: string;
  trailingIcon?: React.ReactNode;
};

function InputField({
  label,
  icon,
  fieldProps,
  error,
  type = "text",
  colSpan,
  placeholder,
  trailingIcon,
}: InputFieldProps) {
  const colClass = colSpan === 2 ? "md:col-span-2" : "";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={colClass}
    >
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          {...fieldProps}
          placeholder={placeholder}
          className={`pl-10 pr-10 w-full rounded-xl border-2 transition-all duration-300 focus:ring-2 focus:ring-opacity-20 ${
            error
              ? "border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50"
              : "border-gray-200 focus:border-indigo-500 focus:ring-indigo-200 hover:border-gray-300"
          } p-3.5 shadow-sm`}
        />
        {trailingIcon && trailingIcon}
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 text-sm text-red-600 font-medium flex items-center gap-1"
          >
            ⚠️ {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Register;