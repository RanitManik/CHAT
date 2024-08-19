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
import { useFirebase } from "@/context/Firebase.context.jsx";
import { OAuthButtonUi } from "@/components/ui/OAuthButton.ui.jsx";
import { toast } from "sonner";
import useErrorHandlerComponent from "@/hooks/LoginErrorHandler.hook.jsx";
import LinkUi from "../ui/Link.ui.jsx";
import { LoaderCircle } from "lucide-react";

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
    const [loading, setLoading] = useState(false);

    const handleError = (error) => {
        const errorMessage = generateErrorMessage(error.code);
        toast.error(errorMessage);
        setLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userCredential = await signInUserWithEmailAndPassword(
                email,
                password,
            );
            const user = userCredential.user;
            console.log("Successfully Signed in!", user);
            toast.success("Sign-in successful! Welcome back.");
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            <div className="grid min-h-svh place-items-center px-4">
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
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <Button
                                disabled={loading}
                                type="submit"
                                className="w-full transition-none"
                            >
                                {loading ? (
                                    <LoaderCircle className="animate-spin" />
                                ) : (
                                    "Login"
                                )}
                            </Button>
                        </form>
                        <div className="mt-4 grid grid-cols-4 gap-2">
                            <OAuthButtonUi
                                provider="google"
                                onClick={signInUserWithGoogle}
                                onError={handleError}
                                disabled={loading}
                            />
                            <OAuthButtonUi
                                provider="microsoft"
                                onClick={signInUserWithMicrosoft}
                                onError={handleError}
                                disabled={loading}
                            />
                            <OAuthButtonUi
                                provider="github"
                                onClick={signInUserWithGithub}
                                onError={handleError}
                                disabled={loading}
                            />
                            <OAuthButtonUi
                                provider="facebook"
                                onClick={signInUserWithFacebook}
                                onError={handleError}
                                disabled={loading}
                            />
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <LinkUi to="/register">Sign up</LinkUi>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
