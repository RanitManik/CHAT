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
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFirebase } from "@/context/firebase.context.jsx";
import { OAuthButtonComponent } from "@/components/block/OAuthButton.component.jsx";
import { toast, Toaster } from "sonner";
import useErrorHandlerComponent from "@/hooks/LoginErrorHandler.hook.jsx";

export function LoginFormComponent() {
  const {
    signInUserWithEmailAndPassword,
    signInUserWithGoogle,
    signInUserWithGithub,
    signInUserWithFacebook,
    signInUserWithMicrosoft,
  } = useFirebase();
  const { generateErrorMessage } = useErrorHandlerComponent();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleError = (error) => {
    const errorMessage = generateErrorMessage(error.code);
    toast.error(errorMessage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signInPromise = async () => {
      const userCredential = await signInUserWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      console.log("Successfully Signed in!", user);
    };

    toast.promise(signInPromise, {
      loading: "Loading...",
      success: "Sign-in successful",
      error: (error) => generateErrorMessage(error.code),
    });
  };

  return (
    <>
      <div className="grid min-h-svh place-items-center">
        <Card className="mx-auto w-full max-w-sm self-center">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
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
              Don&apos;t have an account?{" "}
              <Link to="/register" className="font-semibold underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <Toaster richColors />
    </>
  );
}
