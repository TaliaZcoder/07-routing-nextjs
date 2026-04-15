'use client';

import NotesClient from "@/app/notes/Notes.client";

type Props = {
  tag?: string;
};

export default function FilteredNotesClient({
  tag,
}: Props) {
  return <NotesClient tag={tag} />;
}