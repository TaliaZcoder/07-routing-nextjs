type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal?: React.ReactNode;
};

export default function NotesLayout({
    children,
    sidebar,
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
        <aside>{sidebar}</aside>

        <section style={{ flex: 1 }}>
            {children}
        </section>
        </div>
        {modal}   
    </>
  );
}