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
import { OAuthButtonUi } from "@/components/ui/OAuthButton.ui.jsx";
import { toast } from "sonner";
import useErrorHandlerComponent from "../../hooks/LoginErrorHandler.hook.jsx";
import LinkUi from "../ui/Link.ui.jsx";
import { sendEmailVerification } from "firebase/auth";
import { LoaderCircle } from "lucide-react";

export function SignUpFormComponent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const userCredential = await signUpUserWithEmailAndPassword(
                email,
                password,
            );

            if (userCredential?.user) {
                console.log("Account created successfully!");
                await sendEmailVerification(userCredential.user);
                console.log("Verification email sent successfully.");
                toast.success(
                    "Account created successfully! Verification email sent. Please check your inbox.",
                );
            } else {
                throw new Error("User creation failed.");
            }
        } catch (error) {
            const errorMessage = generateErrorMessage(
                error?.code || "auth/unknown",
            );
            toast.error(errorMessage);
            console.error("Sign-up error:", error);
        } finally {
            setLoading(false);
        }
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
                                    <Label htmlFor="first-name">
                                        First name
                                    </Label>
                                    <Input
                                        id="first-name"
                                        placeholder="Max"
                                        required
                                        value={firstName}
                                        maxLength="15"
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
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
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
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
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full transition-none"
                                disabled={loading}
                            >
                                {loading ? (
                                    <LoaderCircle className="animate-spin" />
                                ) : (
                                    "Create an account"
                                )}
                            </Button>
                        </form>
                        <div className="mt-4 grid grid-cols-4 gap-2">
                            <OAuthButtonUi
                                provider="google"
                                onClick={signInUserWithGoogle}
                                disabled={loading}
                            />
                            <OAuthButtonUi
                                provider="microsoft"
                                onClick={signInUserWithMicrosoft}
                                disabled={loading}
                            />
                            <OAuthButtonUi
                                provider="github"
                                onClick={signInUserWithGithub}
                                disabled={loading}
                            />
                            <OAuthButtonUi
                                provider="facebook"
                                onClick={signInUserWithFacebook}
                                disabled={loading}
                            />
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <LinkUi to="/login">Sign in</LinkUi>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
