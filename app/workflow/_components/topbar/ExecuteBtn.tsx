"use client"

import useExecutionPlan from '@/components/hooks/useExecutionPlan'
import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import { useReactFlow } from '@xyflow/react'
import { PlayIcon } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'
import { WorkflowExecutionPlan } from '@/types/workflow';
import { json } from 'stream/consumers'
import { RunWorkflow } from '@/actions/workflows/runWorkFlow'

export default function ExecuteBtn({WorkflowId} : {WorkflowId: string}) {
  const generate = useExecutionPlan();
  const {toObject} = useReactFlow();

  const mutaion = useMutation({
    mutationFn: RunWorkflow,
    onSuccess: ()=>{
      toast.success("Execuion started", {id: "flow-execution"});
    },
    onError: ()=>{
      toast.error("Something went wrong", {id: "flow-execution"});
    },

  })

  return (
  <Button variant={"outline"} className='flex items-center gap-2' disabled={mutaion.isPending}
    onClick={()=>{
    const plan = generate();
    if(!plan){
      // Client side validation
      return;
    }

    mutaion.mutate({
      workflowId: WorkflowId,
      flowDefinition: JSON.stringify(toObject()),
    })
  }}>
    <PlayIcon size={16} className='stroke-orange-400' />
    Execute
    </Button>
  );
}