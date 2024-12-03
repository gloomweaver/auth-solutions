import { OrganizationSwitcher } from "@clerk/nextjs";
import { auth, clerkClient } from "@clerk/nextjs/server";

export default async function Home() {
  const client = await clerkClient();
  const user = await auth();
  const defaultOrg = await client.organizations.getOrganization({
    slug: "default",
  });

  // client.organizations.updateOrganizationMembership({
  //   organizationId: defaultOrg.id,
  //   userId: user.userId!,
  //   role: "admin",
  // });
  return (
    <div>
      <OrganizationSwitcher />
    </div>
  );
}
