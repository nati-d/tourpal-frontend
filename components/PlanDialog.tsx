import React from "react";
import {Button} from "@/components/ui/button";
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import NewTravelForm from "./NewForm";

type PlanDialogProps = {
	open: boolean;
	handleCloseModal: () => void;
};

const PlanDialog = ({open, handleCloseModal}: PlanDialogProps) => {
	return (
		<div className="w-max">
			<Dialog
				open={open}
				onOpenChange={handleCloseModal}
			>
				<DialogContent className='w-[460px] overflow-auto h-auto'>
					<DialogHeader>
						<DialogTitle>AI Travel Planner</DialogTitle>
						<DialogDescription></DialogDescription>
					</DialogHeader>
					<div className='flex items-center space-x-2'>
						<NewTravelForm />
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default PlanDialog;
