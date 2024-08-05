import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFirebase } from "@/context/Firebase.context.jsx";
import { OAuthButtonComponent } from "@/components/block/OAuthButton.component.jsx";
import { toast, Toaster } from "sonner";
import useErrorHandlerComponent from "../../hooks/LoginErrorHandler.hook.jsx";
import LinkComponent from "./Link.component.jsx";

export function SignUpFormComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    signUpUserWithEmailAndPassword,
    signInUserWithGoogle,
    signInUserWithGithub,
    signInUserWithFacebook,
    signInUserWithMicrosoft,
    isLoggedIn,
  } = useFirebase();
  const navigate = useNavigate();
  const { generateErrorMessage } = useErrorHandlerComponent();

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const handleError = (error) => {
    const errorMessage = generateErrorMessage(error.code);
    toast.error(errorMessage);
    console.log(errorMessage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signUpPromise = async () => {
      await signUpUserWithEmailAndPassword(email, password);
    };

    toast.promise(signUpPromise(), {
      loading: "Creating your account...",
      success: "Account created successfully!",
      error: (error) => generateErrorMessage(error.code),
    });
  };

  return (
    <main>
      <div className="grid min-h-svh place-items-center px-4">
        <Card className="mx-auto w-full max-w-sm self-center">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    placeholder="Max"
                    required
                    value={firstName}
                    maxLength="15"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    placeholder="Robinson"
                    required
                    value={lastName}
                    maxLength="15"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  maxLength="50"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="password"
                  value={password}
                  maxLength="50"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full transition-none">
                Create an account
              </Button>
            </form>
            <div className="mt-4 grid grid-cols-4 gap-2">
              <OAuthButtonComponent
                provider="google"
                onClick={signInUserWithGoogle}
                onError={handleError}
              />
              <OAuthButtonComponent
                provider="microsoft"
                onClick={signInUserWithMicrosoft}
                onError={handleError}
              />
              <OAuthButtonComponent
                provider="github"
                onClick={signInUserWithGithub}
                onError={handleError}
              />
              <OAuthButtonComponent
                provider="facebook"
                onClick={signInUserWithFacebook}
                onError={handleError}
              />
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <LinkComponent to="/login">Sign in</LinkComponent>
            </div>
          </CardContent>
        </Card>
      </div>
      <Toaster richColors />
    </main>
  );
}
