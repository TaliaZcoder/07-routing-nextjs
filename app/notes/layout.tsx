type Props = {
  children: React.ReactNode;
  modal?: React.ReactNode;
};

export default function NotesLayout({
    children,
    modal,
}: Props) {
    return (
    <>
        <div
        style={{
            display: "flex",
            gap: "32px",
            alignItems: "flex-start",
        }}
        >
        

        <section style={{ flex: 1 }}>
            {children}
        </section>
        </div>
        {modal}   
    </>
  );
}