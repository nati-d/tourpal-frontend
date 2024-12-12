"use client";
import {Backpack} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import List from "./List";
import Header from "./Header";

type PackingChecklistProps = {
	checklist: string[];
};

export default function PackingChecklist({checklist}: PackingChecklistProps) {
	return (
		<SectionWrapper id='localcuisinechecklist'>
			<Header
				icon={<Backpack />}
				title='Packing Checklist'
			/>
			<div className='ml-8'>
				<List list={checklist} />
			</div>
		</SectionWrapper>
	);
}
