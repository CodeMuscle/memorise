'use client'

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface DocumentPageProps {
  params: {
    documentId: Id<'documents'>;
  }
}

const InnerDocumentPage = ({ params }: DocumentPageProps) => {

  

  return (
    <div className="">
      
    </div>
  )
}

export default InnerDocumentPage