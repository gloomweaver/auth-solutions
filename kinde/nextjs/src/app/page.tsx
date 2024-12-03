import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function Home() {
  const session = getKindeServerSession();
  const roles = await session.getRoles();

  return <div>{JSON.stringify(roles)}</div>;
}

export default Home;

declare global {
  interface KindeAuth {
    permissions: "fasdf";
  }
}
