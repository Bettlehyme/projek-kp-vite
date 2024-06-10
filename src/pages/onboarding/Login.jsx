import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {


    const [password, setPassword] = useState("");

    const [visible, setVisible] = useState(false);

    function handleClick() {
        window.location.replace("/panel/terminal-in-out")
    }

    return (
        <div className="w-full h-screen lg:grid  lg:grid-cols-2 ">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <img src="/logo-april.png" alt="image" width='140' height="140" className="lg:absolute lg:left-6 lg:top-6 md:relative" />
                        <h1 className="text-2xl font-bold">Terminal Inventory System</h1>
                        <h1 className="text-1xl font-medium text-muted-foreground">Login</h1>

                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            {/* <Label htmlFor="email">Username</Label> */}
                            <Input
                                id="email"
                                type="email"
                                placeholder="Username"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                {/* <Label htmlFor="password">Password</Label> */}
                                {/* <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link> */}
                            </div>

                            <Input value={password} id="password" type={visible ? "text" : "password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />


                        </div>

                        <Button type="submit" onClick={handleClick} className="w-full">
                            Login
                        </Button>


                    </div>

                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <img
                    src="login-photo.jpg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}