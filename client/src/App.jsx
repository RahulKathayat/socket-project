import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import socketIO from "socket.io-client";
import {
	ClerkProvider,
	SignedIn,
	SignedOut,
	SignIn,
	SignUp,
	RedirectToSignIn,
} from "@clerk/clerk-react";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}
const socket = socketIO.connect(import.meta.env.VITE_URL);
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

const App = () => {
	return (
		<Router>
			<ClerkProvider publishableKey={clerkPubKey}>
				<SignedIn>
					<Home socket={socket} />
				</SignedIn>
				<SignedOut>
					<SignIn/>
				</SignedOut>


			</ClerkProvider>
		</Router>
	);
};

export default App;
