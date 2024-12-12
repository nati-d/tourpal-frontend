"use client";

// import SectionWrapper from "@/components/sections/SectionWrapper";
// import EditList from "@/components/shared/EditList";
// import HeaderWithEditIcon from "@/components/shared/HeaderWithEditIcon";
// import List from "@/components/shared/List";
import {Button} from "@/components/ui/button";
// import {Skeleton} from "@/components/ui/skeleton";
// import {api} from "@/convex/_generated/api";
// import {Doc} from "@/convex/_generated/dataModel";
// import {useMutation} from "convex/react";
import {PencilIcon, PlusIcon, Sailboat} from "lucide-react";
import {useState} from "react";
import List from "./List";
import SectionWrapper from "./SectionWrapper";
import Header from "./Header";

type TopActivitiesProps = {
	activities: string[] | undefined;
};

export default function TopActivities({activities}: TopActivitiesProps) {
	const [editMode, setEditMode] = useState(false);
	//   const updateActivities = useMutation(api.plan.updatePartOfPlan);

	const handleToggleEditMode = () => {
		setEditMode(!editMode);
	};

	return (
		<SectionWrapper id='adventuresactivitiestodo'>
			<Header
				icon={<Sailboat />}
				title='Top Activities'
			/>
			<div>
				{activities && (
					<div className='ml-8'>
						<List list={activities} />
					</div>
				)}
			</div>
		</SectionWrapper>
	);
}
