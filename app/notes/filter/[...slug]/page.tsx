import NotesClient from "./Notes.client";

type Props = {
  params: {
    slug: string[];
  };
};

export default function FilterPage({
  params,
}: Props) {
  const currentTag = params.slug?.[0];

  const tag =
    currentTag === "all"
      ? ""
      : currentTag;

  return <NotesClient tag={tag} />;
}

