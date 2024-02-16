import UserActivityCard from "@/components/userActivityCard";
import UserInfoCard from "@/components/userInfoCard";
import UserLocationsCard from "@/components/userLocationsCard";

export default function Home() {
    return (
        <div className="page-wrapper">
            <UserInfoCard />
            <UserLocationsCard />
            <UserActivityCard />
        </div>
    );
}
