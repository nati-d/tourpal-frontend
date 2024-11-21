import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

type PlanBoxProps = {
	plans: string[];
	title: React.ReactNode;
};

const PlanBox = ({plans, title}: PlanBoxProps) => {
	return (
		<Card className='w-full shadow-md border rounded-lg'>
			<CardHeader>
				<CardTitle className='text-xl font-semibold text-gray-800'>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<ol className='list-decimal pl-6 text-lg text-gray-600 space-y-2'>
					{plans.map((item: string, index: number) => (
						<li
							key={index}
							className='leading-relaxed'
						>
							{item}
						</li>
					))}
				</ol>
			</CardContent>
		</Card>
	);
};

export default PlanBox;
