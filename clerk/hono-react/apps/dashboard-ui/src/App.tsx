import { useEffect } from "react";
import { apiClient } from "./lib/apiClient";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function App() {
  useEffect(() => {
    apiClient.api.hello.$get().then((res) => console.log(res));
  }, []);

  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}

export default App;
