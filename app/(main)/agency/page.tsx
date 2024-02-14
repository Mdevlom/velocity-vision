import AgencyDetail from "@/components/forms/agencyDetail";
import {
  getAuthUserDetails,
  verifyAndAcceptInvitation,
} from "@/lib/model/queries";
import { currentUser } from "@clerk/nextjs";
import { Plan } from "@prisma/client";
import { redirect } from "next/navigation";

const Agency = async ({
  searchParams,
}: {
  searchParams: { plan: Plan; state: String; code: String };
}) => {
  const agencyId = verifyAndAcceptInvitation();

  // const user = await getAuthUserDetails();
  // if (await agencyId) {
  //   if (user?.role === "SUBACCOUNT_GUEST" || user?.role === "SUBACCOUNT_USER") {
  //     return redirect("/subacount");
  //   } else if (user?.role === "AGENCY_OWNER" || user?.role === "AGENCY_ADMIN") {
  //     if (searchParams.plan) {
  //       return redirect(
  //         `/agency/${agencyId}/billing?plan=${searchParams.plan}`
  //       );
    
  //     }
  //     if (searchParams.state) {
  //       const statePath = searchParams.state.split("__")[0];
  //       const stateAgencyId = searchParams.state.split("__")[1];
  //       if (!stateAgencyId) return <div>Non Autorisé</div>;
  //       return redirect(
  //         `/agency/${agencyId}/${statePath}?code=${searchParams.code}`
  //       );
  //     } else return redirect(`/agency/${agencyId}`);
  //   } else {
  //     return <div>Non Autorisé</div>;
  //   }
  // }
  // const authUser = await currentUser()


  return (
    <div className="flex justify-center items-center mt-4">
      <div className="max-w-[850px] border-[1px] p-4 rounded-xl">
        <h1 className="text-4xl">Creez Un Agence</h1>
        <AgencyDetail />
      </div>
    </div>
  );
};
export default Agency;
