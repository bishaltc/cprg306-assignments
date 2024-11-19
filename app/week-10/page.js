

"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    console.dir(user);

    return (
    <body className=" bg-slate-300">
        <main className="m-5  h-4/5">
            <header>
                <h1 className="text-3xl text-center ">Shopping List App</h1>
            </header>
            {user ? (
                <div>
                    <p>Welcome {user.displayName}!</p>
                    <p>{user.email}</p>
                    <img src={user.photoURL} className="w-10 h-10" />
                    <div className="bg-zinc-500 rounded px-2 py-1 mt-4 w-20">
                        <Link href="/week-10/shopping-list"> GO shopping</Link>
                    </div>
                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                    >Sign Out</button>
                </div>
            ) : (
                <div>
                    <button
                        type="button"
                        onClick={handleSignIn}
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                    >Sign In</button>
                </div>
            )}
        </main>
        </body>
    );

}