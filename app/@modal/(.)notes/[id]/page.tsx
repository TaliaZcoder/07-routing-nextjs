'use client'

import { useRouter } from "next/navigation";

import Modal from "@/components/Modal/Modal";
import NotePreview from "./NotePreview.client";

export default function NoteModalPage() {
  const router = useRouter();

  return (
    <Modal
      onClose={() => router.back()}
    >
      <NotePreview />
    </Modal>
  );
}