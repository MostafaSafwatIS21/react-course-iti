import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const inputClasses =
  "rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20";
const inputErrorClasses =
  "border-destructive/70 text-destructive focus-visible:border-destructive focus-visible:ring-destructive/20";
const errorTextClasses = "mt-1 text-xs font-medium text-destructive";

function ErrorMessage({ message }) {
  if (!message) {
    return null;
  }

  return (
    <span className="flex items-start gap-2">
      <svg
        aria-hidden="true"
        className="mt-0.5 h-3.5 w-3.5 text-destructive"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-10.5a.75.75 0 011.5 0v4a.75.75 0 01-1.5 0v-4zm.75 8.5a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      <span>{message}</span>
    </span>
  );
}

export function SignupForm({ ...props }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  // const password = watch("password");
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    navigate("/products");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4 py-12">
      <Card
        className="w-full max-w-lg rounded-lg border border-border/60"
        {...props}
      >
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup className="gap-6">
              <Field>
                <FieldLabel htmlFor="name"> Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className={`${inputClasses} ${errors.name ? inputErrorClasses : ""}`}
                  {...register("name", { required: "Name is required" })}
                />
                <FieldError className={errorTextClasses}>
                  <ErrorMessage message={errors.name?.message} />
                </FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className={`${inputClasses} ${errors.email ? inputErrorClasses : ""}`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <FieldError className={errorTextClasses}>
                  <ErrorMessage message={errors.email?.message} />
                </FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="username">username</FieldLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="John Doe"
                  className={`${inputClasses} ${errors.username ? inputErrorClasses : ""}`}
                  {...register("username", {
                    required: "Username is required",
                    pattern: {
                      value: /^\S+$/,
                      message: "Username cannot contain spaces",
                    },
                  })}
                />
                <FieldError className={errorTextClasses}>
                  <ErrorMessage message={errors.username?.message} />
                </FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  className={`${inputClasses} ${errors.password ? inputErrorClasses : ""}`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#]).{8,}$/,
                      message:
                        "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character",
                    },
                  })}
                />
                <FieldError className={errorTextClasses}>
                  <ErrorMessage message={errors.password?.message} />
                </FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="confirm-password">
                  Confirm Password
                </FieldLabel>
                <Input
                  id="confirm-password"
                  type="password"
                  className={`${inputClasses} ${errors.confirmPassword ? inputErrorClasses : ""}`}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                <FieldError className={errorTextClasses}>
                  <ErrorMessage message={errors.confirmPassword?.message} />
                </FieldError>
              </Field>
              <FieldGroup className="gap-3">
                <Field>
                  <Button className="w-full bg-black text-white" type="submit">
                    Register
                  </Button>
                </Field>
              </FieldGroup>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
